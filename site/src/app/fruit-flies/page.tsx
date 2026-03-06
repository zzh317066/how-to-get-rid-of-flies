import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "How to Get Rid of Fruit Flies Fast | FlyAway Guide",
    description: "Learn how to get rid of fruit flies fast, what causes them, which traps work, and how to keep them from coming back.",
    alternates: {
        canonical: '/fruit-flies',
    },
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
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">What Are Fruit Flies and Why Are They Here?</h2>
                        <div className="space-y-4 max-w-3xl">
                            <p className="text-muted-foreground text-lg">
                                Before you can determine how to get rid of fruit flies, you must understand their biology. Fruit flies (Drosophila melanogaster) are very small flying insects—usually about 1/8 inch long—with tan or light brown bodies and bright red eyes.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Unlike <Link href="/drain-flies" className="text-primary hover:underline font-medium">drain flies</Link>, which look fuzzy and sit sluggishly near sinks, fruit flies actively hover around your kitchen, particularly near fruit bowls, trash bins, or empty bottles. They have a phenomenal sense of smell.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">The Main Causes: What Attracts Fruit Flies?</h2>
                        <p className="text-muted-foreground text-lg">
                            Fruit flies are exclusively attracted to fermenting sugars and yeast. If you are researching how to get rid of fruit flies, your first step must be eliminating these attractants. Common sources include:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            <Card className="shadow-none border-primary/20 bg-card">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Unsealed Trash</h3>
                                    <p className="text-muted-foreground">Kitchen bins lacking a tight lid, especially if they contain food scraps.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border-primary/20 bg-card">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Overripe Produce</h3>
                                    <p className="text-muted-foreground">Bananas, tomatoes, and apples left on the counter too long.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border-primary/20 bg-card">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Sticky Spills</h3>
                                    <p className="text-muted-foreground">Dried juice or wine underneath appliances or inside the pantry.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border-primary/20 bg-card">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Empty Bottles</h3>
                                    <p className="text-muted-foreground">Unrinsed beer, wine, or soda bottles left in the recycling bin.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Step-by-Step: How to Get Rid of Fruit Flies Fast</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-3 flex items-center"><span className="text-primary mr-2">Step 1:</span> Destroy the Breeding Ground</h3>
                                <p className="text-muted-foreground text-lg">
                                    You cannot get rid of fruit flies without finding where they are laying their eggs. A female fruit fly can lay up to 500 eggs in decaying organic matter. Inspect every inch of your kitchen. Throw away aging produce. Take the trash out immediately. Wash your unsealed recycling bins with hot, soapy water.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3 flex items-center"><span className="text-primary mr-2">Step 2:</span> Deep Clean Hidden Surfaces</h3>
                                <p className="text-muted-foreground text-lg">
                                    Fruit flies only need a microscopic smear of fermenting liquid to survive. Pull out your refrigerator and stove to clean the sides and the floor beneath them. Wipe down your countertops with a mixture of hot water and vinegar to cut through hidden sugary residues. Focus heavily on the area surrounding your sink and trash can.
                                </p>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                                <h3 className="text-2xl font-bold mb-4 flex items-center"><span className="text-primary mr-2">Step 3:</span> Deploy the Ultimate DIY Fruit Fly Trap</h3>
                                <div className="space-y-4">
                                    <p className="mb-4 text-muted-foreground text-lg">
                                        Once the food source is gone, you need to catch the starving adults. You don't need toxic bug spray. The absolute best way to catch them is with an Apple Cider Vinegar trap.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground font-medium mb-6 text-lg">
                                        <li>Pour 1/2 inch of apple cider vinegar into a bowl.</li>
                                        <li>Add one small drop of liquid dish soap.</li>
                                        <li>Mix very gently (do not create bubbles).</li>
                                        <li>Place near the sink or where flies gather.</li>
                                    </ul>
                                    <Button asChild variant="default" className="rounded-full">
                                        <Link href="/fruit-fly-trap">See More Trap Recipes</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 border-t pt-12">
                        <h2 className="text-3xl font-bold">Long-Term Prevention Tips</h2>
                        <p className="text-muted-foreground text-lg">
                            Knowing how to get rid of fruit flies permanently means changing a few minor habits in your kitchen:
                        </p>
                        <ul className="space-y-4 text-lg text-muted-foreground list-none ml-0">
                            <li className="flex gap-3">
                                <span className="text-primary text-xl">✓</span>
                                <div><strong>Wash Produce Immediately:</strong> Fruit flies often enter your home as microscopic eggs laid on the skin of bananas and melons at the grocery store. Wash your fruit as soon as you bring it home.</div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary text-xl">✓</span>
                                <div><strong>Rinse Recyclables:</strong> Never put a sticky soda can or wine bottle into an open indoor recycling bin. Rinse them out first.</div>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary text-xl">✓</span>
                                <div><strong>Use Lidded Bins:</strong> Replace open wastebaskets in the kitchen with step-cans that seal tightly.</div>
                            </li>
                        </ul>
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
            <AdSense />
        </div>
    );
}
