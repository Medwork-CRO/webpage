import { NavProp } from "./NavHamburger";

const About = {
  label: "About",
  href: "/about",
  subCategories: [
    {
      label: "Company",
      href: "/about/company",
    },
    // {
    //   label: "Legislation",
    //   href: "/about/legislation",
    // },
  ],
};

const Services = {
  label: "Services",
  href: "/services",
  subCategories: [
    {
      label: "Vigilance",
      href: "/services/vigilance",
    },
    {
      label: "Quality Management",
      href: "/services/quality-management",
    },
    {
      label: "Outsourcing",
      href: "/services/outsourcing",
    },
    // {
    //   label: "Cosmetovigilance",
    //   href: "/services/cosmetovigilance",
    // },
    // {
    //   label: "Training",
    //   href: "/services/training",
    // },
    // {
    //   label: "Materiovigilance",
    //   href: "/services/materiovigilance",
    // },
  ],
};

const Careers = {
  label: "Careers",
  href: "/careers",
};

const ContactUs = {
  label: "Contact Us",
  href: "/contact-us",
};

const navMenu: NavProp[] = [Services, About, Careers, ContactUs];

export { navMenu, Services, About as AboutUs, Careers, ContactUs };
