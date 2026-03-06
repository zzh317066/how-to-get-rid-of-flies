import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us | FlyAway Guide',
    description: 'Learn about the mission behind FlyAway Guide. Discover how our expert advice and AI identification tools help homeowners eliminate fly infestations quickly and safely.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About FlyAway Guide</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Your ultimate resource for identifying, removing, and preventing household fly infestations.
                    </p>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none text-lg space-y-6">
                    <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
                    <p>
                        Dealing with flies in your home isn't just annoying—it can be unsanitary and frustrating when traditional methods seem to fail.
                        We created <strong>FlyAway Guide</strong> to cut through the noise and provide homeowners with clear, scientifically-backed, and practical solutions to common pest problems.
                    </p>
                    <p>
                        Whether you are battling a sudden swarm of fruit flies in your kitchen, mysterious moth flies emerging from your bathroom drains, or aggressive house flies ruining your summer barbeque, our mission is to provide you with the exact knowledge you need to reclaim your space.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">What We Do</h2>
                    <p>
                        We believe that successful pest control starts with <strong>accurate identification</strong>. You cannot treat a drain fly infestation the same way you treat fruit flies.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mt-4">
                        <li><strong>Identification Guides:</strong> We help you quickly figure out exactly what type of fly is invading your home.</li>
                        <li><strong>Targeted Solutions:</strong> We skip the generic advice and provide specific, step-by-step removal strategies for each fly species.</li>
                        <li><strong>DIY & Commercial Advice:</strong> We offer both natural, do-it-yourself trap recipes and honest reviews of store-bought solutions.</li>
                        <li><strong>Long-term Prevention:</strong> We teach you how to alter habits and eliminate attractants so the flies never return.</li>
                    </ul>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Transparency & Trust</h2>
                    <p>
                        We are committed to providing honest, actionable information. To keep our site running and to continue updating our guides, we partner with advertising networks like Google AdSense to display relevant ads. We may also occasionally recommend specific pest control products.
                    </p>
                    <p>
                        If you have any questions, suggestions for new guides, or need further assistance, please don't hesitate to reach out.
                    </p>

                    <div className="mt-12 pt-8 border-t flex flex-col items-center text-center space-y-4">
                        <h3 className="text-2xl font-bold">Have a question?</h3>
                        <p className="text-muted-foreground">We are here to help you get your fly problem under control.</p>
                        <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
