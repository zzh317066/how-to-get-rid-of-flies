import { Metadata } from 'next';
import dynamic from "next/dynamic";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const FlyIdentifierForm = dynamic(
  () =>
    import("@/components/features/identifier/fly-identifier-form").then(
      (mod) => mod.FlyIdentifierForm
    ),
  {
    loading: () => (
      <div className="max-w-md mx-auto min-h-[420px] flex items-center justify-center text-sm text-muted-foreground">
        Loading identifier...
      </div>
    ),
  }
);

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const faqs = [
    { question: "Why are there flies in my house?", answer: "Flies often enter homes seeking food crumbs, overripe fruit, garbage, or standing water. Leaving doors and windows open without screens is a common entry point." },
    { question: "What is the fastest way to get rid of flies?", answer: "The fastest method combines removing their food source immediately, using a targeted trap near their gathering area, and physically cleaning surfaces where they land." },
    { question: "Why do flies keep coming back?", answer: "If flies keep returning, it usually means their primary breeding source (like a dirty drain, hidden food spill, or unsealed trash) hasn't been removed yet. Traps only kill adults, not the eggs." },
    { question: "Are flies in the kitchen different from flies in the bathroom?", answer: "Often, yes. Kitchens typically attract fruit flies and house flies drawn to food scraps. Bathrooms and sinks frequently attract drain flies due to organic buildup inside pipes." },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* 1. Hero Section */}
      <HeroGeometric
        badge="FlyAway Guide"
        title1="How to Get Rid"
        title2="Of Flies Fast"
        description="Identify the type of flies in your home and remove them fast. Stop them from coming back with our targeted DIY guides."
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto rounded-full shadow-md transition-transform hover:-translate-y-1" asChild>
            <Link href="#fly-identifier">Try Fly Identifier</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full bg-background transition-transform hover:-translate-y-1" asChild>
            <Link href="#quick-fixes">Jump to Quick Fixes</Link>
          </Button>
        </div>
      </HeroGeometric>

      {/* 2. Comprehensive Guide - How to get rid of flies */}
      <section id="quick-fixes" className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">

            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How to Get Rid of Flies Fast</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Learning exactly how to get rid of flies requires more than just swatting them one by one. You need a systematic approach to eliminate the adults, destroy the breeding sources, and prevent new flies from coming inside. Follow these essential steps immediately.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-3 text-sm">1</span>
                  Remove Food and Trash Sources
                </h3>
                <p className="text-muted-foreground text-lg">
                  The primary reason you have flies in your house is that they smell food. To get rid of flies fast, you must cut off their food supply. Seal all pantry items tightly, don't leave ripe fruit exposed, and empty indoor trash bins daily. If you have pets, ensure their food isn't left out constantly, as this is a massive attractant.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-3 text-sm">2</span>
                  Deep Clean Affected Areas
                </h3>
                <p className="text-muted-foreground text-lg">
                  Flies lay their eggs in sticky residue, organic sludge, and rotting matter. Wipe down kitchen counters with a strong multi-surface cleaner, clear sticky spills immediately, and dry your sinks at night. Cleaning the source is the single most important step in any fly removal strategy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-3 text-sm">3</span>
                  Deploy Targeted Traps
                </h3>
                <p className="text-muted-foreground text-lg">
                  Once you've removed the food sources, it's time to capture the adult flies buzzing around. Use UV light traps, sticky paper, or liquid bait traps where needed. Avoid indiscriminately spraying chemical aerosols inside your kitchen, as traps are generally safer and work passively 24/7.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-3 text-sm">4</span>
                  Seal Your Home's Entry Points
                </h3>
                <p className="text-muted-foreground text-lg">
                  Figuring out how to get rid of flies permanently means stopping them from coming indoors in the first place. Inspect your window screens for tiny tears. Check the weather stripping around exterior doors. Keep doors shut when cooking strong-smelling foods, as flies can detect these odors from far away.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Why Do Flies Keep Coming Back? (The Fly Life Cycle)</h3>
              <p className="text-muted-foreground text-lg mb-4">
                If you are struggling with fly removal, you are likely only killing the adult flies while ignoring the eggs and larvae. A single female fly can lay hundreds of eggs at once. Depending on the temperature and the species of fly, these eggs can hatch into maggots (larvae) in less than 24 hours.
              </p>
              <p className="text-muted-foreground text-lg">
                Within a few days, those larvae pupate and emerge as fully grown adult flies ready to breed again. This rapid life cycle is why a minor nuisance can explode into a severe infestation in just one week. To truly get rid of flies, your cleaning efforts must interrupt this cycle by removing the breeding ground.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Common Types / Browse by Type */}
      <section className="w-full py-12 md:py-20 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Common Types of Flies in the Home</h2>
            <p className="text-muted-foreground mx-auto max-w-[600px]">Different flies need different treatments. Don't waste time on the wrong strategy.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <CardTitle>Fruit Flies</CardTitle>
                <CardDescription>Very small, often found near fruit, trash, or sticky kitchen counters.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full rounded-full"><Link prefetch={false} href="/fruit-flies">See Fruit Fly Guide</Link></Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <CardTitle>Drain Flies</CardTitle>
                <CardDescription>Fuzzy and dark, typically appearing near sinks, drains, or moist bathrooms.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full rounded-full"><Link prefetch={false} href="/drain-flies">See Drain Fly Guide</Link></Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <CardTitle>House Flies</CardTitle>
                <CardDescription>Common, much larger flies flying around trash, open food, and windows.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full rounded-full"><Link prefetch={false} href="/house-flies">See House Fly Guide</Link></Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Mocked AI Tool */}
      <section id="fly-identifier" className="w-full py-12 md:py-24 text-center">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto border rounded-xl p-8 bg-card shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Not sure what type you have?</h2>
          <p className="text-muted-foreground mb-8">Try the Free Fly Identifier</p>

          <FlyIdentifierForm />
        </div>
      </section>

      {/* 5. Natural vs Chemical Fly Removal */}
      <section className="w-full py-16 md:py-24 bg-card border-y">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Natural Fly Removal vs. Chemical Traps</h2>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              When figuring out how to get rid of flies, many people immediately reach for toxic bug sprays. While these can kill pests on contact, they are often dangerous to use in kitchens, around pets, or near young children.
            </p>

            <h3 className="text-2xl font-bold mt-8">Natural DIY Methods</h3>
            <p className="text-lg text-muted-foreground">
              Natural methods focus heavily on baiting and repelling. Common fly repellents include essential oils like eucalyptus, lavender, and peppermint. While these won't kill the flies, applying them near windows and doors can deter house flies from entering.
            </p>
            <p className="text-lg text-muted-foreground">
              For active removal, DIY traps using household items like apple cider vinegar, dish soap, or sugar water are highly effective for smaller species. The sweet or fermented scent acts as an irresistible lure, completely eliminating the need for industrial chemicals indoors.
            </p>

            <h3 className="text-2xl font-bold mt-8">When to Use Commercial Products</h3>
            <p className="text-lg text-muted-foreground">
              If your focus is on how to get rid of flies in massive swarms, or if the infestation is outdoors near garbage areas, commercial baits and UV light zappers become necessary. Granular fly baits contain powerful attractants capable of drawing flies away from your home's entrances.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Remember, whether you choose a natural approach or a chemical one, no product will permanently get rid of flies if you leave garbage and food out in the open. The absolute best fly removal strategy is impeccable sanitation combined with targeted trapping.
            </p>
          </div>

          <div className="text-center mt-12 p-8 bg-muted/30 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">Ready to build your specific strategy?</h3>
            <p className="text-muted-foreground mb-6 text-lg">Checkout our comprehensive guide on specific traps and bait recipes to start clearing your home today.</p>
            <Button size="lg" asChild variant="default" className="rounded-full shadow-md hover:-translate-y-1 transition-transform">
              <Link prefetch={false} href="/fruit-fly-trap">Read the Full Trap Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Upsell CTA */}
      <UpsellCta className="border border-primary/20 bg-primary/5" />

      {/* 7. Pricing Table */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get immediate access to the AI-Powered Personalized Fly Removal Plan and reclaim your home today.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md border-primary/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">AI Personalized Plan</CardTitle>
                <div className="mt-4 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">$5</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
                <CardDescription className="pt-4">
                  Everything you need to eliminate your specific fly infestation fast.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  {[
                    "Custom 24-hour rapid response plan",
                    "3-day complete clearance strategy",
                    "Safe for your specific situation (pets/kids)",
                    "Exact shopping list of supplies needed",
                    "Long-term 7-day prevention guide",
                    "Instant digital delivery",
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-x-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pb-8 pt-4">
                <Button asChild size="lg" className="w-full text-lg rounded-full shadow-md hover:-translate-y-1 transition-transform">
                  <a href={process.env.NEXT_PUBLIC_CREEM_PRODUCT_LINK}>
                    Get Your Plan Now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <Faq items={faqs} />
    </div>
  );
}
