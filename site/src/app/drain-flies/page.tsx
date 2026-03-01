import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "How to Get Rid of Drain Flies by Cleaning the Source | FlyAway Guide",
    description: "Learn how to get rid of drain flies by treating the source in sinks, drains, and damp areas — not just killing the ones you see.",
};

export default function DrainFliesPage() {
    const faqs = [
        { question: "What kills drain flies instantly?", answer: "Boiling water poured down the drain can kill larvae instantly, and a targeted flying insect spray will kill adults on contact. However, this won't prevent them from returning." },
        { question: "Why do drain flies keep coming back?", answer: "Drain flies return because the organic sludge inside your pipes (their breeding ground) hasn't been completely scrubbed away." },
        { question: "How do I know if they are drain flies or fruit flies?", answer: "Drain flies are dark, fuzzy, and look somewhat like tiny moths. They rest on walls near sinks. Fruit flies are tan, smooth, hover actively, and prefer fruit." },
        { question: "Are drain flies dangerous?", answer: "No, drain flies do not bite and are not known to transmit human diseases, but they are a nuisance and indicator of poor pipe hygiene." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        How to Get Rid of Drain Flies
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Remove drain flies by cleaning the source, not just killing the adults resting on your walls.
                    </p>
                </div>
            </section>

            {/* Quick Answer */}
            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Quick Answer: Fast Steps</h2>
                        <Card className="shadow-sm border-primary/10">
                            <CardContent className="pt-6 space-y-4 text-lg">
                                <p><strong>1. Clean the drain thoroughly:</strong> Flushing with hot water is the first step.</p>
                                <p><strong>2. Remove organic buildup:</strong> Use a pipe brush to physically scrub the sludge inside the drain.</p>
                                <p><strong>3. Use the right drain treatment:</strong> Bio-enzymatic drain cleaners work best here.</p>
                                <p><strong>4. Keep the area dry:</strong> Fix any leaks and wipe down standing moisture.</p>
                                <p><strong>5. Repeat for several days:</strong> Ensure all larval cycles are broken.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Deep Dive */}
            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">What Are Drain Flies?</h2>
                        <p className="text-muted-foreground text-lg">
                            Also known as moth flies or sink flies, drain flies are small, dark, fuzzy insects. They are weak flyers and typically rest on the walls near sinks, showers, and damp basements. They are distinctly different in appearance and behavior compared to <Link href="/fruit-flies" className="text-primary hover:underline">fruit flies</Link>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-red-600">What Actually Works vs What Does Not</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="border border-[oklch(0.65_0.15_150)]/30 bg-[oklch(0.65_0.15_150)]/10 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-[oklch(0.4_0.1_150)] text-xl mb-2">What Works (Do This)</h3>
                                <ul className="list-disc list-inside space-y-2 text-[oklch(0.3_0.05_150)]">
                                    <li>Physical scrubbing of the drain pipe (Source cleaning)</li>
                                    <li>Bio-enzymatic drain cleaners (Eats the slime)</li>
                                    <li>Repeated cleaning regimens</li>
                                </ul>
                            </div>
                            <div className="border border-destructive/30 bg-destructive/10 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-destructive text-xl mb-2">What Does Not Work Alone</h3>
                                <ul className="list-disc list-inside space-y-2 text-destructive">
                                    <li>Spraying flying adults only (Ignores the eggs)</li>
                                    <li>Setting random traps without drain cleaning</li>
                                    <li>Pouring bleach once (Bleach flows too fast to clean the sludge)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Upsell */}
            <UpsellCta
                title="Need a plan for your bathroom, sink, or drain area?"
                description="Get a tailored drain fly removal plan that works for your home plumbing."
            />

            {/* FAQ */}
            <Faq items={faqs} title="Drain Fly FAQs" />

            {/* Return Links */}
            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Guide</Link>
            </div>
        </div>
    );
}
