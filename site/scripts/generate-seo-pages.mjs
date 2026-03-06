import pkg from '@next/env';
const { loadEnvConfig } = pkg;
import fs from 'fs/promises';
import path from 'path';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const evolink = createOpenAI({
    baseURL: "https://api.evolink.ai/v1",
    apiKey: process.env.EVOLINK_API_KEY || "",
});

const pagesToGenerate = [
    "how-to-get-rid-of-fruit-flies",
    "how-to-get-rid-of-drain-flies",
    "how-to-get-rid-of-flies-in-house",
    "how-to-get-rid-of-flies-outside",
    "how-to-get-rid-of-fruit-flies-in-house",

    "how-to-get-rid-of-flies-in-kitchen",
    "how-to-get-rid-of-flies-in-bathroom",
    "how-to-get-rid-of-flies-in-yard",
    "how-to-get-rid-of-flies-in-backyard",
    "how-to-get-rid-of-flies-indoors",

    "how-to-get-rid-of-cluster-flies",
    "how-to-get-rid-of-horse-flies",
    "how-to-get-rid-of-white-flies",
    "how-to-get-rid-of-small-flies",
    "how-to-get-rid-of-tiny-flies",

    "how-to-get-rid-of-flies-fast",
    "how-to-get-rid-of-flies-naturally",
    "how-to-get-rid-of-flies-quickly",
    "how-to-get-rid-of-flies-permanently",
    "how-to-get-rid-of-flies-at-home"
];

const componentTemplate = (slug, title, content) => {
    return `import { Metadata } from "next";
import Link from "next/link";
import { UpsellCta } from "@/components/shared/upsell-cta";
import { AdSense } from "@/components/shared/adsense";

export const metadata: Metadata = {
    title: "${title} | FlyAway Guide",
    description: "Learn ${title.toLowerCase()} fast and permanently with our proven methods and natural remedies.",
    alternates: {
        canonical: '/${slug}',
    },
};

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
                <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance capitalize">
                        ${title}
                    </h1>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container md:px-6 mx-auto max-w-4xl space-y-8 text-lg text-muted-foreground">
                    <div 
                        className="space-y-6 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mb-4 [&>h2]:mt-10 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-foreground [&>h3]:mb-3 [&>h3]:mt-6 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:space-y-2 [&>strong]:text-foreground"
                        dangerouslySetInnerHTML={{ __html: \`${content.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\` }} 
                    />
                </div>
            </section>

            <UpsellCta />
            
            {/* Internal Links Block as requested by user */}
            <section className="w-full py-12 bg-muted/50 border-t">
                 <div className="container md:px-6 mx-auto max-w-4xl">
                     <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                     <ul className="grid sm:grid-cols-2 gap-4">
                         <li><Link href="/how-to-get-rid-of-fruit-flies" className="text-primary hover:underline font-medium">How to get rid of fruit flies</Link></li>
                         <li><Link href="/how-to-get-rid-of-drain-flies" className="text-primary hover:underline font-medium">How to get rid of drain flies</Link></li>
                         <li><Link href="/how-to-get-rid-of-flies-in-house" className="text-primary hover:underline font-medium">How to get rid of flies in house</Link></li>
                         <li><Link href="/fruit-fly-trap" className="text-primary hover:underline font-medium">DIY fly traps</Link></li>
                         <li><Link href="/diy-fly-repellents" className="text-primary hover:underline font-medium">Natural fly repellents</Link></li>
                     </ul>
                 </div>
            </section>
            
            <div className="container py-8 text-center border-t">
                <Link href="/" className="text-primary hover:underline font-medium">&larr; Back to Main Content</Link>
            </div>
            <AdSense />
        </div>
    );
}
`};

async function main() {
    console.log("Starting SEO page generation via Evolink AI...");

    for (const slug of pagesToGenerate) {
        try {
            const title = slug.replace(/-/g, ' ');
            const targetDir = path.join(projectDir, 'src', 'app', slug);
            const targetFile = path.join(targetDir, 'page.tsx');

            // Skip if exists
            try {
                await fs.access(targetFile);
                console.log("Skipping " + slug + ", already exists.");
                continue;
            } catch (e) {
                // does not exist, proceed
            }

            console.log("Generating content for: " + title + "...");

            const promptStr = "Write a detailed SEO article about:\n\"" + title + "\"\n\nRequirements:\n1200-1800 words\nStructure:\n1 Introduction\n2 Why flies appear\n3 5 proven methods\n4 Natural remedies\n5 Prevention tips\n6 FAQ\n\nWrite in a clear practical style.\nAvoid fluff.\nGive actionable solutions.\n\nCRITICAL FORMATTING INSTRUCTION:\nReturn ONLY clean, raw HTML markup (e.g., <h2>, <h3>, <p>, <ul>, <li>, <strong>). \nDO NOT wrap your response in markdown formatting block like ```html. \nDO NOT INCLUDE AN <h1> TAG (the template already has one). Start exactly with <h2>Introduction</h2>. Use <br/> or <p> for paragraphs.";

            const { text } = await generateText({
                model: evolink("gpt-5.1"),
                prompt: promptStr,
                maxTokens: 3500,
            });

            let cleanHtml = text.trim();
            if (cleanHtml.startsWith("\`\`\`html")) cleanHtml = cleanHtml.replace(/^\`\`\`html\s*/, '');
            if (cleanHtml.startsWith("\`\`\`")) cleanHtml = cleanHtml.replace(/^\`\`\`\s*/, '');
            if (cleanHtml.endsWith("\`\`\`")) cleanHtml = cleanHtml.replace(/\s*\`\`\`$/, '');

            await fs.mkdir(targetDir, { recursive: true });
            await fs.writeFile(targetFile, componentTemplate(slug, title, cleanHtml));
            console.log("✅ Successfully created " + slug);

            // Add a small delay to avoid rate limits
            await new Promise(r => setTimeout(r, 2000));

        } catch (error) {
            console.error("❌ Error generating " + slug + ":", error);
        }
    }
    console.log("Finished generating pages!");
}

main();
