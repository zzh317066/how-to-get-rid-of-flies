import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "Best Fruit Fly Trap Methods | DIY & Store-Bought | FlyAway Guide",
    description: "Find the absolute best fruit fly trap solutions here. Learn exactly how to make a highly effective DIY apple cider vinegar trap or choose commercial options.",
    alternates: {
        canonical: '/fruit-fly-trap',
    },
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

            {/* Intro Content */}
            <section className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-4xl space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">Why Do You Need a Fruit Fly Trap?</h2>
                            <p className="text-muted-foreground text-lg">
                                When dealing with a sudden infestation, finding the best fruit fly trap is often your first line of defense. While deep cleaning and removing the breeding source (like overripe bananas or a dirty trash can) is the only way to permanently solve the problem, a trap is essential for catching the active, flying adults that are currently driving you crazy.
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Traps work by using bait—usually a sweet, fermenting liquid—to lure the flies in. Once inside, they either drown, get stuck to a glue board, or cannot figure out how to navigate back out. Below we outline the most effective DIY recipes and the best store-bought options depending on the severity of your problem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive */}
            <section className="w-full py-12 bg-muted/20">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                            <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-xl">1</span>
                            The Ultimate DIY Fruit Fly Trap (The Classic Method)
                        </h2>
                        <div className="space-y-4 max-w-3xl mt-6">
                            <p className="text-muted-foreground text-lg">
                                You don't need to spend money on commercial chemicals to build a highly effective fruit fly trap. You likely already have the ingredients in your pantry.
                            </p>
                            <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-xl mb-3">You Will Need:</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground flex flex-col gap-1">
                                    <li>A small bowl or jar</li>
                                    <li>Apple cider vinegar (do not substitute white vinegar)</li>
                                    <li>Liquid dish soap (Dawn works best)</li>
                                    <li>Plastic wrap and a rubber band (optional)</li>
                                </ul>
                            </div>
                            <div className="space-y-4 pt-4">
                                <h3 className="font-bold text-xl">Instructions:</h3>
                                <ol className="list-decimal list-inside space-y-2 text-muted-foreground flex flex-col gap-1">
                                    <li>Pour about 1/2 inch of apple cider vinegar into the bowl.</li>
                                    <li>Add a single drop of liquid dish soap.</li>
                                    <li>Mix very gently so bubbles do not form on the surface.</li>
                                    <li>Place the trap next to the fruit bowl or sink.</li>
                                    <li><span className="italic">Optional:</span> Cover tightly with plastic wrap, secure with a rubber band, and poke tiny holes in the top with a toothpick.</li>
                                </ol>
                                <p className="text-base border-l-4 border-primary pl-4 mt-6 italic text-muted-foreground bg-primary/5 p-4 rounded-r-lg">
                                    <strong>The Science:</strong> The sweet smell of the vinegar mimics rotting fruit, luring them in. The drop of dish soap breaks the surface tension of the liquid, so when the flies land, they immediately sink and drown instead of walking on the surface.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 pt-8 border-t">
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                            <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-xl">2</span>
                            Alternative DIY Trap Recipes
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            If you don't have apple cider vinegar on hand, try these alternative baits using the same bowl and dish soap method:
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-6">
                            <Card className="shadow-sm border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">🍷 Red Wine</h3>
                                    <p className="text-muted-foreground">Leave a few ounces of cheap red wine at the bottom of a bottle. Fruit flies aggressively seek out the fermenting yeast.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-sm border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">🍌 Overripe Fruit</h3>
                                    <p className="text-muted-foreground">Place a chunk of a heavily bruised, brown banana in a jar covered with plastic wrap with holes poked in the top.</p>
                                </CardContent>
                            </Card>
                            <Card className="shadow-sm border-primary/20">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-2 flex items-center gap-2">🍺 Beer</h3>
                                    <p className="text-muted-foreground">A small amount of stale beer mixed with a drop of dish soap works similarly to vinegar and wine.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6 pt-8 border-t">
                        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                            <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-xl">3</span>
                            The Best Commercial Store-Bought Traps
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            If you don't want an open bowl of vinegar sitting on your counter, or if you have a massive infestation, commercial traps offer cleaner, more aesthetically pleasing solutions.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <Card className="shadow-none border-primary/10">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Plug-in UV Light Traps</CardTitle>
                                    <CardDescription>Best for aesthetics and continuous catching</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <p>Devices like the Zevo flying insect trap use a specific spectrum of UV light to attract flies. Once they investigate the light, they get stuck to a disposable glue board hidden behind the faceplate.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Pros:</strong> No smell, catches mosquitoes and gnats too, looks like a nightlight.</li>
                                        <li><strong>Cons:</strong> Requires an open wall outlet, must buy refill glue cartridges.</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="shadow-none border-primary/10">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Apple-Shaped Liquid Baits</CardTitle>
                                    <CardDescription>Best for targeted kitchen placement</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-muted-foreground">
                                    <p>Brands like Terro make small, apple-shaped plastic containers filled with a proprietary liquid bait (which is usually just a refined vinegar mix). The flies enter small holes to get the bait and cannot escape.</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Pros:</strong> Ready to use immediately, sits discreetly by the fruit bowl.</li>
                                        <li><strong>Cons:</strong> Small capacity, smells if placed too close to dining areas.</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="space-y-6 pt-8 border-t">
                        <h2 className="text-3xl md:text-4xl font-bold">Crucial Trap Placement Strategy</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            A perfectly made fruit fly trap will fail if placed in the wrong spot. Follow these rules for maximum catch rates:
                        </p>
                        <ul className="space-y-4 text-lg text-muted-foreground">
                            <li className="flex gap-4">
                                <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">1</div>
                                <div><strong>Place near the source:</strong> Put the trap exactly where you see the most flies hovering (next to the sink, by the trash can, or near the fruit bowl).</div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">2</div>
                                <div><strong>Remove competing odors:</strong> If you place a vinegar trap next to a bowl of rotting bananas, the flies might still choose the bananas. You must throw away the real food source so the trap is the only option.</div>
                            </li>
                            <li className="flex gap-4">
                                <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0">3</div>
                                <div><strong>Use multiple traps:</strong> If flies are in the kitchen and the dining room, put a trap in both locations. They are weak flyers and won't travel far to find bait.</div>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 text-center mt-12 bg-destructive/10 text-destructive border border-destructive/30 rounded-xl p-8 shadow-sm">
                        <h2 className="text-3xl font-bold mb-2">The Biggest Mistake: Relying Only on Traps</h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            Traps only catch adult flies. They do not kill eggs or larvae. If fruit flies remain hovering around your kitchen after a week, you still have an active breeding source hidden somewhere.
                        </p>
                        <Button variant="outline" asChild className="mt-4 border-destructive/50 text-destructive hover:bg-destructive/20 hover:text-destructive max-w-xs mx-auto font-bold">
                            <Link href="/fruit-flies">Read the Full Prevention Guide</Link>
                        </Button>
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
            <AdSense />
        </div>
    );
}
