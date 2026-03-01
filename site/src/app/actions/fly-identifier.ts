"use server";

import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

const evolink = createOpenAI({
    baseURL: "https://api.evolink.ai/v1",
    apiKey: "sk-AYtNUg9whJzuASjQLQC6tdWwXa8vc11ffO8nre1FWMeZuZLW",
});

export async function identifyFly(formData: {
    location: string;
    appearance: string;
    amount: string;
    notes: string;
}) {
    try {
        const { object } = await generateObject({
            model: evolink("gpt-5.1"),
            schema: z.object({
                likelyType: z.enum([
                    "fruit_flies",
                    "drain_flies",
                    "house_flies",
                    "fungus_gnats",
                    "unknown",
                ]),
                explanation: z.string().describe("A 1-2 sentence explanation of why this fly type was chosen based on the user's description. E.g. because they are small and found near the sink."),
                nextStep: z.string().describe("A concise specific action the user should take immediately."),
                recommendedPageSlug: z.enum([
                    "/fruit-flies",
                    "/drain-flies",
                    "/house-flies",
                    "/fruit-fly-trap",
                    "/",
                ]),
            }),
            prompt: `Identify the household fly based on the following user input.
      Location: ${formData.location}
      Appearance: ${formData.appearance}
      Amount: ${formData.amount}
      Extra Notes: ${formData.notes || "None"}
      
      Determine if these are Fruit Flies, Drain Flies, House Flies, or Fungus Gnats. 
      If there is not enough information, guess the most likely standard matched type but explain the uncertainty.
      Return the likely type, an explanation, immediate next steps, and the best slug to link them to.`,
        });

        return { success: true, data: object };
    } catch (error) {
        console.error("AI Generation Error:", error);
        return { success: false, error: "Failed to identify fly. Please try again later." };
    }
}
