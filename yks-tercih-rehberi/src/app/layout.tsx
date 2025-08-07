import "./globals.css";
import SeoWrapper from "../../src/app/components/SeoWrapper";
import Script from "next/script";

export const metadata = {
  title: "TercihNet | YKS Tercih Rehberi",
  description:
    "2025 YKS tercih süreciniz için en doğru adres – Üniversite ve bölüm bilgileri, sıralamalar, şehir rehberi ve daha fazlası.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
<head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        <SeoWrapper />
        {children}
      </body>
    </html>
  );
}
