export default function JsonLd() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HalfLife",
    url: "https://halflife.vibed-lab.com",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Interactive charts for 30+ drugs. Built by a pharmacist.",
    author: {
      "@type": "Person",
      name: "Jay",
      jobTitle: "Licensed Pharmacist",
      description: "Licensed pharmacist and developer specializing in pharmacokinetics and clinical pharmacy",
      url: "https://halflife.vibed-lab.com/about",
      knowsAbout: ["Pharmacokinetics", "Drug Half-Life", "ADME", "Clinical Pharmacy", "Pharmacodynamics"],
    },
    publisher: {
      "@type": "Organization",
      name: "Vibed Lab",
      url: "https://vibed-lab.com",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Jay",
      jobTitle: "Licensed Pharmacist",
    },
  };

  const webApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HalfLife — Drug Half-Life Visualizer",
    url: "https://halflife.vibed-lab.com",
    applicationCategory: "HealthApplication",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Visualize how drug concentration changes over time using pharmacokinetic half-life calculations. Interactive charts for 30+ drugs. Built by a pharmacist.",
    author: {
      "@type": "Person",
      name: "Jay",
      description: "Pharmacist and developer",
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vibed Lab",
    url: "https://vibed-lab.com",
    sameAs: [
      "https://clearrx.vibed-lab.com",
      "https://cycle.vibed-lab.com",
      "https://backtest.vibed-lab.com",
      "https://halflife.vibed-lab.com",
    ],
    description:
      "Vibed Lab builds interactive tools for health, finance, and data visualization.",
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Vibed Lab",
        item: "https://vibed-lab.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "HalfLife",
        item: "https://halflife.vibed-lab.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  );
}
