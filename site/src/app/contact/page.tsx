import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | FlyAway Guide',
    description: 'Get in touch with the FlyAway Guide team for questions, feedback, or business inquiries.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-2xl">
            <div className="space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-muted-foreground text-lg">
                        Have a question about a fly infestation or feedback about our guides? We'd love to hear from you.
                    </p>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border">
                    <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                    <div className="space-y-4 text-lg">
                        <p className="flex items-start">
                            <span className="font-medium w-24">Email:</span>
                            <a href="mailto:support@howtogetridofflies.top" className="text-primary hover:underline font-medium">
                                support@howtogetridofflies.top
                            </a>
                        </p>
                        <p className="text-muted-foreground mt-4 text-base">
                            We aim to respond to all inquiries within 24-48 business hours.
                            Please note that while we provide comprehensive general advice, we are unable to offer personalized exterminator services or respond to emergency pest removal requests.
                            For severe infestations, we always recommend consulting a local licensed pest control professional.
                        </p>
                    </div>

                    <div className="mt-8 pt-8 border-t">
                        <h3 className="font-semibold mb-2">Business Inquiries & Advertising</h3>
                        <p className="text-muted-foreground text-base">
                            For advertising opportunities, partnership proposals, or press inquiries, please use the email address above with the subject line "Partnership".
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
