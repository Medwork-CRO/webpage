import { Inter } from "@next/font/google";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const isActive = router.asPath === href;
  const isActiveSubCategory = subCategories?.some(
    (subCategory) => subCategory.href === router.asPath
  );
  const activeClasses = isActive || isActiveSubCategory ? 'border-cyan-500 text-cyan-500' : 'border-transparent';

  return (
    <div className="relative">
      {!hasSubCategories ? (
        <Link
          className="peer flex items-center py-4 text-md text-gray-500 hover:text-cyan-500 dark:text-gray-400"
          aria-label={`By clicking you will be taken to ${label}`}
          key={href}
          href={href}
        >
          <span className={`flex items-center hover:text-cyan-500`}>
            <span className={`border-b-2 ${activeClasses}`}>{label.toUpperCase()}</span>
          </span>
        </Link>
      ) : (
        <div
          className="peer flex items-center py-4 text-md text-gray-500 hover:text-cyan-500 dark:text-gray-400"
        >
          <span className="flex hover:text-cyan-500 items-baseline">
            <span className={`border-b-2 ${activeClasses}`}>{label.toUpperCase()}</span>
            <span>{hasSubCategories && <FaAngleDown className="ml-2" />}</span>
          </span>
        </div>
      )}
      {hasSubCategories && (
        <div className="
          absolute right-0 z-10 hidden w-[200px] flex-col rounded-lg border border-gray-300 dark:border-gray-400
        bg-medwork-light text-gray-500 shadow-2xl drop-shadow-lg hover:flex peer-hover:flex dark:bg-medwork-dark dark:text-gray-400
        ">
          {subCategories.map((subCategory, i) => (
            <Link
              className={`px-4 py-4 text-md hover:bg-[#eae4dd] dark:hover:bg-gray-500
              ${router.asPath === subCategory.href ? 'bg-[#eae4dd] dark:bg-gray-500' : ''}
              ${i === 0 ? 'rounded-t-md' : ''}
              ${i === subCategories.length - 1 ? 'rounded-b-md' : ''}`}
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
    <div
      className={`${inter.variable} flex-start ml-8 flex flex-row place-items-end items-end justify-start gap-10 align-middle font-sans`}
    >
      {navMenu.nav.map((tab) => (
        <HorizontalNav
          key={tab.href}
          label={tab.label}
          href={tab.href}
          subCategories={tab.subCategories}
        />
      ))}
    </div>
  );
}

export default NavMenu;
