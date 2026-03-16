
import { Poppins, Inter } from "next/font/google";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Dr Sharma's Clinic - Trusted Healthcare in Pune Since 2010",
  description:
    "Dr Sharma's Clinic offers expert general consultation, cardiology, pediatrics, dental, eye care, and lab services in Pune. Led by Dr. Rajesh Sharma, MBBS MD with 14+ years of experience.",
  keywords:
    "clinic pune, doctor pune, dr sharma's clinic, dr rajesh sharma, general physician pune, cardiology pune, pediatrics pune",
  authors: [{ name: "Dr Sharma's Clinic" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Dr Sharma's Clinic - Your Health, Our Priority",
    description:
      "Trusted healthcare since 2010. 12,000+ patients treated. Book your appointment today.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter bg-bg text-text antialiased">
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}