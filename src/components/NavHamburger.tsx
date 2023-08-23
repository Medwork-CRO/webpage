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

  const handleClick = () => {
    setIsClicked(false);
  };

  const isActive = router.asPath === href;
  const isActiveSubCategory = subCategories?.some(
    (subCategory) => subCategory.href === router.asPath
  );
  const activeClasses = isActive || isActiveSubCategory ? 'border-cyan-500 text-cyan-500' : 'border-transparent';
  const hasSubCategories = subCategories && subCategories.length > 0;

  return (
    <div className="transform duration-200">
      <div
        className="flex items-center justify-between text-cyan-800 dark:text-cyan-400 hover:text-cyan-500 border-b-2 border-medwork-dark dark:border-medwork-light"
        onClick={() => setIsClicked(!isClicked)}
      >
        {!hasSubCategories && (
          <Link
            onClick={handleClick}
            className="flex items-center py-3 text-md font-semibold lg:px-8"
            aria-label={`By clicking you will be taken to ${label}`}
            key={href}
            href={href}
          >
            <span className={`border-l-2 pl-2 ${activeClasses}`}>{label.toUpperCase()}</span>
          </Link>
        )}
        {hasSubCategories && (
          <>
            <div
              className="flex items-center py-3 text-md font-semibold lg:px-8"
            >
              <span className={`border-l-2 pl-2 ${activeClasses}`}>{label.toUpperCase()}</span>
            </div>
            <FaAngleDown className={`text-xl p-[2px] text-medwork-dark dark:text-medwork-light rounded-full ${isClicked ? 'rotate-0' : 'rotate-180'}`} />
          </>
        )}
      </div>
      {isClicked && hasSubCategories && (
        <div className={"flex w-[200px] flex-col"}>
          {subCategories.map((subCategory) => (
            <Link
              onClick={handleClick}
              className="ml-2 px-5 py-3 text-md font-semibold text-cyan-800 dark:text-cyan-400 hover:text-cyan-500"
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

function NavHamburger(navHamburger: NavHamburgerProp & { isOpen: boolean }) {
  const visibility = navHamburger.isOpen ? "translate-y-0" : "translate-y-full";

  return (
    <>
      {navHamburger.isOpen &&
        <div className="fixed inset-0 bg-gray-400 backdrop-blur-sm bg-opacity-40 z-10"></div>}
      <div className={`mx-6 mb-4 flex flex-col fixed inset-x-1 bottom-0 transform duration-200 ${visibility} z-20`}>
        {navHamburger.nav.map((props) => (
          <VerticalNav key={props.href} {...props} />
        ))}
      </div>
    </>
  );
}

export default NavHamburger;
