import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built for resolving household fly issues fast. Identifying and effectively removing bugs.
                    </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <Link
                        href="/about"
                        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                        Contact
                    </Link>
                    <span className="text-muted-foreground/30 hidden md:inline">|</span>
                    <Link
                        href="/privacy"
                        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
