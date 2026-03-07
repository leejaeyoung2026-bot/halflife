interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}

export default function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "Jay",
      description: "Licensed pharmacist and developer",
      url: "https://halflife.vibed-lab.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Vibed Lab",
      url: "https://vibed-lab.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en-US",
    about: {
      "@type": "MedicalWebPage",
      about: {
        "@type": "Drug",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: "Patients, caregivers, and healthcare students",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Jay",
      jobTitle: "Licensed Pharmacist",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
