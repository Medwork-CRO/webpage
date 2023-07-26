import Link from "next/link";
import { useRouter } from "next/router";

const formatBreadcrumb = (str: string) => {
    return str.replace(/-/g, ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
};

const getPathForKnownRoutes = (str: string) => {
    if (str === '/home') {
        return '/';
    } else if (str === '/home/services') {
        return '';
    } else if (str === '/home/about') {
        return '';
    }
    return str;
};

const Breadcrumbs = () => {
    const { pathname } = useRouter();
    const pathnames = ['home'].concat(pathname.split("/").filter(x => x));
    const paths = pathnames.map((name, idx) => '/' + pathnames.slice(0, idx + 1).join('/'));

    return (
        <div className="flex gap-2 my-4 ml-4 sm:ml-6 lg:ml-0 text-gray-500 dark:text-gray-400 text-lg">
            {pathnames.map((crumb, i) => {
                if (i === pathnames.length - 1) {
                    return <div key={i}>{formatBreadcrumb(crumb)}</div>;
                } else if (!getPathForKnownRoutes(paths[i])) {
                    return <div key={i}>{formatBreadcrumb(crumb)}<span> / </span></div>;
                } else {
                    return (
                        <div key={i}>
                            <Link
                                href={getPathForKnownRoutes(paths[i])}
                                className="text-cyan-500 hover:text-cyan-400 hover:underline"
                            >
                                {formatBreadcrumb(crumb)}
                            </Link>
                            <span> / </span>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Breadcrumbs;
