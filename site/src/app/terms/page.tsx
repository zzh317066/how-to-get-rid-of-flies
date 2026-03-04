import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | FlyAway Guide',
    description: 'Read the terms and conditions for using FlyAway Guide.',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsOfServicePage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground text-sm">Last Updated: March 2026</p>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using FlyAway Guide (the "Website"), you accept and agree to be bound by the terms and provision of this agreement.
                        In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this Website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informational Purposes Only</h2>
                    <p>
                        The information provided on FlyAway Guide, including all pest control methods, DIY traps, and chemical recommendations, is for general informational purposes only.
                        While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                    </p>
                    <p>
                        Any reliance you place on such information is therefore strictly at your own risk. Always read and follow the manufacturer's directions when using any chemical pest control products. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, arising out of, or in connection with, the use of this website.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. External Links & Affiliate Disclosure</h2>
                    <p>
                        Through this website you are able to link to other websites which are not under the control of FlyAway Guide. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                    </p>
                    <p>
                        FlyAway Guide may participate in affiliate marketing programs, which means we may get paid commissions on products purchased through our links to retailer sites. We only recommend products we genuinely believe are helpful for pest control.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
                    <p>
                        The Site and its original content, features, and functionality are owned by FlyAway Guide and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Modifications to Terms</h2>
                    <p>
                        FlyAway Guide reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, we will announce that these changes have been made on our home page and on other key pages on our site.
                    </p>

                    <p className="mt-8">
                        If you have any questions regarding these terms, please contact us via our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
                    </p>
                </div>
            </div>
        </main>
    );
}
