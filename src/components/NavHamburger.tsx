import { MdExpandMore } from "react-icons/md";
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
  const activeOption =
    isActive || isActiveSubCategory ? "text-blue-500 dark:text-blue-400" : "";
  const clickedOption = isClicked ? "border-blue-500" : "";
  const hasSubCategories = subCategories && subCategories.length > 0;

  return (
    <div
      className="
            transform duration-200
        "
    >
      <div
        className={`
                flex items-center justify-between
                mb-2
                text-lg font-semibold
                text-medwork-dark dark:text-medwork-light
                ${clickedOption}
                `}
        onClick={() => setIsClicked(!isClicked)}
      >
        {!hasSubCategories && (
          <Link
            onClick={handleClick}
            className="flex items-center"
            aria-label={`By clicking you will be taken to ${label}`}
            key={href}
            href={href}
          >
            <span className={`pl-2 ${activeOption}`}>
              {label.toUpperCase()}
            </span>
          </Link>
        )}
        {hasSubCategories && (
          <>
            <div className="flex items-center">
              <span className={`pl-2 ${activeOption}`}>
                {label.toUpperCase()}
              </span>
            </div>
            <MdExpandMore
              className={`text-xl mr-2 text-medwork-dark dark:text-medwork-light rounded-full ${isClicked ? "rotate-180" : "rotate-0"}`}
            />
          </>
        )}
      </div>
      {isClicked && hasSubCategories && (
        <div
          className="
                    flex flex-col
                    ml-2 pt-8 pl-6 gap-8
                    border-l border-medwork-dark dark:border-medwork-light
                "
        >
          {subCategories.map((subCategory) => (
            <Link
              onClick={handleClick}
              className="text-lg font-semibold text-medwork-dark dark:text-medwork-light"
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
      {navHamburger.isOpen && (
        <div className="fixed inset-0 bg-medwork-light backdrop-blur-sm bg-opacity-10 z-10 overscroll-none"></div>
      )}
      <div
        aria-label="Menu"
        className={`
                    flex flex-col
                    mx-4 px-4 pb-6
                    border-l border-medwork-dark dark:border-medwork-light
                    gap-12 z-40
                    fixed inset-x-1 bottom-0
                    ${visibility}
                `}
      >
        {navHamburger.nav.map((props) => (
          <VerticalNav key={props.href} {...props} />
        ))}
      </div>
    </>
  );
}

export default NavHamburger;
