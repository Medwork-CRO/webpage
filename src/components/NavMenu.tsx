import { Inter } from "@next/font/google";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export type NavProp = {
    label: string;
    href: string;
    subCategories?: NavProp[];
};

export type NavMenuProp = {
    tabs: NavProp[];
};

function Nav({ label, href, subCategories }: NavProp) {
    const hasSubCategories = subCategories && subCategories.length > 0;

    return (
        <div className="relative">
            <Link
                className={`peer lg:px-8 py-4 text-gray-700 hover:text-cyan-500 flex items-center`}
                aria-label={`By clicking you will be taken to ${label}`}
                href={href}
            >
                <span className="flex items-center hover:text-cyan-500">
                    {label} {hasSubCategories && <FaAngleDown className="ml-2" />}
                </span>
            </Link>
            {hasSubCategories && (
                <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg absolute z-10 shadow-md border-t-2 border-cyan-500 right-0">
                    {subCategories.map((subCategory) => (
                        <a key={subCategory.href} className="px-5 py-3 hover:bg-gray-200" href={subCategory.href}>
                            {subCategory.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function NavMenu(navMenu: NavMenuProp) {
    return (
        <div className="flex justify-end items-center">
            <div className={`${inter.variable} flex-start flex flex-row items-end justify-start gap-10 align-middle font-sans`}           >
                {navMenu.tabs.map((tab) => (
                    <Nav key={tab.href} label={tab.label} href={tab.href} subCategories={tab.subCategories} />
                ))}
            </div>
        </div>
    );
}