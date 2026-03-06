import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "Outdoor Fly Control: Keep Flies Away From Patios & Yards | FlyAway Guide",
    description: "Learn effective outdoor fly control methods. Discover how to keep flies away from patios, keep garbage bins clean, and use outdoor traps.",
    alternates: {
        canonical: '/outdoor-fly-control',
    },
};

export default function OutdoorFlyControlPage() {
    const faqs = [
        { question: "How do I keep flies away from my patio?", answer: "Running oscillating fans is the most immediate way to keep flies away, as they are weak flyers. Combining this with perimeter traps and removing nearby trash cans is the best long-term strategy." },
        { question: "Do outdoor fly traps really work?", answer: "Yes, smelly bait traps like Rescue! traps are incredibly effective, but they must be placed far away (at least 20-30 feet) from your seating area to draw flies away, not toward you." },
        { question: "What scent keeps flies away outside?", answer: "Flies dislike the smell of citronella, eucalyptus, lavender, peppermint, and cloves. While not 100% effective alone, burning citronella candles or spraying essential oils helps." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Outdoor Fly Control Strategies
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Reclaim your patio and backyard. Stop <Link href="/house-flies" className="text-primary hover:underline">house flies</Link> and blow flies before they ever get inside.
                    </p>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Golden Rule of Outdoor Fly Control</h2>
                        <p className="text-muted-foreground text-lg">
                            When dealing with flies outdoors, remember this rule: <strong>Draw them away, don't invite them in.</strong> If you place a highly attractive fly trap right next to your patio table, you are actively inviting every fly in the neighborhood to join your dinner party. True outdoor fly control relies on perimeter defense.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Step 1: Eliminate the Breeding Zones</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Garbage Bin Management</h3>
                                    <p className="text-muted-foreground">Flies breed rapidly in the fermented "trash juice" at the bottom of outdoor bins. Hose out your bins monthly with dish soap and a touch of bleach. Keep bins tightly sealed and store them as far from doors and patios as possible.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Pet Waste Removal</h3>
                                    <p className="text-muted-foreground">Dog feces is the absolute favorite breeding ground for house flies and green bottle flies. If you want a fly-free backyard, picking up dog waste daily is a non-negotiable prerequisite.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Step 2: Perimeter Trapping vs. Patio Repelling</h2>
                        <div className="space-y-8 mt-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-destructive">Perimeter Trapping (The Kill Zone)</h3>
                                <p className="text-muted-foreground text-lg">
                                    Purchase commercial "stinky" fly traps (water-activated bait bags). Hang these traps on the far edges of your property fence line—at least 20 to 30 feet away from where people gather. The pungent smell will intercept flies and trap them before they reach the house.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-primary">Patio Repelling (The Safe Zone)</h3>
                                <p className="text-muted-foreground text-lg">
                                    In the immediate area where you sit, use repellents instead of attractants.
                                    <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                                        <li><strong>Fans:</strong> The most effective patio defense is mechanical. Set up heavy-duty oscillating fans. Flies are weak flyers and simply cannot land in a stiff breeze.</li>
                                        <li><strong>Scent Deterrents:</strong> Use citronella candles, eucalyptus oil, or commercial plant-based sprays around the seating area to mask from food odors.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <UpsellCta />
            <Faq items={faqs} title="Outdoor Control FAQs" />

            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
            <AdSense />
        </div>
    );
}
