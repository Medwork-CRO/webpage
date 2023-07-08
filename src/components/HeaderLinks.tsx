import { NavProp } from "./NavHamburger";

const AboutUs = {
  label: "About Us",
  href: "/about-us",
};

const Services = {
  label: "Services",
  href: "/services",
  subCategories: [
    {
      label: "Pharmacovigilance",
      href: "/services/pharmacovigilance",
    },
    {
      label: "Outsourcing",
      href: "/services/outsourcing",
    },
    {
      label: "Cosmetovigilance",
      href: "/services/cosmetovigilance",
    },
    {
      label: "Quality Management",
      href: "/services/quality-management",
    },
    {
      label: "Training",
      href: "/services/training",
    },
    {
      label: "Materiovigilance",
      href: "/services/materiovigilance",
    },
  ],
};

const People = {
  label: "People",
  href: "/people",
};

const Careers = {
  label: "Careers",
  href: "/careers",
};

const ContactUs = {
  label: "Contact Us",
  href: "/contact-us",
};

const navMenu: NavProp[] = [Services, People, AboutUs, Careers, ContactUs];

export { navMenu, Services, People, AboutUs, Careers, ContactUs };
