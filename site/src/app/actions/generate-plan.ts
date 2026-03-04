"use server";

import { cookies } from "next/headers";

import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

const evolink = createOpenAI({
    baseURL: "https://api.evolink.ai/v1",
    apiKey: process.env.EVOLINK_API_KEY || "",
});

export async function generatePlan(formData: {
    flyType: string;
    area: string;
    severity: string;
    petsOrKids: string;
    chemicalPreference: string;
    extraNotes: string;
}) {
    try {
        const cookieStore = await cookies();
        const hasPaid = cookieStore.get("has_paid")?.value === "true";

        if (!hasPaid) {
            return { success: false, error: "PAYMENT_REQUIRED", message: "A valid payment is required to generate a personalized AI plan." };
        }

        const { object } = await generateObject({
            model: evolink("gpt-5.1"),
            schema: z.object({
                situationSummary: z.string().describe("A 2 sentence comforting summary of their specific situation, acknowledging their constraints (e.g. pets/chemicals)."),
                action24h: z.array(z.string()).describe("List of 3-4 immediate rapid response actions for the next 24 hours."),
                action3Day: z.array(z.string()).describe("List of 3-4 steps for a 3-day complete clearance plan."),
                action7Day: z.array(z.string()).describe("List of 3 steps for a 7-day prevention strategy."),
                supplies: z.array(z.string()).describe("List of 3-5 specific generic supplies they need (e.g. Apple Cider Vinegar)."),
                whatNotToDo: z.array(z.string()).describe("List of 3 things they specifically should NOT do, especially considering their chemical/pets preference."),
                guideSlug: z.enum(["/fruit-flies", "/drain-flies", "/house-flies", "/fruit-fly-trap", "/"]).describe("The best internal slug to link them to for more general reading."),
            }),
            prompt: `Generate a highly personalized fly removal action plan based on the following user situation.
      Fly Type: ${formData.flyType}
      Problem Area: ${formData.area}
      Severity: ${formData.severity}
      Pets or Children present: ${formData.petsOrKids}
      Chemical spray preference: ${formData.chemicalPreference}
      Extra Notes: ${formData.extraNotes || "None"}
      
      The plan must respect their chemical preference and the presence of pets/kids (e.g. absolutely no toxic bug bombs if they have pets or prefer natural). Give specific, actionable, step-by-step advice rather than generic fluff. Return the structured plan.`,
        });

        return { success: true, data: object };
    } catch (error) {
        console.error("AI Generation Error:", error);
        return { success: false, error: "Failed to generate plan. Please try again later." };
    }
}
