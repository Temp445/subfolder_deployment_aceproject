
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import 'swiper/css';
// import { PageTracker } from "@/components/PageTracker";
// import LinkedInTracker from '@/components/LinkedInTracker';

// const GoogleAdID = process.env.NEXT_PUBLIC_GA_ADS_CONVERSION_ID;
// const GoogleAnalyticsID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// const linkedInPartnerId = process.env.NEXT_PUBLIC_LI_PARTNER_ID!;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // // Ensure Google Ads and Analytics IDs are set  
  // if (!GoogleAdID || !GoogleAnalyticsID) {
  //   console.error(
  //     "❌ Missing Google Ads or Analytics ID. Please set NEXT_PUBLIC_GA_ADS_CONVERSION_ID and NEXT_PUBLIC_GA_MEASUREMENT_ID in .env."
  //   );
  // }

  // if (!linkedInPartnerId) {
  //   console.error(
  //     "❌ Missing LinkedIn Partner ID. Please set NEXT_PUBLIC_LI_PARTNER_ID in .env."
  //   );
  // }

  // useTracking();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/AceLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        {/* Google Analytics Tracker */}
        {/* <PageTracker />  */}

        {/* LinkedIn Tracker */}
        {/* <LinkedInTracker partnerId={linkedInPartnerId} /> */}

        <NextIntlClientProvider> {children} </NextIntlClientProvider>
      </body>
    </html>

  );
}
