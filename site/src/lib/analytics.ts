export function trackEvent(eventName: string, properties?: Record<string, any>) {
    // In a real app, this would send to PostHog, Vercel Web Analytics, or Google Analytics
    console.log(`[Analytics] Event: ${eventName}`, properties || "");
}
