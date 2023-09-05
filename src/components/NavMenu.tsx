import { useState } from 'react';
import { Inter } from '@next/font/google';
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hasSubCategories = subCategories && subCategories.length > 0;
  const router = useRouter();
  const isActive = router.asPath === href;
  const isActiveSubCategory = subCategories?.some(
    (subCategory) => subCategory.href === router.asPath
  );
  const activeClasses = isActive || isActiveSubCategory ? 'border-cyan-500 text-cyan-500' : 'border-transparent';

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.code === 'Enter') {
      setIsOpen(!isOpen);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleBlur = (event: any) => {
    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 0);
  };

  return (
    <div className="relative py-2" ref={menuRef} onBlur={handleBlur}>
      {hasSubCategories &&
        <div tabIndex={0} className={`
        peer flex items-center py-2
        text-xl text-gray-600 dark:text-gray-400
        hover:text-cyan-500 focus-visible:text-cyan-500
        border-b-2 ${activeClasses}
        `}
        onKeyDown={hasSubCategories ? handleKeyDown : undefined}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        >{label.toUpperCase()}<FaAngleDown className="ml-2 " /></div>
      }
      {!hasSubCategories &&
        <Link
          tabIndex={0}
          className={`
          peer flex items-center py-2
          text-xl text-gray-600 dark:text-gray-400
          hover:text-cyan-500 focus-visible:text-cyan-500
          border-b-2 ${activeClasses}
          `}
          key={href}
          href={href}
        >
            {label.toUpperCase()}
        </Link>
      }
      {hasSubCategories && isOpen && (
        <div className="
          absolute flex flex-col gap-2 w-[220px] right-0 z-10 rounded-sm
          border border-gray-300 dark:border-gray-400
          bg-medwork-light text-gray-600 shadow-2xl drop-shadow-lg dark:bg-medwork-dark dark:text-gray-400
          "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {subCategories.map((subCategory, i) => (
            <Link
              tabIndex={0}
              className={`
              cursor-pointer
              px-4 py-4 text-xl
              hover:bg-[#eae4dd] dark:hover:bg-gray-500
              focus-visible:bg-[#eae4dd] dark:focus-visible:bg-gray-500
              ${router.asPath === subCategory.href ? 'bg-[#c5b8aa] dark:bg-gray-600' : ''}
              ${i === 0 ? 'rounded-t-sm' : ''}
              ${i === subCategories.length - 1 ? 'rounded-b-sm' : ''}`}
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
      className={`${inter.variable} flex-start ml-8 flex flex-row place-items-end items-end justify-start gap-10 align-middle font-sans`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 m-4 p-2 z-50 bg-medwork-dark text-medwork-light dark:bg-medwork-light dark:text-medwork-dark"
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
