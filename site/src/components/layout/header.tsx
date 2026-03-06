import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <span className="font-bold sm:inline-block">FlyAway Guide</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            {/* This section is replaced by the new structure */}
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {[
                { title: "Fruit Flies", href: "/fruit-flies", description: "Learn how to get rid of fruit flies near food and trash." },
                { title: "Drain Flies", href: "/drain-flies", description: "Identify and remove moth flies from sinks and drains." },
                { title: "House Flies", href: "/house-flies", description: "Keep large flies out of your home and windows." },
                { title: "Fungus Gnats", href: "/fungus-gnats", description: "Stop small flies from ruining your potted houseplants." },
                { title: "Outdoor Control", href: "/outdoor-fly-control", description: "Keep flies away from your patios and yards." },
                { title: "Pet Safe Methods", href: "/pet-safe-fly-removal", description: "Safe fly removal options around dogs and cats." },
                { title: "DIY Repellents", href: "/diy-fly-repellents", description: "Natural deterrents to keep flies out." },
                { title: "Restaurant Control", href: "/restaurant-fly-control", description: "Commercial strategies for health code compliance." },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    prefetch={false}
                    href={item.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">{item.title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              prefetch={false}
              href="/fruit-fly-trap"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Traps
            </Link>
          </nav>
          <div className="hidden sm:flex items-center space-x-2">
            <Button asChild variant="secondary" className="font-semibold text-primary bg-primary/10 hover:bg-primary/20">
              <Link href="/personalized-plan">
                Get Custom Plan ($5)
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#fly-identifier">Identifier</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
