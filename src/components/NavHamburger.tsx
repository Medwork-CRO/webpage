import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import Link from "next/link";
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
  
  const hasSubCategories = subCategories && subCategories.length > 0;

  return (
    <>
      <span className="flex items-center justify-between text-gray-500 hover:text-cyan-500">
        <Link
          className={`flex items-center py-4  text-sm lg:px-8`}
          aria-label={`By clicking you will be taken to ${label}`}
          key={href}
          href={href}
        >
          {label.toUpperCase()}
        </Link>
        {hasSubCategories && (
          <FaAngleDown
            className="ml-2"
            onClick={() => setIsClicked(!isClicked)}
          />
        )}
      </span>
      {isClicked && hasSubCategories && (
        <div className={"flex w-[200px] flex-col "}>
          {subCategories.map((subCategory) => (
            <Link
              className="ml-2 px-5 py-3 text-sm text-gray-500 hover:text-cyan-500"
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
  return (
    <div className={`mx-6 ${navHamburger.isOpen ? "block" : "hidden"}`}>
      {navHamburger.nav.map((props) => (
        <VerticalNav key={props.href} {...props} />
      ))}
    </div>
  );
}

export default NavHamburger;
