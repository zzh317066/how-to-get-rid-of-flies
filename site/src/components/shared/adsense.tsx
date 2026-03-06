import Script from 'next/script';

/**
 * AdSense script component.
 * We only load this on content-rich pages to comply with Google's "Valuable Inventory" policy,
 * preventing ads from showing on Legal, Landing, or Tool pages.
 */
export function AdSense() {
    // We can choose to only show in production to avoid affecting local dev metrics
    if (process.env.NODE_ENV !== 'production') {
        return null;
    }

    return (
        <Script
            id="adsbygoogle-init"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6155455223911546"
            crossOrigin="anonymous"
            strategy="afterInteractive" // better performance for LCP than beforeInteractive
        />
    );
}
