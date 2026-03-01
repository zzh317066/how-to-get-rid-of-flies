import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "How to Get Rid of House Flies Fast | FlyAway Guide",
    description: "Learn how to get rid of house flies fast, understand why they keep coming back, and keep house flies away naturally.",
};

export default function HouseFliesPage() {
    const faqs = [
        { question: "What is the fastest way to get rid of house flies?", answer: "Removing any exposed food or garbage immediately and using an indoor fly trap or swatter is the fastest method." },
        { question: "Why do house flies keep coming back?", answer: "They return because your home still offers odors that attract them, such as unsealed trash, pet waste, or open pet food near entryways." },
        { question: "Do fly traps work for house flies?", answer: "Yes. Sticky traps and UV light traps work well indoors for house flies, but they shouldn't replace standard sanitation." },
        { question: "How do flies get into my house?", answer: "Flies enter through open doors, torn window screens, and tiny gaps around windows and vents. They follow food odors inside." },
        { question: "How can I keep house flies away naturally?", answer: "Store all food in sealed containers, take trash out frequently, secure tight lids on bins, use essential oil deterrents near doors, and ensure all screens are intact." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        How to Get Rid of House Flies
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Remove house flies fast and reduce the reasons they keep entering your home.
                    </p>
                </div>
            </section>

            {/* Quick Answer */}
            <section className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Quick Answer: Fast Steps</h2>
                        <Card className="shadow-sm border-primary/10">
                            <CardContent className="pt-6 space-y-4 text-lg">
                                <p><strong>1. Remove exposed food and trash:</strong> Don't leave pet food or human food out.</p>
                                <p><strong>2. Clean bins and surfaces:</strong> Eliminate the odors attracting them indoors.</p>
                                <p><strong>3. Use traps or sprays if needed:</strong> UV traps or sticky paper work well for adults.</p>
                                <p><strong>4. Close entry points:</strong> Fix screens and keep doors shut.</p>
                                <p><strong>5. Keep the home less attractive:</strong> Long-term sanitation is key.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Deep Dive */}
            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">What Are House Flies?</h2>
                        <p className="text-muted-foreground text-lg">
                            House flies are exactly what they sound like—the common, larger flies that buzz loudly around your home. They are attracted to decaying organic matter, feces, and unprotected human food. Unlike <Link href="/fruit-flies" className="text-primary hover:underline">fruit flies</Link> which stick to fruit, house flies will land on almost anything.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Why Are There House Flies in My Home?</h2>
                        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2 ml-4">
                            <li>Trash containing spoiled food.</li>
                            <li>Exposed food or crumbs on counters.</li>
                            <li>Frequently opened doors or un-screened windows.</li>
                            <li>Pet food left out all day.</li>
                            <li>Outdoor attractants (like dog waste) near entrances.</li>
                        </ul>
                    </div>

                    <div className="space-y-4 bg-primary/5 p-6 rounded-xl border border-primary/20 shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">How to Keep House Flies Away</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            Prevention is the only permanent cure for house flies.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Check your window screens for holes.</li>
                            <li>Hose down your outdoor garbage bins monthly.</li>
                            <li>Avoid leaving dishes in the sink overnight.</li>
                            <li>Store food in airtight locking containers.</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Upsell */}
            <UpsellCta
                title="Get a home-specific fly removal plan"
                description="Tired of swatting? Let's build a plan tailored to your home layout and habits."
            />

            {/* FAQ */}
            <Faq items={faqs} title="House Fly FAQs" />

            {/* Return Links */}
            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Guide</Link>
            </div>
        </div>
    );
}
