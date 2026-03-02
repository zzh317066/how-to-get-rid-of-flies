import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "How to Get Rid of Drain Flies by Cleaning the Source | FlyAway Guide",
    description: "Learn how to get rid of drain flies by treating the source in sinks, drains, and damp areas — not just killing the ones you see.",
    alternates: {
        canonical: '/drain-flies',
    },
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
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">What Are Drain Flies? Biology and Identification</h2>
                        <div className="space-y-4 max-w-3xl">
                            <p className="text-muted-foreground text-lg">
                                To understand how to get rid of drain flies, you must first confirm you actually have them. Also known as moth flies or sink flies (Psychodidae family), drain flies are small (about 1.5 to 5mm), dark gray or black insects with a distinctly fuzzy, moth-like appearance.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                They are remarkably weak flyers. Instead of buzzing continuously around the room like <Link href="/house-flies" className="text-primary hover:underline font-medium">house flies</Link>, drain flies tend to make short, erratic hops. They spend most of their time resting motionless on the walls near sinks, shower drains, and damp basement floors.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">The Tape Test: Finding the Source</h2>
                        <p className="text-muted-foreground text-lg">
                            If you have multiple drains in a bathroom, you need to know which one is the active breeding ground. Before treating your pipes, perform the "Tape Test" to find the exact source.
                        </p>
                        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-3">How to do the Tape Test:</h3>
                            <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-lg ml-2">
                                <li>Dry the drain cover completely before going to bed.</li>
                                <li>Place a piece of clear packing tape over the drain, sticky side facing down.</li>
                                <li><strong>Do not completely seal the drain</strong>—leave a tiny gap for airflow so flies still try to exit.</li>
                                <li>Check the tape the next morning. If flies are stuck to the bottom, you have found the infested drain.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Step-by-Step Guide: How to Get Rid of Drain Flies Fast</h2>
                        <p className="text-muted-foreground text-lg">
                            The secret to eliminating these pests is understanding that their eggs and larvae live inside the gelatinous slime (biofilm) that coats the inside of your pipes. Killing the adults does nothing to stop the infestation. You must destroy the biofilm.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Step 1: Flush with Hot Water</h3>
                                <p className="text-muted-foreground text-lg">
                                    Start by pouring a large pot of nearly boiling water down the affected drain. Do this carefully. This initial flush will loosen the outer layers of the organic sludge and kill some of the larvae near the surface, preparing the pipe for deep cleaning.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-2">Step 2: Physically Scrub the Pipe</h3>
                                <p className="text-muted-foreground text-lg">
                                    This is the most critical manual step. Use a long, stiff metal pipe brush to aggressively scrub the inside of the drain pipe. Move it up and down while twisting to break apart the sticky film where the drain flies lay their eggs. Hot water alone cannot remove this hardened biofilm.
                                </p>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 mt-6">
                                <h3 className="text-2xl font-bold mb-4">Step 3: Apply a Bio-Enzymatic Drain Cleaner</h3>
                                <p className="mb-4 text-muted-foreground text-lg">
                                    When researching how to get rid of drain flies, you will often reach for bleach. <strong>Do not use bleach.</strong> Bleach flows too quickly down the drain to penetrate the biofilm and can damage your pipes over time.
                                </p>
                                <p className="text-muted-foreground text-lg">
                                    Instead, you must use a bio-enzymatic drain cleaner (like Green Gobbler or Invade Bio Drain). These cleaners contain beneficial bacteria and enzymes that cling to the sides of the pipe and literally eat the organic sludge, removing the drain flies' food source and breeding ground entirely. Apply it exactly as the bottle directs, usually right before bed so it can work undisturbed overnight.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-red-600">Common Mistakes to Avoid</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="border border-[oklch(0.65_0.15_150)]/30 bg-[oklch(0.65_0.15_150)]/10 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-[oklch(0.4_0.1_150)] text-xl mb-2">What Works (Do This)</h3>
                                <ul className="list-disc list-inside space-y-2 text-[oklch(0.3_0.05_150)] text-lg">
                                    <li>Physical scrubbing of the drain pipe</li>
                                    <li>Bio-enzymatic drain cleaners</li>
                                    <li>Fixing leaky pipes under the sink</li>
                                    <li>Repeating the enzyme treatment for 3-5 days</li>
                                </ul>
                            </div>
                            <div className="border border-destructive/30 bg-destructive/10 rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-destructive text-xl mb-2">What Does Not Work Alone</h3>
                                <ul className="list-disc list-inside space-y-2 text-destructive text-lg">
                                    <li>Spraying flying adults with aerosol bug spray</li>
                                    <li>Pouring bleach or ammonia down the drain</li>
                                    <li>Setting an apple cider vinegar trap near the sink</li>
                                    <li>Treating the bathroom while ignoring the kitchen</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 border-t pt-12">
                        <h2 className="text-3xl font-bold">Are Drain Flies Dangerous?</h2>
                        <p className="text-muted-foreground text-lg">
                            Fortunately, no. Drain flies do not bite, and unlike <Link href="/house-flies" className="text-primary hover:underline">house flies</Link>, they are not known to transmit human diseases despite living in sewage and dirty pipes. However, their presence in large numbers can trigger bronchial asthma in highly susceptible individuals, and they are a clear indicator that your plumbing hygiene needs immediate attention.
                        </p>
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
