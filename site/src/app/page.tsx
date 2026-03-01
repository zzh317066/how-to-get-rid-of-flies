"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { Faq } from "@/components/shared/faq";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { FlyIdentifierForm } from "@/components/features/identifier/fly-identifier-form";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

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

      {/* 2. Quick Answer */}
      <section id="quick-fixes" className="w-full py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Fastest Ways to Get Rid of Flies</h2>
            <p className="text-muted-foreground">Follow these 5 essential steps immediately regardless of the fly type:</p>
            <ul className="text-left space-y-4 text-lg">
              <li className="flex items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">1</span>
                <div><strong>Remove food and trash sources:</strong> Seal all food tightly and empty indoor bins.</div>
              </li>
              <li className="flex items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">2</span>
                <div><strong>Clean affected areas:</strong> Wipe down counters, clear sticky spills, and dry sinks.</div>
              </li>
              <li className="flex items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">3</span>
                <div><strong>Use traps where needed:</strong> Avoid indiscriminately spraying chemicals beforehand.</div>
              </li>
              <li className="flex items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">4</span>
                <div><strong>Seal entry points:</strong> Check window screens and door gaps.</div>
              </li>
              <li className="flex items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold mr-4">5</span>
                <div><strong>Identify the precise type:</strong> If the problem continues, you need specific strategies.</div>
              </li>
            </ul>
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
                <Button asChild variant="outline" className="w-full rounded-full"><Link href="/fruit-flies">See Fruit Fly Guide</Link></Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <CardTitle>Drain Flies</CardTitle>
                <CardDescription>Fuzzy and dark, typically appearing near sinks, drains, or moist bathrooms.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full rounded-full"><Link href="/drain-flies">See Drain Fly Guide</Link></Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <CardTitle>House Flies</CardTitle>
                <CardDescription>Common, much larger flies flying around trash, open food, and windows.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full rounded-full"><Link href="/house-flies">See House Fly Guide</Link></Button>
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

      {/* 5. General Removal Steps - Repeated briefly */}
      <section className="w-full py-12 bg-muted/20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl font-bold">Need more detailed trap options?</h3>
          <p className="text-muted-foreground">Checkout our comprehensive guide on traps.</p>
          <Button asChild variant="secondary"><Link href="/fruit-fly-trap">Read Trap Guides</Link></Button>
        </div>
      </section>

      {/* 6. Upsell CTA */}
      <UpsellCta className="border border-primary/20 bg-primary/5" />

      {/* 7. FAQ */}
      <Faq items={faqs} />
    </div>
  );
}
