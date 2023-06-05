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
    nav: NavProp[];
};

function HorizontalNav({ label, href, subCategories }: NavProp) {
    const hasSubCategories = subCategories && subCategories.length > 0;

    return (
        <div className="relative">
            <Link
                className={`peer py-4 text-sm text-gray-500 hover:text-cyan-500 flex items-center`}
                aria-label={`By clicking you will be taken to ${label}`}
                key={href}
                href={href}
            >
                <span className="flex items-center hover:text-cyan-500">
                    {label.toUpperCase()} {hasSubCategories && <FaAngleDown className="ml-2" />}
                </span>
            </Link>
            {hasSubCategories && (
                <div className="absolute z-10 hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg shadow-md border-t-2 border-cyan-500 right-0">
                    {subCategories.map((subCategory) => (
                        <Link
                            className="px-5 py-3 text-sm hover:bg-gray-200"
                            aria-label={`By clicking you will be taken to ${subCategory.label}`}
                            key={subCategory.href}
                            href={subCategory.href}
                        >
                            {subCategory.label.toUpperCase()}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

function NavMenu(navMenu: NavMenuProp) {
    return (
        <div className={`${inter.variable} flex-start flex flex-row place-items-end items-end justify-start gap-10 align-middle font-sans mx-8`}>
            {navMenu.nav.map((tab) => (
                <HorizontalNav key={tab.href} label={tab.label} href={tab.href} subCategories={tab.subCategories} />
            ))}
        </div>
    );
}

export default NavMenu;