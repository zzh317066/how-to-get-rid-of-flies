import Link from "next/link";
import { Button } from "../ui/button";

interface UpsellCtaProps {
    title?: string;
    description?: string;
    buttonText?: string;
    className?: string;
}

export function UpsellCta({
    title = "Want a plan tailored to your home?",
    description = "Based on your fly type, home situation, and preferences. Get a Personalized Fly Removal Plan to remove flies fast and safely.",
    buttonText = "Get My Custom Plan",
    className = "",
}: UpsellCtaProps) {
    return (
        <div className={`rounded-lg border bg-card text-card-foreground shadow-sm p-6 sm:p-8 text-center flex flex-col items-center max-w-2xl mx-auto my-12 ${className}`}>
            <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
            <p className="text-muted-foreground mb-6 max-w-[85%]">
                {description}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto font-semibold bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-md transition-all ease-in-out hover:-translate-y-1">
                <Link href="/personalized-plan">{buttonText}</Link>
            </Button>
        </div>
    );
}
