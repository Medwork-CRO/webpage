import Logo from "@/components/Logo";
import NavMenu, { NavProp } from "@/components/NavMenu";

const navMenu: NavProp[] = [
  {
    label: "About Us",
    href: "/about-us",
    subCategories: [
      {
        label: "Leadership",
        href: "leadership",
      },
      {
        label: "Careers",
        href: "careers",
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    subCategories: [
      {
        label: "Pharmacovigilance",
        href: "pharmacovigilance",
      },
      {
        label: "Cosmetovigilance",
        href: "cosmetovigilance",
      },
      {
        label: "Quality Management",
        href: "quality-management",
      }
    ]
  },
  {
    label: "Technology",
    href: "/technology",
    subCategories: [
      {
        label: "Compliance",
        href: "compliance",
      }
    ]
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex justify-between items-center w-full max-w-[86em] px-4 py-8 mx-auto">
        <Logo />
        <NavMenu tabs={navMenu} />
      </div>
    </header>
  );
}


