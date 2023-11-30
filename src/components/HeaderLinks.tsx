import { NavProp } from "./NavHamburger";

const AboutUs = {
    label: "About Us",
    href: "/about-us",
    // subCategories: [
    //   {
    //     label: "Company",
    //     href: "/about-us/company",
    //   },
    //   {
    //     label: "Legislation",
    //     href: "/about-us/legislation",
    //   },
    // ],
};

const Services = {
    label: "Services",
    href: "/services",
    subCategories: [
        {
            label: "Safety",
            href: "/services/safety",
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

const navMenu: NavProp[] = [Services, AboutUs, Careers, ContactUs];

export { navMenu, Services, AboutUs, Careers, ContactUs };
