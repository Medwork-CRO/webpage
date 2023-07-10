import Link from "next/link";
import { ReactNode } from "react";

type CrumbItem = {
    label: ReactNode; // e.g., Python
    path: string; // e.g., /development/programming-languages/python
};

type BreadcrumbsProps = {
    items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <div className="flex gap-2 items-center place-self-start mb-4 ml-4 sm:ml-0 text-gray-500 dark:text-gray-400">
            {items.map((crumb, i) => {
                const isLastItem = i === items.length - 1;
                if (isLastItem) {
                    return crumb.label;
                } else if (!crumb.path) {
                    return <>
                        {crumb.label}
                        <span> / </span>
                    </>;
                } else {
                    return (
                        <>
                            <Link
                                href={crumb.path}
                                key={i}
                                className="text-cyan-500 hover:text-cyan-400 hover:underline"
                            >
                                {crumb.label}
                            </Link>
                            <span> / </span>
                        </>
                    );
                }
            })}
        </div>
    );
};
export default Breadcrumbs;
