import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

// JSON-LD Schema for "Person"
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Priti Gupta",
    url: "https://pritigupta.dev", // Replace with actual domain
    jobTitle: "Full-Stack Engineer",
    knowsAbout: ["Full Stack Development", "Machine Learning", "AI Systems", "React", "Next.js", "Python"],
    sameAs: [
        "https://github.com/priti200",
        "https://linkedin.com/in/priti-gupta", // Replace with actual LinkedIn
    ],
    description: "Full-Stack Engineer building intelligent products with engineering precision."
};

export const metadata: Metadata = {
    title: {
        default: "Priti Gupta | Full Stack & AI Engineer",
        template: "%s | Priti Gupta"
    },
    description: "Portfolio of Priti Gupta, a Full-Stack Engineer specializing in AI-Powered Products, React.js, and Research-Grade Machine Learning systems.",
    keywords: ["Full Stack Engineer", "AI Engineer", "React Developer", "Machine Learning", "Next.js", "TypeScript", "Product Engineer", "Software Engineer"],
    authors: [{ name: "Priti Gupta" }],
    creator: "Priti Gupta",
    metadataBase: new URL("https://pritigupta.dev"), // Replace with actual domain
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://pritigupta.dev",
        title: "Priti Gupta | Engineering Intelligent Products",
        description: "Full-Stack Engineer bridging the gap between complex ML systems and fluid user experiences.",
        siteName: "Priti Gupta Portfolio",
        images: [
            {
                url: "/opengraph-image.png", // User needs to add this file
                width: 1200,
                height: 630,
                alt: "Priti Gupta - Full Stack & AI Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Priti Gupta | Full Stack & AI Engineer",
        description: "Building intelligent products with engineering precision.",
        creator: "@pritigupta", // Replace with actual handle if available
        images: ["/twitter-image.png"], // User needs to add this file
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                className={cn(
                    "min-h-screen font-sans antialiased selection:bg-blue-500/20",
                    inter.variable,
                    jakarta.variable,
                    jetbrainsMono.variable
                )}
            >
                {/* Inject JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
