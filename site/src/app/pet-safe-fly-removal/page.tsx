import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "Pet Safe Fly Removal: Kill Flies Without Harming Dogs & Cats | FlyAway Guide",
    description: "Discover pet safe fly removal methods. Learn how to kill flies indoors without exposing your dogs or cats to toxic chemical sprays and baits.",
    alternates: {
        canonical: '/pet-safe-fly-removal',
    },
};

export default function PetSafeFlyRemovalPage() {
    const faqs = [
        { question: "Is fly spray safe around pets?", answer: "Most commercial aerosol fly sprays contain pyrethrins or synthetic pyrethroids. While often labeled 'safe when dry', wet spray can be highly toxic to cats and dogs. It's best to avoid them entirely indoors." },
        { question: "What is the safest way to kill flies with pets in the house?", answer: "Physical traps are the safest. Use sticky fly ribbons hung high out of reach, or enclosed UV light traps where the sticky board is protected behind a plastic grill." },
        { question: "Are essential oils safe for dogs and cats?", answer: "Many essential oils (like peppermint, tea tree, and eucalyptus) are highly toxic to cats and dogs if ingested or applied to their skin. Use caution when using essential oil diffusers." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        Pet Safe Fly Removal Guide
                    </h1>
                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        How to eliminate house flies and fruit flies without exposing your furry family members to dangerous toxins.
                    </p>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">The Danger of Chemical Fly Sprays</h2>
                        <p className="text-muted-foreground text-lg">
                            When a loud house fly is buzzing around your living room, the immediate reaction is often to grab a can of aerosol bug spray. However, if you have dogs or cats, this is a terrible idea.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Many commercial flying insect killers rely on pyrethrins (derived from chrysanthemum flowers) or their synthetic counterparts, pyrethroids. While these are highly effective neurotoxins for insects, cats are uniquely sensitive to them. Exposure to wet spray, or grooming after walking on a sprayed surface, can lead to severe neurological symptoms in pets, including tremors and seizures. Pet safe fly removal means abandoning aerosol sprays indoors.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Safe Alternatives: Non-Toxic Physical Traps</h2>
                        <p className="text-muted-foreground text-lg">
                            The safest way to kill flies indoors is mechanically, using methods that do not rely on airborne chemicals or accessible poisons.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                            <Card className="shadow-sm border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">High-Hung Sticky Ribbons</h3>
                                    <p className="text-muted-foreground">The classic fly paper ribbon uses no poisons—only an incredibly sticky glue. The key to safety is placement. Hang them near the top of bright windows, far out of reach of jumping cats or tall dogs. Getting this glue out of pet fur is notoriously difficult.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-sm border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Enclosed UV Light Traps</h3>
                                    <p className="text-muted-foreground">Plug-in devices like the Zevo flying insect trap are excellent. They use UV light to attract the flies into a plastic housing where they get stuck to a glue board. Because the sticky surface is enclosed, curious pets cannot lick or touch the trapped insects.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Solving the Root Cause: Pet Food and Waste</h2>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                            <h3 className="text-xl font-bold mb-4">You Are Likely Feeding the Flies</h3>
                            <p className="text-muted-foreground text-lg mb-4">
                                If you have a constant house fly problem, your pets are likely the main attractant.
                            </p>
                            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-3 ml-2">
                                <li><strong>Free-Feeding:</strong> Leaving dry or wet dog/cat food in a bowl all day is an open invitation for flies. Establish set meal times and pick up the bowl when they are finished.</li>
                                <li><strong>Litter Boxes:</strong> Scoop cat litter daily and use a covered box if possible. Flies are attracted to the ammonia in urine and the feces.</li>
                                <li><strong>Yard Waste:</strong> As discussed in our <Link href="/outdoor-fly-control" className="text-primary hover:underline">Outdoor Control Guide</Link>, uncollected dog poop in the yard is the #1 breeding ground for neighborhood flies. Pick it up daily and put it in a sealed bin.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">A Note on DIY "Natural" Repellents</h2>
                        <p className="text-muted-foreground text-lg">
                            Many blogs suggest spraying essential oils (like peppermint, tea tree, or lavender) around the house to repel flies naturally. <strong>Proceed with extreme caution.</strong> Cats lack the liver enzymes necessary to break down many essential oils, making them highly toxic if inhaled or absorbed through the skin. Before diffusing any essential oil in a home with pets, consult your veterinarian.
                        </p>
                    </div>

                </div>
            </section>

            <UpsellCta />
            <Faq items={faqs} title="Pet Safety FAQs" />

            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
            <AdSense />
        </div>
    );
}
