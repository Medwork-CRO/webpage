/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: "medwork.gr",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pharmacovigilance.php',
        destination: '/services/vigilance',
        permanent: true,
      },
      {
        source: '/full-pharmacovigilance-support.php',
        destination: '/services/vigilance',
        permanent: true,
      },
      {
        source: '/local-literature-review.php',
        destination: '/services/vigilance',
        permanent: true,
      },
      {
        source: '/local-for-greece-cyprus.php',
        destination: '/services/vigilance',
        permanent: true,
      },
      {
        source: '/consultancy-services.php',
        destination: '/services/vigilance',
        permanent: true,
      },
      {
        source: '/audit-preparation-conduct.php',
        destination: '/services/vigilance',
        permanent: true,
      },
      {
        source: '/quality-assurance.php',
        destination: '/services/quality-management',
        permanent: true,
      },
      {
        source: '/quality-management-support.php',
        destination: '/services/quality-management',
        permanent: true,
      },
      {
        source: '/gdp-audits.php',
        destination: '/services/quality-management',
        permanent: true,
      },
      {
        source: '/materiovigilance.php',
        destination: '/services/materiovigilance',
        permanent: true,
      },
      {
        source: '/cosmetovigilance.php',
        destination: '/services/cosmetovigilance',
        permanent: true,
      },
      {
        source: '/contact-us.php',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/legislation.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/greek-legislation.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cypriot-legislation.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/greek-materiovigilance.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/useful-links.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/careers.php',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/code-of-conduct.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nikolas-tsiakkas.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/eleni-voidou.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/katerina-paschou.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/fotoula-dragatsi.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/articles.php',
        destination: '/about/legislation',
        permanent: true,
      },
      {
        source: '/legislation.php',
        destination: '/about/legislation',
        permanent: true,
      },
      {
        source: '/greek-legislation.php',
        destination: '/about/legislation',
        permanent: true,
      },
      {
        source: '/cypriot-legislation.php',
        destination: '/about/legislation',
        permanent: true,
      },
      {
        source: '/greek-materiovigilance.php',
        destination: '/about/legislation',
        permanent: true,
      },
      {
        source: '/useful-links.php',
        destination: '/about/legislation',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
