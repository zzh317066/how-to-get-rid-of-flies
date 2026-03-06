import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "Restaurant Fly Control: Commercial Eradication Strategies | FlyAway Guide",
    description: "Discover commercial strategies for restaurant fly control. Learn how to eliminate drain flies, fruit flies, and house flies from commercial kitchens and dining areas.",
    alternates: {
        canonical: '/restaurant-fly-control',
    },
};

export default function RestaurantFlyControlPage() {
    const faqs = [
        { question: "Why does my restaurant have so many flies?", answer: "Restaurants provide an abundant supply of the three things flies need: food, moisture, and warmth. Floor drains, garbage dumpsters, and spilled syrup under bar mats are massive breeding grounds." },
        { question: "Can I use bug spray in a commercial kitchen?", answer: "Generally, no. Aerosol insecticides must not be used where food is prepared, stored, or served due to contamination risks. Pest control in restaurants must rely on sanitation, exclusion, and specific, approved traps." },
        { question: "Are fruit flies a health code violation?", answer: "Yes. An active fly infestation is considered a critical health code violation in almost all jurisdictions, as flies act as vectors for foodborne illnesses like Salmonella and E. coli." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-center">
                        Commercial Restaurant Fly Control
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Protect your health inspection score and your customer experience. Commercial strategies for kitchens, bars, and dumpsters.
                    </p>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Threat to Your Business</h2>
                        <p className="text-muted-foreground text-lg">
                            For a homeowner, a fly is an annoyance. For a restaurant owner, a fly is an immediate threat to the business. Flies carry over 100 pathogens, trigger health code violations, and ruin the customer dining experience instantly. Restaurant fly control requires a rigorous, commercial-grade approach that goes far beyond simple <Link href="/fruit-fly-trap" className="text-primary hover:underline">vinegar traps</Link>.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Target 1: The Commercial Kitchen (Drain Flies & Fruit Flies)</h2>
                        <p className="text-muted-foreground text-lg">
                            The kitchen and the bar area are ground zero for <Link href="/drain-flies" className="text-primary hover:underline">drain flies</Link> and <Link href="/fruit-flies" className="text-primary hover:underline">fruit flies</Link>. The constant washing creates a permanently wet environment, and the accumulation of grease and sugar creates the perfect breeding sludge.
                        </p>

                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-4 space-y-4">
                            <h3 className="font-bold text-xl">The Floor Drain Protocol</h3>
                            <p className="text-muted-foreground">
                                Commercial floor drains collect a devastating amount of organic matter.
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                                <li><strong>No Bleach:</strong> Do not just pour bleach down the drains at closing. It flows over the grease and does not destroy the bio-film where eggs are laid.</li>
                                <li><strong>Scrub Daily:</strong> Floor drains must be scrubbed with a stiff, long-handled wire brush.</li>
                                <li><strong>Bio-Foam:</strong> Invest in commercial bio-enzymatic foamers. The foam expands to coat the entire pipe, allowing the bacteria to eat the grease overnight.</li>
                            </ul>
                        </div>

                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-4 space-y-4">
                            <h3 className="font-bold text-xl">The Bar Area Protocol</h3>
                            <p className="text-muted-foreground">
                                Beer taps and sticky soda gun holsters are the #1 source of bar fruit flies.
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                                <li>Wipe down all bottles at the end of the shift.</li>
                                <li>Ensure floor mats are pulled up, scrubbed, and hung to dry entirely—do not lay them back on wet floors overnight.</li>
                                <li>Cover beer tap spouts with plastic wrap or specific rubber caps overnight to prevent flies from laying eggs inside the lines.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Target 2: The Dining Room & Entrances (House Flies)</h2>
                        <p className="text-muted-foreground text-lg">
                            Large <Link href="/house-flies" className="text-primary hover:underline">house flies</Link> and blow flies almost always enter through open doors when customers arrive or when deliveries are made in the back.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Air Curtains</h3>
                                    <p className="text-muted-foreground">Every exterior door (guest entrances and back receiving doors) must have a commercial air curtain (fly fan) installed and functioning perfectly to blow flies back outside.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Commercial UV Light Traps (ILTs)</h3>
                                    <p className="text-muted-foreground">Install Insect Light Traps in the dining room and kitchen. <strong>Crucial rule:</strong> Install them at least 5 feet away from any food prep surface, and place them so they cannot be seen deeply from the exterior windows (you don't want to draw outdoor flies inside).</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6 border-t pt-12">
                        <h2 className="text-3xl font-bold">Target 3: The Dumpster Area</h2>
                        <p className="text-muted-foreground text-lg">
                            Your battle is lost if the dumpster area is poorly managed. The smell will draw flies from blocks away, and they will wait by your back door to enter.
                        </p>
                        <ul className="list-decimal list-inside mt-4 space-y-2 text-muted-foreground text-lg ml-4">
                            <li>Ensure the dumpster actually has a tight-fitting lid, and enforce that employees close it every time.</li>
                            <li>Have the dumpster enclosure power-washed weekly to remove "trash juice" seeping into the concrete.</li>
                            <li>Place odorous trap bags (like Rescue! traps) at the far corners of the parking lot to intercept flies before they reach the main building.</li>
                        </ul>
                    </div>

                </div>
            </section>

            <UpsellCta title="Need Help Identifying Your Specific Kitchen Pest?" description="Use our AI tool to figure out exactly what flies are haunting your bar or drains." />
            <Faq items={faqs} title="Commercial Control FAQs" />

            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
            <AdSense />
        </div>
    );
}
