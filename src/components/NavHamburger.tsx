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
    const activeOption = isActive || isActiveSubCategory ? "text-cyan-500 dark:text-cyan-400" : "";
    const clickedOption = isClicked ? "border-blue-500" : "";
    const hasSubCategories = subCategories && subCategories.length > 0;

    return (
        <div className="transform duration-200">
            <div
                className={`
                flex items-center justify-between
                pb-4 mb-4 text-lg font-semibold
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
                        <span className={`pl-2 ${activeOption}`}>{label.toUpperCase()}</span>
                    </Link>
                )}
                {hasSubCategories && (
                    <>
                        <div className="flex items-center">
                            <span className={`pl-2 ${activeOption}`}>{label.toUpperCase()}</span>
                        </div>
                        <MdExpandMore className={`text-xl p-[2px] mr-2 text-medwork-dark dark:text-medwork-light rounded-full ${isClicked ? "rotate-0" : "rotate-180"}`} />
                    </>
                )}
            </div>
            {isClicked && hasSubCategories && (
                <div className={"flex w-[200px] flex-col border-l border-medwork-dark dark:border-medwork-light"}>
                    {subCategories.map((subCategory) => (
                        <Link
                            onClick={handleClick}
                            className="ml-2 px-5 py-3 text-md font-semibold text-medwork-dark dark:text-medwork-light"
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
        <div className="fixed inset-0 bg-medwork-light backdrop-blur-sm bg-opacity-10 z-10 overscroll-none"></div>}
            <div className={`mx-4 pb-6 flex flex-col gap-8 z-40 fixed inset-x-1 bottom-0 ${visibility}`}>
                {navHamburger.nav.map((props) => (
                    <VerticalNav key={props.href} {...props} />
                ))}
            </div>
        </>
    );
}

export default NavHamburger;
