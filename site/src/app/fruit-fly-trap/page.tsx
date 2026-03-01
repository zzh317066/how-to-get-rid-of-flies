import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Best Fruit Fly Trap Methods | DIY & Store-Bought | FlyAway Guide",
    description: "Discover the best fruit fly trap solutions. Learn how to make an effective apple cider vinegar trap or choose a reliable commercial option.",
};

export default function TrapPage() {
    const faqs = [
        { question: "What is the best fruit fly trap?", answer: "The best DIY trap is an apple cider vinegar and dish soap mixture. The best commercial traps are often cone-shaped liquid bait traps or aesthetic plug-in UV traps." },
        { question: "Does apple cider vinegar work?", answer: "Yes, incredibly well. The fermented scent strongly mimics rotting fruit, drawing them into the liquid." },
        { question: "How long does it take for traps to work?", answer: "A good trap begins catching fruit flies within a few hours. Significant reduction should be noticeable after 24 to 48 hours." },
        { question: "Why are fruit flies still there after using a trap?", answer: "Traps only kill adult flies. If fruit flies remain, you still have an active breeding source (like a dirty drain or hidden spill) producing new eggs." },
        { question: "Do homemade traps work as well as store-bought ones?", answer: "Yes, for most mild-to-moderate infestations, homemade vinegar traps are just as effective as chemical store-bought baits." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Best Fruit Fly Trap Methods
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        DIY and ready-made trap options that help reduce fruit flies fast.
                    </p>
                </div>
            </section>

            <section className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-4xl space-y-12">

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="shadow-sm border-primary/10 transition-transform hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle>DIY Fruit Fly Trap</CardTitle>
                                    <CardDescription>The Classic Apple Cider Vinegar Method</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <p><strong>How it works:</strong> Vinegar lures them in; dish soap breaks the surface tension so they drown.</p>
                                    <p><strong>When to use:</strong> Immediate response, or mild kitchen infestations.</p>
                                    <p><strong>Limitations:</strong> Needs to be refreshed every few days to remain potent.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-sm border-primary/10 transition-transform hover:-translate-y-1">
                                <CardHeader>
                                    <CardTitle>Commercial Trap Options</CardTitle>
                                    <CardDescription>Store-Bought Solutions</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <p><strong>Types:</strong> Sticky traps, liquid bait bottles, and countertop UV plug-in lights.</p>
                                    <p><strong>When to use:</strong> Severe infestations or when seeking an aesthetically pleasing device.</p>
                                    <p><strong>Limitations:</strong> Requires purchasing refills or replacement pads.</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-4 text-center mt-12 bg-destructive/10 text-destructive border border-destructive/30 rounded-xl p-8 shadow-sm">
                            <h2 className="text-3xl font-bold mb-2">Crucial Trap Limitation</h2>
                            <p className="text-lg max-w-2xl mx-auto">
                                Traps catch adults, but they usually fail to catch the source.
                                Cleaning and source removal still matter deeply.
                            </p>
                            <Button variant="outline" asChild className="mt-4 border-destructive/50 text-destructive hover:bg-destructive/20 rounded-full">
                                <Link href="/fruit-flies">Read Full Fruit Fly Guide</Link>
                            </Button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Upsell */}
            <UpsellCta
                title="Need a plan beyond traps?"
                description="Traps aren't enough for severe issues. Get a personalized fruit fly removal plan."
            />

            {/* FAQ */}
            <Faq items={faqs} title="Trap FAQs" />

            {/* Return Links */}
            <div className="container py-8 text-center border-t flex flex-col items-center gap-4">
                <Link href="/fruit-flies" className="text-primary hover:underline font-medium">&larr; Back to Fruit Flies Guide</Link>
                <Link href="/" className="text-muted-foreground hover:underline text-sm">Back to Main Content</Link>
            </div>
        </div>
    );
}
