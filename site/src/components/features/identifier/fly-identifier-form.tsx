"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { identifyFly } from "@/app/actions/fly-identifier";
import { trackEvent } from "@/lib/analytics";

export function FlyIdentifierForm() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const [formData, setFormData] = useState({
        location: "",
        appearance: "",
        amount: "",
        notes: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        trackEvent("fly_identifier_submitted", formData);

        const response = await identifyFly(formData);

        if (response.success && response.data) {
            setResult(response.data);
        } else {
            alert(response.error || "Failed to identify fly. Please try again.");
        }

        setLoading(false);
    };

    if (result) {
        // Track unique result ID or just general success (if not already tracked, could cause double renders, fine for MVP)
        return (
            <div className="space-y-6 text-left max-w-md mx-auto animate-in fade-in duration-500">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Likely Match: {result.likelyType.replace("_", " ").toUpperCase()}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{result.explanation}</p>
                    <div className="space-y-2">
                        <p className="text-sm font-semibold">What to do next:</p>
                        <p className="text-sm">{result.nextStep}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    <Button asChild className="w-full rounded-full shadow-sm" onClick={() => trackEvent("fly_identifier_clicked_recommended")}>
                        <a href={result.recommendedPageSlug}>Read the Full Guide</a>
                    </Button>
                    <Button asChild className="w-full rounded-full bg-primary/10 text-primary hover:bg-primary/20" variant="secondary" onClick={() => trackEvent("fly_identifier_clicked_upsell")}>
                        <a href="/personalized-plan">Get Custom Plan ($5)</a>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form className="space-y-6 text-left max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <Label htmlFor="location">Where do you see them most often?</Label>
                <select id="location" required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="">Select location...</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="sink">Near sink or drain</option>
                    <option value="fruit">Around fruit or food</option>
                    <option value="trash">Near trash</option>
                    <option value="windows">Near windows</option>
                </select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="appearance">What do they look like?</Label>
                <select id="appearance" required value={formData.appearance} onChange={e => setFormData({ ...formData, appearance: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="">Select appearance...</option>
                    <option value="very_small">Very small</option>
                    <option value="dark_fuzzy">Small and dark/fuzzy</option>
                    <option value="common">Common larger house-fly look</option>
                    <option value="not_sure">Not sure</option>
                </select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="amount">How many are there?</Label>
                <select id="amount" required value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="">Select severity...</option>
                    <option value="few">Just a few</option>
                    <option value="moderate">A moderate amount</option>
                    <option value="severe">A lot (infestation level)</option>
                </select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="notes">Any other details? (Optional)</Label>
                <Textarea id="notes" value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} placeholder="e.g. They are tiny and hovering right around my sink." className="resize-none bg-muted/30 focus-visible:ring-2 focus-visible:ring-primary" />
            </div>

            <Button className="w-full rounded-full shadow-md transition-transform hover:-translate-y-1" type="submit" disabled={loading}>
                {loading ? "Identifying..." : "Identify My Flies"}
            </Button>
        </form>
    );
}
