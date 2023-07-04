import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export type NavProp = {
  label: string;
  href: string;
  subCategories?: NavProp[];
};

export type NavHamburgerProp = {
  nav: NavProp[];
};

function VerticalNav({ label, href, subCategories }: NavProp) {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const isActive = router.asPath === href;
  const isActiveSubCategory = subCategories?.some(
    (subCategory) => subCategory.href === router.asPath
  );
  const activeClasses = isActive || isActiveSubCategory ? 'border-cyan-500 text-cyan-500' : 'border-transparent';
  const hasSubCategories = subCategories && subCategories.length > 0;

  return (
    <>
      <div
        className="flex items-center justify-between text-gray-500 dark:text-gray-400 hover:text-cyan-500"
        onClick={() => setIsClicked(!isClicked)}
      >
        {!hasSubCategories && (
          <Link
            className="flex items-center py-3 text-md font-semibold lg:px-8"
            aria-label={`By clicking you will be taken to ${label}`}
            key={href}
            href={href}
          >
            <span className={`border-b-2 ${activeClasses}`}>{label.toUpperCase()}</span>
          </Link>
        )}
        {hasSubCategories && (
          <>
            <div
              className="flex items-center py-3 text-md font-semibold lg:px-8"
            >
              <span className={`border-b-2 ${activeClasses}`}>{label.toUpperCase()}</span>
            </div>
            <FaAngleDown style={{ transform: `rotate(${isClicked ? 0 : 180}deg)` }} />
          </>
        )}
      </div>
      {isClicked && hasSubCategories && (
        <div className={"flex w-[200px] flex-col"}>
          {subCategories.map((subCategory) => (
            <Link
              className="ml-2 px-5 py-3 text-md font-semibold text-gray-500 dark:text-gray-400 hover:text-cyan-500"
              aria-label={`By clicking you will be taken to ${subCategory.label}`}
              key={subCategory.href}
              href={subCategory.href}
            >
              {subCategory.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function NavHamburger(navHamburger: NavHamburgerProp & { isOpen: boolean }) {
  const visibility = navHamburger.isOpen ? "block" : "hidden";

  return (
    <div className={`mx-6 mb-2 flex flex-col fixed inset-x-0 bottom-0 ${visibility}`}>
      {navHamburger.nav.map((props) => (
        <VerticalNav key={props.href} {...props} />
      ))}
    </div>
  );
}

export default NavHamburger;
