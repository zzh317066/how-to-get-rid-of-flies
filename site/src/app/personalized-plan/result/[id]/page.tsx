import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlanResultClient } from "@/components/features/identifier/plan-result-client";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Your Custom Fly Removal Plan Result",
    description: "View your customized fly removal action-plan here.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function PlanResultPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        Your Action Plan is Ready
                    </h1>
                    <p className="mx-auto max-w-[600px] text-lg opacity-90">
                        Custom AI Generated Strategy
                    </p>
                </div>
            </section>

            <section className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                    <Suspense fallback={<div className="text-center py-20 text-muted-foreground animate-pulse">Loading AI Plan engine...</div>}>
                        <PlanResultClient />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}
