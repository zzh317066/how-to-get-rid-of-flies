import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqProps {
    items: FaqItem[];
    title?: string;
}

export function Faq({ items, title = "Frequently Asked Questions" }: FaqProps) {
    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border bg-card px-4 rounded-lg">
                            <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-colors py-4">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
