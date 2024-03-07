import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { MdExpandMore } from "react-icons/md";

export type NavProp = {
  label: string;
  href: string;
  subCategories?: NavProp[];
};

export type NavMenuProp = {
  nav: NavProp[];
};

function HorizontalNav({ label, href, subCategories }: NavProp) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const hasSubCategories = subCategories && subCategories.length > 0;
    const router = useRouter();
    const isActive = router.asPath === href;
    const isActiveSubCategory = subCategories?.some((subCategory) => subCategory.href === router.asPath);
    const activeClasses = isActive || isActiveSubCategory ? "border-blue-500 text-blue-500" : "border-transparent";

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.code === "Enter") {
            setIsOpen(!isOpen);
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
        const currentTarget = event.currentTarget;
        setTimeout(() => {
            if (!currentTarget.contains(document.activeElement)) {
                setIsOpen(false);
            }
        }, 0);
    };

    return (
        <div className="relative py-2 text-gray-600 dark:text-gray-400" ref={menuRef} onBlur={handleBlur}>
            {hasSubCategories &&
                <div
                    tabIndex={0}
                    className={`
                        peer flex items-center py-2 font-normal narrow-letters
                        text-xl hover:text-blue-500 focus-visible:text-blue-500
                        border-b-2 ${activeClasses}
                    `}
                    onKeyDown={hasSubCategories ? handleKeyDown : undefined}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {label.toUpperCase()}<MdExpandMore className="ml-2 "/>
                </div>
            }
            {!hasSubCategories &&
                <Link
                    tabIndex={0}
                    className={`
                        peer flex items-center py-2 font-normal narrow-letters
                        text-xl hover:text-blue-500 focus-visible:text-blue-500
                        border-b-2 ${activeClasses}
                    `}
                    key={href}
                    href={href}
                >
                    {label.toUpperCase()}
                </Link>
            }
            {hasSubCategories && isOpen && (
                <div
                    className="
                        absolute flex flex-col w-[220px]
                        right-0 z-10 rounded-md
                        shadow-2xl drop-shadow-lg
                        text-lg font-normal narrow-letters
                        border border-gray-300 dark:border-gray-400
                        bg-medwork-light dark:bg-medwork-dark
                    "
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {subCategories.map((subCategory, i) => (
                        <Link
                            tabIndex={0}
                            className={`
                                cursor-pointer
                                px-4 py-4 text-lg
                                hover:text-blue-500 focus-visible:text-blue-500
                                focus-visible:bg-[#eae4dd] dark:focus-visible:bg-gray-500
                                ${router.asPath === subCategory.href ? "border-l-[3px] border-blue-500" : ""}
                                ${i === 0 ? "rounded-t-sm" : ""}
                                ${i === subCategories.length - 1 ? "rounded-b-sm" : ""}`}
                            key={subCategory.href}
                            href={subCategory.href}
                            onClick={closeMenu}
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
            className="flex-start ml-8 flex flex-row place-items-end items-end justify-start gap-10 align-middle font-sans"
        >
            <a
                href="#main-content"
                className="
                    sr-only focus:not-sr-only
                    absolute top-0 left-0 m-4 p-2 z-50
                    bg-medwork-dark text-medwork-light
                    dark:bg-medwork-light dark:text-medwork-dark
                "
            >
                Skip to Main Content
            </a>

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
