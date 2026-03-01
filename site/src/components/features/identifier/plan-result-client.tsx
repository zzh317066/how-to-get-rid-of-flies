"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { generatePlan } from "@/app/actions/generate-plan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function PlanResultClient() {
    const searchParams = useSearchParams();
    const [plan, setPlan] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlan = async () => {
            setLoading(true);
            const data = {
                flyType: searchParams.get("flyType") || "",
                area: searchParams.get("area") || "",
                severity: searchParams.get("severity") || "",
                petsOrKids: searchParams.get("petsOrKids") || "",
                chemicalPreference: searchParams.get("chemicalPreference") || "",
                extraNotes: searchParams.get("extraNotes") || "",
            };

            const response = await generatePlan(data);
            if (response.success && response.data) {
                setPlan(response.data);
                trackEvent("plan_generated", { type: data.flyType });
            } else {
                setError(response.error || "Failed to generate plan.");
            }
            setLoading(false);
        };

        fetchPlan();
    }, [searchParams]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Analyzing constraints and generating your custom AI plan...</p>
            </div>
        );
    }

    if (error || !plan) {
        return (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <p className="text-red-500 font-medium">{error}</p>
                <Button asChild variant="outline">
                    <Link href="/personalized-plan">Try Again</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Summary */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">Situation Summary</h2>
                <p className="text-muted-foreground">
                    {plan.situationSummary}
                </p>
            </div>

            {/* 24h Action */}
            <Card>
                <CardHeader className="bg-muted/50">
                    <CardTitle className="text-xl">Next 24 Hours: Rapid Response</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                        {plan.action24h.map((step: string, i: number) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* 3 Day Plan */}
            <Card>
                <CardHeader className="bg-muted/50">
                    <CardTitle className="text-xl">3-Day Clearance Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                        {plan.action3Day.map((step: string, i: number) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* 7 Day Prevention */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">7-Day Prevention Strategy</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                    {plan.action7Day.map((step: string, i: number) => (
                        <li key={i}>{step}</li>
                    ))}
                </ul>
            </div>

            {/* Supplies */}
            <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <h3 className="font-bold text-lg mb-4">Recommended Supplies</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                        {plan.supplies.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* What Not To Do */}
                <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-6 rounded-lg text-red-900 dark:text-red-400">
                    <h3 className="font-bold text-lg mb-4">What NOT To Do</h3>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        {plan.whatNotToDo.map((item: string, i: number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-4 border-t">
                <Button onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(plan, null, 2));
                    alert("Copied to clipboard!");
                }}>
                    Copy Plan to Clipboard
                </Button>
                <Button variant="outline" asChild>
                    <Link href={plan.guideSlug}>Read the Full Guide</Link>
                </Button>
            </div>
        </div>
    );
}
