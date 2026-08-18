import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Cloudvation | Cloud migration, made practical", template: "%s | Cloudvation" },
  description: "Cloud migration strategy, delivery, and optimization for ambitious teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
