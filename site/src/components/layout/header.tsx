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
            <Link
              href="/fruit-flies"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Fruit Flies
            </Link>
            <Link
              href="/drain-flies"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Drain Flies
            </Link>
            <Link
              href="/house-flies"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              House Flies
            </Link>
            <Link
              href="/fruit-fly-trap"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Traps
            </Link>
          </nav>
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
             <Link href="#fly-identifier">Try Identifier</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
