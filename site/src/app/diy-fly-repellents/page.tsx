import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "DIY Fly Repellents: Natural Ways to Keep Flies Away | FlyAway Guide",
    description: "Learn how to make DIY fly repellents using natural ingredients like essential oils, vinegar, and herbs to deter house flies and fruit flies.",
    alternates: {
        canonical: '/diy-fly-repellents',
    },
};

export default function DiyFlyRepellentsPage() {
    const faqs = [
        { question: "What smells do flies hate the most?", answer: "Flies intensely dislike strong aromatic scents such as peppermint, eucalyptus, lavender, lemongrass, cloves, and cinnamon." },
        { question: "Does a bag of water really keep flies away?", answer: "Many people swear by hanging clear plastic bags of water (sometimes with pennies inside) near doorways. The theory is that the water refracts light and confuses the fly's complex compound eyes, though scientific evidence is limited." },
        { question: "Can I use vinegar as a fly repellent?", answer: "No. While white vinegar is a great surface cleaner that removes the food odors flies love, apple cider vinegar actually attracts fruit flies. It should only be used as bait for traps, not as a deterrent spray." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        DIY Natural Fly Repellents
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Create cheap, non-toxic barriers using household ingredients to keep annoying house flies out of your living spaces.
                    </p>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Repelling vs. Trapping</h2>
                        <p className="text-muted-foreground text-lg">
                            It is important to understand the difference between a trap and a repellent. If you already have dozens of flies buzzing inside your kitchen, a repellent will not get rid of them—it will just make them fly to a different room. You need to use our <Link href="/house-flies" className="text-primary hover:underline">House Fly removal strategies</Link> to physically catch the ones inside.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            DIY repellents are used as a <strong>preventative barrier</strong>. They mask the attractive odors of your home and deter new flies from crossing the threshold of open windows and doors.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Essential Oil Deterrent Spray</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            Flies rely heavily on their sense of smell to find garbage and decaying food. Strong, aromatic plant oils overwhelm their receptors, making the area undesirable.
                        </p>
                        <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                            <h3 className="font-bold text-xl mb-4">DIY Multipurpose Spray Recipe</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground flex flex-col gap-1 mb-6">
                                <li>1 empty spray bottle (16 oz)</li>
                                <li>1/2 cup distilled water</li>
                                <li>1/2 cup witch hazel or cheap vodka (helps the oil mix with water)</li>
                                <li>20 drops Peppermint Essential Oil</li>
                                <li>20 drops Lemongrass or Eucalyptus Essential Oil</li>
                            </ul>
                            <h4 className="font-bold border-t pt-4 border-primary/20">How to use:</h4>
                            <p className="text-muted-foreground mt-2">
                                Shake vigorously before every use. Spray generously around window frames, sliding glass doors, screen doors, and near the top rims of your kitchen trash cans. Reapply every 2-3 days as the volatile oils evaporate quickly.
                            </p>
                            <p className="text-red-600 font-bold mt-4 text-sm">
                                ⚠️ Caution: Do not spray this near cats or small dogs, as concentrated essential oils can be highly toxic to pets. See our <Link href="/pet-safe-fly-removal" className="underline">Pet Safe Guide</Link>.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Physical and Herbal Deterrents</h2>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">🪴 Potted Herbs</h3>
                                    <p className="text-muted-foreground">Strategically placing pots of living basil, mint, lavender, and rosemary on your kitchen windowsills and patio tables acts as a constant, low-level deterrent.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">🍋 The Lemon & Clove Trick</h3>
                                    <p className="text-muted-foreground">Cut a lemon or lime in half and firmly press 10-15 whole dried cloves into the exposed flesh. Place these halves on a small plate in the center of your outdoor dining table.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6 border-t pt-12">
                        <h2 className="text-3xl font-bold">The Best Repellent is a Clean Home</h2>
                        <p className="text-muted-foreground text-lg">
                            No amount of peppermint spray will keep a house fly away from a rotting piece of meat left on the counter. The absolute best DIY fly repellent strategy is ruthless sanitation:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground text-lg ml-4">
                            <li>Wipe down your kitchen counters immediately after food prep.</li>
                            <li>Use white vinegar instead of water when mopping floors to neutralize deep-seated food odors.</li>
                            <li>Ensure your indoor trash cans have tightly sealing, step-activated lids.</li>
                        </ul>
                    </div>

                </div>
            </section>

            <UpsellCta />
            <Faq items={faqs} title="DIY Repellent FAQs" />

            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
            <AdSense />
        </div>
    );
}
