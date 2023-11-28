import Link from "next/link";
import { useRouter } from "next/router";

const formatBreadcrumb = (str: string) => {
    return str
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
};

const getPathForKnownRoutes = (str: string) => {
    if (str === "/home") {
        return "/";
    } else if (str === "/home/services") {
        return "";
    } else if (str === "/home/services/safety") {
        return "/services/safety";
    } else if (str === "/home/about") {
        return "";
    }
    return str;
};

const Breadcrumbs = () => {
    const { pathname } = useRouter();
    const pathnames = ["home"].concat(pathname.split("/").filter(x => x));
    const paths = pathnames.map((_name: string, idx) => "/" + pathnames.slice(0, idx + 1).join("/"));

    return (
        <div className="
            inline-flex items-center text-gray-600 dark:text-gray-300
            text-base md:text-lg
            py-2 px-4 rounded-lg
            border border-gray-300 dark:border-gray-600
            space-x-2 shadow-inner
        ">
            {pathnames.map((crumb, i) => {
                if (i === pathnames.length - 1) {
                    return <div key={i}>{formatBreadcrumb(crumb)}</div>;
                } else if (!getPathForKnownRoutes(paths[i])) {
                    return <>
                        <div key={i}>
                            {formatBreadcrumb(crumb)}
                        </div>
                        <span>/</span>
                    </>;
                } else {
                    return (
                        <>
                            <div key={i}>
                                <Link
                                    href={getPathForKnownRoutes(paths[i])}
                                    className="text-cyan-500 hover:text-cyan-400 hover:underline"
                                >
                                    {formatBreadcrumb(crumb)}
                                </Link>
                            </div>
                            <span>/</span>
                        </>
                    );
                }
            })}
        </div>
    );
};

export default Breadcrumbs;
