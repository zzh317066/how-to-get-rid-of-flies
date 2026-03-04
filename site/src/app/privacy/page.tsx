import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | FlyAway Guide',
    description: 'Learn how FlyAway Guide respects your privacy, handles your data, and partners with third-party vendors for advertising.',
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground text-sm">Last Updated: March 2026</p>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                    <p>
                        At FlyAway Guide (howtogetridofflies.top), the privacy of our visitors is of extreme importance to us.
                        This privacy policy document outlines the types of personal information is received and collected by FlyAway Guide and how it is used.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Log Files</h2>
                    <p>
                        Like many other Web sites, FlyAway Guide makes use of log files. The information inside the log files includes
                        internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages,
                        and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information.
                        IP addresses, and other such information are not linked to any information that is personally identifiable.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Web Beacons</h2>
                    <p>
                        FlyAway Guide does use cookies to store information about visitors' preferences, record user-specific information on which pages
                        the user access or visit, customize Web page content based on visitors browser type or other information that the visitor
                        sends via their browser.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Google AdSense and DoubleClick DART Cookie</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
                        <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
                        <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>. (Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://aboutads.info" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.)</li>
                    </ul>
                    <p className="mt-4">
                        We have no access to or control over these cookies that are used by third-party advertisers.
                        You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices.
                        FlyAway Guide's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
                    <p>
                        By using our website, you hereby consent to our privacy policy and agree to its terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
                    <p>
                        If you require any more information or have any questions about our privacy policy, please feel free to contact us by visiting our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
                    </p>
                </div>
            </div>
        </main>
    );
}
