// app/page.js
"use client";
import { useMyContext } from './context/MyContext';

import { NextSeo } from 'next-seo';
import Hero from './components/Hero/Hero';
import ConsultationChatBot from './components/ConsultationChatBot/ConsultationChatBot';
import ResultsHighlights from './components/ResultsHighlights/ResultsHighlights';
import ContactForm from './components/ContactForm/ContactForm';
import CTABanner from './components/CTABanner/CTABanner';
import StructuredData from './components/StructuredData';

export default function HomePage() {
  const { message } = useMyContext();

  return (
    <>
      {/* SEO Configuration */}
      <NextSeo
        title="Orlando Personal Injury Lawyers - Coye Law Firm"
        description="Get expert legal representation from top personal injury lawyers in Orlando. Call us today for a free consultation!"
        canonical="https://www.coyelawfirm.com/"
        openGraph={{
          url: 'https://www.coyelawfirm.com/',
          title: 'Orlando Personal Injury Lawyers - Coye Law Firm',
          description: 'Get expert legal representation from top personal injury lawyers in Orlando. Call us today for a free consultation!',
          images: [
            {
              url: 'https://www.coyelawfirm.com/home.jpg',
              width: 800,
              height: 600,
              alt: 'Orlando Personal Injury Lawyers',
            },
          ],
          site_name: 'Coye Law Firm',
        }}
        twitter={{
          handle: '@coyelawfirm',
          site: '@coyelawfirm',
          cardType: 'summary_large_image',
        }}
      />

      {/* Structured Data */}
      <StructuredData />

      {/* Page Content */}
      <Hero />
      <ConsultationChatBot />
      <ResultsHighlights />
      <ContactForm />
      <CTABanner />
      <p>{message}</p>

    </>
  );
}
