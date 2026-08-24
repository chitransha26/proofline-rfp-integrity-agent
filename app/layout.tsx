import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proofline — RFP Integrity Agent",
  description: "The pre-submission integrity layer that verifies whether every material RFP claim is supported, applicable, current and approved.",
  openGraph: { title: "Proofline — RFP Integrity Agent", description: "Catch the claim your RFP copilot would confidently submit.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Proofline — RFP Integrity Agent", description: "Catch the claim your RFP copilot would confidently submit.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
