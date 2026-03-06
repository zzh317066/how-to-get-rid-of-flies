import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "Fungus Gnats vs Fruit Flies: Identification & Removal | FlyAway Guide",
    description: "Learn how to tell the difference between fungus gnats and fruit flies, and discover the best ways to get rid of fungus gnats in houseplants.",
    alternates: {
        canonical: '/fungus-gnats',
    },
};

export default function FungusGnatsPage() {
    const faqs = [
        { question: "Are these fruit flies or fungus gnats?", answer: "If they are constantly swarming around your indoor potted plants and resting on the soil, they are almost certainly fungus gnats. Fruit flies hover near food and trash in the kitchen." },
        { question: "How do I get rid of fungus gnats fast?", answer: "The fastest way is a two-step approach: use yellow sticky traps for the flying adults, and water your plants with a Mosquito Dunk (BTI) tea to kill the larvae in the soil." },
        { question: "Should I throw away a plant with fungus gnats?", answer: "No, unless the plant is already dead from root rot. Fungus gnats are easily treatable and rarely kill a healthy adult plant." },
        { question: "Does hydrogen peroxide kill fungus gnats?", answer: "Yes, a mixture of 1 part 3% hydrogen peroxide to 4 parts water poured over the soil can kill larvae on contact, but BTI (Mosquito Dunks) provides longer-term prevention." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        How to Get Rid of Fungus Gnats
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Stop them from killing your houseplants. Learn to identify and eliminate these annoying soil pests forever.
                    </p>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Quick Answer: Fast Steps</h2>
                        <Card className="shadow-sm border-primary/10">
                            <CardContent className="pt-6 space-y-4 text-lg">
                                <p><strong>1. Stop overwatering:</strong> Let the top 2 inches of plant soil dry out completely between waterings.</p>
                                <p><strong>2. Deploy yellow sticky traps:</strong> Place them right above the soil of affected plants to catch flying adults.</p>
                                <p><strong>3. Use a BTI root drench:</strong> Soak "Mosquito Dunks" in your watering can to kill larvae in the soil harmlessly.</p>
                                <p><strong>4. Bottom-water your plants:</strong> Keep the topsoil dry so adult gnats cannot lay new eggs.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Fungus Gnats vs. Fruit Flies: The Crucial Difference</h2>
                        <p className="text-muted-foreground text-lg">
                            Many people waste weeks trying to catch fungus gnats with <Link href="/fruit-fly-trap" className="text-primary hover:underline">apple cider vinegar traps</Link>. Apple cider vinegar only works on fruit flies. Fungus gnats do not care about fermenting sugar; they care about the decaying organic matter and fungus in your wet houseplant soil.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <div className="border rounded-xl p-6 bg-card">
                                <h3 className="font-bold text-xl mb-2">Fungus Gnats (Bradysia spp.)</h3>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Look like tiny mosquitoes, dark and slender.</li>
                                    <li>Clumsy, weak flyers.</li>
                                    <li>Hover close to houseplant soil and rest on leaves.</li>
                                    <li>Attracted to damp soil and light.</li>
                                </ul>
                            </div>
                            <div className="border rounded-xl p-6 bg-card">
                                <h3 className="font-bold text-xl mb-2">Fruit Flies (Drosophila)</h3>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                    <li>Tan or brown bodies, often with red eyes.</li>
                                    <li>Active, quick flyers.</li>
                                    <li>Hover around fruit bowls, drains, and kitchen trash.</li>
                                    <li>Attracted to vinegar, wine, and overripe fruit.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Step-by-Step Fungus Gnat Removal</h2>
                        <div className="space-y-8 mt-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-3">1. Catch the Adults (Yellow Sticky Traps)</h3>
                                <p className="text-muted-foreground text-lg">
                                    Adult fungus gnats only live for about a week, but a single female can lay up to 300 eggs in that time. You must trap the adults before they breed. Purchase small, yellow sticky traps (gnats are specifically attracted to the color yellow) and stick them directly into the soil of your houseplants.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">2. Kill the Larvae (The BTI Method)</h3>
                                <p className="text-muted-foreground text-lg">
                                    To permanently get rid of fungus gnats, you must kill the larvae eating your plant's roots. The safest, most effective method is using BTI (Bacillus thuringiensis israelensis), a natural bacteria commonly sold as "Mosquito Dunks" or "Mosquito Bits".
                                </p>
                                <p className="text-muted-foreground text-lg mt-4 border-l-4 border-primary pl-4 py-2 bg-primary/5">
                                    <strong>How to use BTI:</strong> Soak a Mosquito Dunk in your watering can overnight. Remove the dunk, then water your plants with this "tea". The BTI bacteria only affects the larvae of gnats and mosquitoes; it is completely harmless to plants, pets, and humans.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">3. Change Your Watering Habits</h3>
                                <p className="text-muted-foreground text-lg">
                                    Fungus gnats require perpetually moist topsoil to survive. If the top 2 inches of your soil are dry, the eggs will not hatch. Switch from top-watering to bottom-watering (placing the nursery pot in a bowl of water and letting the roots drink from the bottom up). This keeps the top layer of soil bone-dry, rendering it uninhabitable for gnats.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UpsellCta title="Unsure what's flying around your plants?" description="Use our AI tool to perfectly identify the pest and get a custom care plan." />
            <Faq items={faqs} title="Fungus Gnat FAQs" />

            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
            <AdSense />
        </div>
    );
}
