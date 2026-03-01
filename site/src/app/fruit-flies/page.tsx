import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "How to Get Rid of Fruit Flies Fast | FlyAway Guide",
    description: "Learn how to get rid of fruit flies fast, what causes them, which traps work, and how to keep them from coming back.",
};

export default function FruitFliesPage() {
    const faqs = [
        { question: "What kills fruit flies the fastest?", answer: "A targeted apple cider vinegar trap combined with an immediate deep clean of food sources and sticky counters kills fruit flies the fastest." },
        { question: "Why do fruit flies keep coming back?", answer: "They keep coming back because their breeding ground (often a hidden spill, overripe fruit, or a dirty trash bin) hasn't been completely removed." },
        { question: "Does apple cider vinegar really work?", answer: "Yes. Fruit flies are highly attracted to the fermentation smell of apple cider vinegar. Adding a drop of dish soap breaks the surface tension, causing them to sink." },
        { question: "How do I get rid of fruit flies in the kitchen?", answer: "Remove all exposed produce, clean your dishes immediately, wipe down countertops with multi-purpose cleaner, and empty your kitchen trash daily." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        How to Get Rid of Fruit Flies
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Remove fruit flies fast and stop them from coming back. Let's tackle the source together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button size="lg" className="rounded-full shadow-md transition-transform hover:-translate-y-1" asChild>
                            <Link href="#quick-steps">Jump to Quick Fixes</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full" asChild>
                            <Link href="/personalized-plan">Get My Custom Plan</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Quick Answer */}
            <section id="quick-steps" className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Quick Answer: Fast Steps</h2>
                        <Card className="shadow-sm border-primary/10">
                            <CardContent className="pt-6 space-y-4 text-lg">
                                <p><strong>1. Remove overripe fruit and food waste:</strong> This is their primary food and breeding source.</p>
                                <p><strong>2. Clean trash cans and counters:</strong> Wipe away all sticky residue.</p>
                                <p><strong>3. Set a fruit fly trap:</strong> Catch the remaining adults.</p>
                                <p><strong>4. Check drains and hidden food sources:</strong> Look under appliances.</p>
                                <p><strong>5. Repeat cleaning:</strong> Essential to prevent their return.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Deep Dive Content Outline */}
            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">What Are Fruit Flies?</h2>
                        <p className="text-muted-foreground text-lg">
                            Fruit flies are very small flying insects (about 1/8 inch long) with tan or light brown bodies and usually bright red eyes.
                            Unlike <Link href="/drain-flies" className="text-primary hover:underline">drain flies</Link> which look fuzzy and sit near sinks, fruit flies actively hover around your kitchen, particularly near fruit bowls, trash bins, or empty bottles.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Why Do I Have Fruit Flies?</h2>
                        <p className="text-muted-foreground text-lg">
                            Fruit flies are attracted to fermenting sugars. Common attractants include:
                        </p>
                        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 ml-4">
                            <li>Overripe or rotting fruit left on the counter.</li>
                            <li>Unsealed trash bins and recycling bins.</li>
                            <li>Sticky spills under the fridge or on counters.</li>
                            <li>Residue left in empty alcohol or soda bottles.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">DIY and Natural Methods</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            You don't always need harsh chemicals. Try this highly effective natural trap:
                        </p>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 shadow-sm">
                            <h3 className="text-xl font-bold mb-2">The Apple Cider Vinegar Trap</h3>
                            <p className="mb-4 text-muted-foreground">Pour a half inch of apple cider vinegar into a small bowl or jar. Add a single drop of liquid dish soap and mix gently. Place it near the fruit fly activity.</p>
                            <Button asChild variant="secondary" className="rounded-full">
                                <Link href="/fruit-fly-trap">Want more trap options?</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Upsell */}
            <UpsellCta
                title="Still dealing with fruit flies?"
                description="Get a removal plan based on your exact kitchen and home situation. Stop guessing."
                buttonText="Get My Fruit Fly Plan"
            />

            {/* FAQ */}
            <Faq items={faqs} title="Fruit Fly FAQs" />

            {/* Return Links */}
            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Guide</Link>
            </div>
        </div>
    );
}
