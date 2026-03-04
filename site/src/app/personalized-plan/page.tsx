import { Metadata } from "next";
import { PersonalizedPlanForm } from "@/components/features/identifier/personalized-plan-form";
import { Faq } from "@/components/shared/faq";
import Link from "next/link";
import { cookies } from "next/headers";
import { CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Your Custom Fly Removal Plan | FlyAway Guide",
    description: "Get a customized, step-by-step action plan to remove flies from your home based on your unique situation and preferences.",
    alternates: {
        canonical: '/personalized-plan',
    },
};

export default async function PersonalizedPlanPage() {
    const faqs = [
        { question: "What exactly is included in the plan?", answer: "You receive a rapid 24-hour response strategy, a 3-day complete clearance protocol, and a 7-day prevention guide to ensure they do not return, along with specific product recommendations." },
        { question: "Do I have to buy expensive chemicals?", answer: "No. If you prefer natural or DIY methods (e.g., you have pets or children), you can specify that in your constraints and your plan will be built entirely around safer alternatives." },
        { question: "What if I don't know the exact fly type?", answer: "That's okay! We ask about their appearance and location. Our system will deduce the likely type and build the best generic response if it remains uncertain." },
    ];

    const cookieStore = await cookies();
    const hasPaid = cookieStore.get("has_paid")?.value === "true";

    return (
        <div className="flex flex-col min-h-screen bg-muted/10">
            {/* Header Area */}
            <section className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        Get Your Custom Removal Plan
                    </h1>
                    <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
                        Stop guessing and testing. Tell us about your home and learn exactly what steps to take.
                    </p>
                </div>
            </section>

            {/* Main Form Area */}
            <section className="w-full pb-16">
                <div className="container px-4 md:px-6">
                    {hasPaid ? (
                        <PersonalizedPlanForm />
                    ) : (
                        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
                            {/* Value Proposition */}
                            <div className="text-center space-y-4 mb-8">
                                <h2 className="text-3xl font-bold tracking-tight">Unlock Your Custom Strategy</h2>
                                <p className="text-lg text-muted-foreground">
                                    Our AI analyzes your exact fly type, infestation severity, and constraints (like pets or kids) to build a safe, guaranteed removal protocol.
                                </p>
                            </div>

                            <Card className="w-full border-primary/50 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                                    <Lock className="w-3 h-3" /> SECURE CHECKOUT
                                </div>
                                <CardHeader className="text-center pt-10">
                                    <CardTitle className="text-2xl">AI Personalized Plan</CardTitle>
                                    <div className="mt-4 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight">$5</span>
                                        <span className="text-muted-foreground">one-time payment</span>
                                    </div>
                                    <CardDescription className="pt-4 max-w-sm mx-auto">
                                        No subscription. Just instant access to expert-level pest control tailored for you.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 pt-4 md:px-12">
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            "Custom 24-hour rapid response plan",
                                            "3-day complete clearance strategy",
                                            "Safe for your specific situation (pets/kids)",
                                            "Exact shopping list of supplies needed",
                                            "Long-term 7-day prevention guide",
                                            "Instant digital delivery",
                                        ].map((feature, i) => (
                                            <li key={i} className="flex gap-x-3 text-sm items-start">
                                                <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="pb-8 pt-6 flex-col space-y-4">
                                    <Button asChild size="lg" className="w-full max-w-sm text-lg rounded-full shadow-md transition-transform hover:-translate-y-1">
                                        <a href={process.env.NEXT_PUBLIC_CREEM_PRODUCT_LINK || "https://www.creem.io/test/payment/prod_RpM6A9pJMGWKllhZF3wUS"}>
                                            Unlock the Generator Now
                                        </a>
                                    </Button>
                                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                                        <ShieldCheck className="w-4 h-4" /> Payments safely processed by Creem.io
                                    </p>
                                </CardFooter>
                            </Card>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ */}
            <Faq items={faqs} title="Questions About The Custom Plan?" />

            {/* Return Links */}
            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
        </div>
    );
}
