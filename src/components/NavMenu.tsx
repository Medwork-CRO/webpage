import { useState } from 'react';
import { Inter } from '@next/font/google';
import { FaAngleDown } from '@react-icons/all-files/fa/FaAngleDown';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

  return (
    <div className="relative">
      <div
        tabIndex={0}
        className="peer flex items-center py-4 text-lg text-gray-600 hover:text-cyan-500 dark:text-gray-400"
        onKeyDown={hasSubCategories ? handleKeyDown : undefined}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className={`flex items-center hover:text-cyan-500`}>
          <div className={`border-b-2 ${activeClasses}`}>{label.toUpperCase()}</div>
          {hasSubCategories && <FaAngleDown className="ml-2" />}
        </div>
      </div>

      {hasSubCategories && isOpen && (
        <div className="
          flex flex-col w-[220px] absolute right-0 z-10 rounded-sm border border-gray-300 dark:border-gray-400
          bg-medwork-light text-gray-600 shadow-2xl drop-shadow-lg dark:bg-medwork-dark dark:text-gray-400
          "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {subCategories.map((subCategory, i) => (
            <Link
              tabIndex={0}
              className={`px-4 py-4 text-lg hover:bg-[#eae4dd] dark:hover:bg-gray-500
              ${router.asPath === subCategory.href ? 'bg-[#eae4dd] dark:bg-gray-500' : ''}
              ${i === 0 ? 'rounded-t-sm' : ''}
              ${i === subCategories.length - 1 ? 'rounded-b-sm' : ''}`}
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
