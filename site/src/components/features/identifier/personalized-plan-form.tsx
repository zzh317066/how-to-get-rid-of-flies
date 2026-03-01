"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trackEvent } from "@/lib/analytics";

export function PersonalizedPlanForm() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const [formState, setFormState] = useState({
        flyType: "",
        area: "",
        severity: "mild",
        petsOrKids: "",
        chemicalPreference: "prefer_avoid",
        extraNotes: ""
    });

    const nextStep = () => {
        if (step === 1) trackEvent("plan_form_started", formState);
        setStep((s) => s + 1);
    };
    const prevStep = () => setStep((s) => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowPreview(true);
    };

    const handleCheckout = () => {
        setLoading(true);
        trackEvent("plan_checkout_clicked", formState);
        const params = new URLSearchParams(formState);
        window.location.href = `/personalized-plan/result/custom?${params.toString()}`;
    };

    if (showPreview) {
        return (
            <div className="space-y-8 animate-in fade-in duration-500 max-w-2xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight">Your Plan is Ready for Generation</h2>
                    <p className="text-muted-foreground mt-2">Here's a preview of your situation and what you'll get.</p>
                </div>

                <div className="border bg-card rounded-lg p-6 space-y-6 shadow-sm">
                    <div>
                        <h3 className="font-semibold text-lg border-b pb-2 mb-4">Summary of Your Situation</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><strong>Fly type:</strong> {formState.flyType || "Not sure"}</li>
                            <li><strong>Area:</strong> {formState.area || "General"}</li>
                            <li><strong>Severity:</strong> {formState.severity}</li>
                            <li><strong>Constraints:</strong> Pets/Kids: {formState.petsOrKids}, Chemicals: {formState.chemicalPreference}</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg border-b pb-2 mb-4">What You Will Get Immediately</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                            <li>A 24-hour rapid action plan</li>
                            <li>A 3-day complete clearance plan</li>
                            <li>A 7-day prevention plan</li>
                            <li>Safe product recommendations for your home</li>
                            <li>Critical "What Not to Do" guidance</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center bg-primary/5 border border-primary/20 p-8 rounded-lg mt-8">
                    <h3 className="font-bold text-2xl mb-4">Get My Custom Plan</h3>
                    <p className="text-muted-foreground mb-6">Built specifically for your home's layout and constraints to save you time and trial-and-error.</p>
                    <Button size="lg" disabled={loading} className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transition-transform hover:-translate-y-1" onClick={handleCheckout}>
                        {loading ? "Processing..." : "Generate AI Plan (Free for MVP)"}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form className="space-y-8 max-w-xl mx-auto border rounded-xl p-6 md:p-8 bg-card shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
                <span>Step {step} of 2</span>
                <span className="font-medium">{step === 1 ? 'Basic Situation' : 'Home Constraints'}</span>
            </div>

            {step === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                    <div className="space-y-2">
                        <Label>What type of flies are you dealing with?</Label>
                        <select required value={formState.flyType} onChange={e => setFormState({ ...formState, flyType: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            <option value="">Select type...</option>
                            <option value="fruit flies">Fruit Flies</option>
                            <option value="drain flies">Drain Flies</option>
                            <option value="house flies">House Flies</option>
                            <option value="not_sure">Not sure</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label>Where is the problem worst?</Label>
                        <select required value={formState.area} onChange={e => setFormState({ ...formState, area: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            <option value="">Select area...</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="bathroom">Bathroom</option>
                            <option value="trash">Trash area</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label>How severe is it?</Label>
                        <select required value={formState.severity} onChange={e => setFormState({ ...formState, severity: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            <option value="mild">Mild (Just a few)</option>
                            <option value="moderate">Moderate (Noticeable daily)</option>
                            <option value="severe">Severe (Swarming)</option>
                        </select>
                    </div>

                    <Button type="button" className="w-full rounded-full shadow-md transition-transform hover:-translate-y-1" onClick={nextStep}>Next: Home Constraints</Button>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                    <div className="space-y-2">
                        <Label>Do you have pets or children at home?</Label>
                        <select required value={formState.petsOrKids} onChange={e => setFormState({ ...formState, petsOrKids: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label>Are chemical sprays acceptable?</Label>
                        <select required value={formState.chemicalPreference} onChange={e => setFormState({ ...formState, chemicalPreference: e.target.value })} className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-muted/30 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                            <option value="yes">Yes</option>
                            <option value="prefer_avoid">Prefer to avoid if possible</option>
                            <option value="no">No, entirely natural</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label>Anything else we should know?</Label>
                        <Textarea value={formState.extraNotes} onChange={e => setFormState({ ...formState, extraNotes: e.target.value })} placeholder="e.g. We tried apple cider vinegar but it only caught a few." className="resize-none bg-muted/30 focus-visible:ring-2 focus-visible:ring-primary" />
                    </div>

                    <div className="flex gap-4">
                        <Button type="button" variant="outline" className="w-1/3 rounded-full" onClick={prevStep}>Back</Button>
                        <Button type="submit" className="w-2/3 rounded-full shadow-md transition-transform hover:-translate-y-1" disabled={loading}>
                            {loading ? "Generating Preview..." : "View Plan Summary"}
                        </Button>
                    </div>
                </div>
            )}
        </form>
    );
}
