import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "How to Get Rid of House Flies Fast | FlyAway Guide",
    description: "Learn how to get rid of house flies fast, understand why they keep coming back, and keep house flies away naturally.",
    alternates: {
        canonical: '/house-flies',
    },
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
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">What Are House Flies and Where Do They Come From?</h2>
                        <div className="space-y-4 max-w-3xl">
                            <p className="text-muted-foreground text-lg">
                                House flies (Musca domestica) are the most common, wide-spread insect pest in the world. They are exactly what they sound like—the common, larger flies (about 1/4 inch long) with gray thoraxes and red eyes that buzz loudly around your home and repeatedly land on your counters.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Unlike <Link href="/fruit-flies" className="text-primary hover:underline font-medium">fruit flies</Link> which stick strictly to sugars and fruits, house flies will land on almost anything, from fresh food to garbage to feces, making them prolific disease carriers. If you want to know how to get rid of house flies fast, you have to understand that almost all of them breed <strong>outside</strong> your home first, then fly indoors seeking food.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Are There House Flies in My Home?</h2>
                        <p className="text-muted-foreground text-lg">
                            House flies possess an incredible sense of smell. They can detect food sources from miles away. Common inside attractants include:
                        </p>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-3 ml-2">
                                <li><strong>Trash containing spoiled food:</strong> Any unsealed meat, dairy, or vegetable matter.</li>
                                <li><strong>Unprotected food:</strong> Crumbs on counters, uncovered fruit bowls, or dirty dishes in the sink.</li>
                                <li><strong>Pet food:</strong> Dog and cat food left out all day is a massive attractant.</li>
                                <li><strong>Outdoor sources:</strong> Dog waste left in the yard near windows, or unwashed outdoor garbage bins placed right by the back door.</li>
                                <li><strong>Easy Access:</strong> Frequently opened doors, torn window screens, and gaps underneath doors.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">How to Get Rid of House Flies Fast (Indoor Strategies)</h2>
                        <div className="space-y-8 mt-6">

                            <div>
                                <h3 className="text-2xl font-bold mb-3">1. Eliminate the Indoor Food Source</h3>
                                <p className="text-muted-foreground text-lg">
                                    The quickest way to get rid of house flies inside is to starve them out. Walk through your kitchen and dining areas. Put all food in airtight locking containers or the refrigerator. Wash all dirty dishes immediately, and take out the kitchen trash if it contains food scraps. When there is nothing to eat, they will attempt to find a way back outside.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3">2. Use Passive Traps</h3>
                                <p className="text-muted-foreground text-lg">
                                    Don't use stinky baited fly traps indoors (they smell terrible and attract more flies inside). Instead, use sticky ribbons hung near windows where flies naturally gather to find sunlight. For a cleaner look, use plug-in UV light traps. The flies are drawn to the ultraviolet light at night and get stuck to the hidden glue board behind the light.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3">3. Natural Repellents</h3>
                                <p className="text-muted-foreground text-lg">
                                    House flies hate certain smells. Using essential oil diffusers or sprays containing strong concentrations of peppermint, eucalyptus, lavender, or lemongrass around your entryways can deter them from crossing the threshold.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 border-t pt-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">How to Keep House Flies Away Permanently (Outdoor Strategies)</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            Prevention is the only permanent cure. Since almost all house fly infestations start outdoors, that is where your perimeter defense must begin.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Manage the Garbage Area</h3>
                                    <p className="text-muted-foreground text-lg">Move outdoor trash cans as far away from doors and windows as possible. Hose out the bins monthly using soap or a specialized bin-cleaning service to remove the fermented sludge at the bottom.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Yard Maintenance</h3>
                                    <p className="text-muted-foreground text-lg">If you have a dog, picking up their waste daily is non-negotiable. Dog feces is the number one breeding ground for house flies in residential areas.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Seal the House</h3>
                                    <p className="text-muted-foreground text-lg">Inspect all window screens. A tiny tear is an open door for a fly. Apply weather stripping to the bottoms and sides of exterior doors.</p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-none border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2">Outdoor Trapping</h3>
                                    <p className="text-muted-foreground text-lg">Place highly odorous commercial baited fly traps or fly trap bags on the perimeter of your yard (far from the house). These will draw the population away from your living space entirely.</p>
                                </CardContent>
                            </Card>
                        </div>
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
