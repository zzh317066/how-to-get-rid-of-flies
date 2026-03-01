import { Metadata } from "next";
import { PersonalizedPlanForm } from "@/components/features/identifier/personalized-plan-form";
import { Faq } from "@/components/shared/faq";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Your Custom Fly Removal Plan | FlyAway Guide",
    description: "Get a customized, step-by-step action plan to remove flies from your home based on your unique situation and preferences.",
};

export default function PersonalizedPlanPage() {
    const faqs = [
        { question: "What exactly is included in the plan?", answer: "You receive a rapid 24-hour response strategy, a 3-day complete clearance protocol, and a 7-day prevention guide to ensure they do not return, along with specific product recommendations." },
        { question: "Do I have to buy expensive chemicals?", answer: "No. If you prefer natural or DIY methods (e.g., you have pets or children), you can specify that in your constraints and your plan will be built entirely around safer alternatives." },
        { question: "What if I don't know the exact fly type?", answer: "That's okay! We ask about their appearance and location. Our system will deduce the likely type and build the best generic response if it remains uncertain." },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-muted/10">
            {/* Header Area */}
            <section className="w-full py-12 md:py-16">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        Get Your Custom Removal Plan
                    </h1>
                    <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
                        Stop guessing and testing. Tell us about your home and learn exactly what steps to take.
                    </p>
                </div>
            </section>

            {/* Main Form Area */}
            <section className="w-full pb-16">
                <div className="container px-4 md:px-6">
                    <PersonalizedPlanForm />
                </div>
            </section>

            {/* FAQ */}
            <Faq items={faqs} title="Questions About The Custom Plan?" />

            {/* Return Links */}
            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
        </div>
    );
}
