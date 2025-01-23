const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-us.php",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/services.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pharmacovigilance.php",
        destination: "/services/safety",
        permanent: true,
      },
      {
        source: "/full-pharmacovigilance-support.php",
        destination: "/services/safety",
        permanent: true,
      },
      {
        source: "/local-literature-review.php",
        destination:
          "/services/safety/global-and-local-medical-literature-monitoring",
        permanent: true,
      },
      {
        source: "/local-for-greece-cyprus.php",
        destination:
          "/services/safety/global-and-local-medical-literature-monitoring",
        permanent: true,
      },
      {
        source: "/consultancy-services.php",
        destination: "/services/safety",
        permanent: true,
      },
      {
        source: "/audit-preparation-conduct.php",
        destination: "/services/quality-assurance",
        permanent: true,
      },
      {
        source: "/quality-assurance.php",
        destination: "/services/quality-assurance",
        permanent: true,
      },
      {
        source: "/quality-management-support.php",
        destination: "/services/quality-assurance",
        permanent: true,
      },
      {
        source: "/gdp-audits.php",
        destination: "/services/quality-assurance",
        permanent: true,
      },
      {
        source: "/materiovigilance.php",
        destination: "/services/safety/medical-device-vigilance",
        permanent: true,
      },
      {
        source: "/cosmetovigilance.php",
        destination: "/services/safety",
        permanent: true,
      },
      {
        source: "/contact-us.php",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/greek-legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/cypriot-legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/greek-materiovigilance.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/careers.php",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/code-of-conduct.php",
        destination: "/pdfs/code-of-conduct.pdf",
        permanent: true,
      },
      {
        source: "/nikolas-tsiakkas.php",
        destination: "/about-us#leadership",
        permanent: true,
      },
      {
        source: "/eleni-voidou.php",
        destination: "/about-us#leadership",
        permanent: true,
      },
      {
        source: "/katerina-paschou.php",
        destination: "/about-us#leadership",
        permanent: true,
      },
      {
        source: "/fotoula-dragatsi.php",
        destination: "/about-us#leadership",
        permanent: true,
      },
      {
        source: "/articles.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/greek-legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/cypriot-legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/greek-materiovigilance.php",
        destination: "/services/safety/medical-device-vigilance",
        permanent: true,
      },
      {
        source: "/useful-links.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/more-cclinical.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/more-legislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/more-articles.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/more-clegislation.php",
        destination: "/legislation",
        permanent: true,
      },
      {
        source: "/images/:path*",
        destination: "/legislation",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
