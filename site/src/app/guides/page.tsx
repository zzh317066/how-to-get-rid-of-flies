import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AdSense } from '@/components/shared/adsense';

export const metadata: Metadata = {
  title: 'All Fly Removal Guides | FlyAway Guide',
  description: 'Browse our complete collection of fly removal guides, DIY traps, and pest control methods.',
  alternates: {
    canonical: '/guides',
  },
};

const guides = [
  {
    category: "Specific Fly Types",
    items: [
      { title: "Fruit Flies", href: "/fruit-flies", description: "How to get rid of fruit flies near food and trash." },
      { title: "Drain Flies", href: "/drain-flies", description: "Identify and remove moth flies from sinks and drains." },
      { title: "House Flies", href: "/house-flies", description: "Keep large flies out of your home and windows." },
      { title: "Fungus Gnats", href: "/fungus-gnats", description: "Stop small flies from ruining your potted houseplants." },
    ]
  },
  {
    category: "General & Prevention",
    items: [
      { title: "Fruit Fly Traps", href: "/fruit-fly-trap", description: "Detailed recipes for DIY traps." },
      { title: "Outdoor Fly Control", href: "/outdoor-fly-control", description: "Keep flies away from your patios and yards." },
      { title: "Pet Safe Methods", href: "/pet-safe-fly-removal", description: "Safe fly removal options around dogs and cats." },
      { title: "DIY Repellents", href: "/diy-fly-repellents", description: "Natural deterrents to keep flies out." },
      { title: "Restaurant Fly Control", href: "/restaurant-fly-control", description: "Commercial strategies for health code compliance." },
    ]
  },
  {
    category: "Detailed Scenarios",
    items: [
      { title: "How to get rid of fruit flies", href: "/how-to-get-rid-of-fruit-flies", description: "Targeted strategies for fruit fly removal." },
      { title: "How to get rid of drain flies", href: "/how-to-get-rid-of-drain-flies", description: "Clearing drain fly infestations completely." },
      { title: "How to get rid of flies in house", href: "/how-to-get-rid-of-flies-in-house", description: "General indoor fly control methods." },
      { title: "How to get rid of flies outside", href: "/how-to-get-rid-of-flies-outside", description: "Outdoor yard and patio fly management." },
      { title: "How to get rid of fruit flies in house", href: "/how-to-get-rid-of-fruit-flies-in-house", description: "Combatting indoor fruit fly swarms." },
      { title: "How to get rid of flies in kitchen", href: "/how-to-get-rid-of-flies-in-kitchen", description: "Food-safe kitchen fly removal." },
      { title: "How to get rid of flies in bathroom", href: "/how-to-get-rid-of-flies-in-bathroom", description: "Eliminate bathroom and sink flies." },
      { title: "How to get rid of flies in yard", href: "/how-to-get-rid-of-flies-in-yard", description: "Yard fly reduction strategies." },
      { title: "How to get rid of flies in backyard", href: "/how-to-get-rid-of-flies-in-backyard", description: "Backyard fly treatments." },
      { title: "How to get rid of flies indoors", href: "/how-to-get-rid-of-flies-indoors", description: "Complete indoor fly control." },
      { title: "How to get rid of cluster flies", href: "/how-to-get-rid-of-cluster-flies", description: "Managing cluster fly invasions." },
      { title: "How to get rid of horse flies", href: "/how-to-get-rid-of-horse-flies", description: "Defending against biting horse flies." },
      { title: "How to get rid of white flies", href: "/how-to-get-rid-of-white-flies", description: "Protecting plants from white flies." },
      { title: "How to get rid of small flies", href: "/how-to-get-rid-of-small-flies", description: "Identifying and removing tiny household flies." },
      { title: "How to get rid of tiny flies", href: "/how-to-get-rid-of-tiny-flies", description: "Solutions for very small flying pests." },
      { title: "How to get rid of flies fast", href: "/how-to-get-rid-of-flies-fast", description: "Quick action plans for immediate relief." },
      { title: "How to get rid of flies naturally", href: "/how-to-get-rid-of-flies-naturally", description: "Chemical-free fly removal methods." },
      { title: "How to get rid of flies quickly", href: "/how-to-get-rid-of-flies-quickly", description: "Rapid fly extermination guides." },
      { title: "How to get rid of flies permanently", href: "/how-to-get-rid-of-flies-permanently", description: "Long-term prevention and eradication." },
      { title: "How to get rid of flies at home", href: "/how-to-get-rid-of-flies-at-home", description: "Residential fly control tips." },
    ]
  }
];

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
                All Fly Removal Guides
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Browse our complete collection of pest control guides, from identifying the exact type of fly to creating DIY traps and permanent prevention strategies.
            </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl space-y-16">
          {guides.map((section) => (
            <div key={section.category} className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight border-b pb-4">{section.category}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={false} className="block group h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-xl">
                    <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 group-hover:-translate-y-1 bg-card">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors capitalize">{item.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className="container py-8 text-center border-t">
          <Button asChild variant="outline" className="rounded-full shadow-sm hover:-translate-y-1 transition-transform">
              <Link href="/">&larr; Back to Home</Link>
          </Button>
      </div>

      <AdSense />
    </div>
  );
}
