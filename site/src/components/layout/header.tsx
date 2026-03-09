import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <span className="font-bold sm:inline-block">FlyAway Guide</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 lg:space-x-2">

            <div className="relative group">
              <button aria-haspopup="true" className="flex items-center gap-1 text-sm font-medium pl-2 pr-1 py-2 rounded-md transition-colors hover:text-foreground/80 text-foreground/60 hover:bg-accent hover:text-accent-foreground outline-none">
                Pest Guides <ChevronDown className="h-4 w-4 opacity-50 transition duration-200 group-hover:-rotate-180" />
              </button>

              {/* Mega Menu Dropdown Container */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                <ul className="grid w-[320px] gap-3 p-4 bg-background border rounded-lg shadow-xl md:w-[500px] md:grid-cols-2 lg:w-[640px]">
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
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
                          {item.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              prefetch={false}
              href="/fruit-fly-trap"
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              Traps
            </Link>
            <Link
              prefetch={false}
              href="/guides"
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              All Guides
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
