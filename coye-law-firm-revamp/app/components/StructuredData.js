// components/StructuredData.js
export default function StructuredData() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Coye Law Firm",
            "image": "https://www.coyelawfirm.com/logo.png",
            "url": "https://www.coyelawfirm.com",
            "telephone": "+1-407-648-4940",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "730 Vassar St",
              "addressLocality": "Orlando",
              "addressRegion": "FL",
              "postalCode": "32804",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.573255",
              "longitude": "-81.376412"
            },
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "priceRange": "$$$",
          }),
        }}
      />
    );
  }
  