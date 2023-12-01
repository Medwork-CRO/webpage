import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function formatBreadcrumb(input: string) {
    return input
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ");
}

function pathSanitisation(input: string): { valid: boolean; path: string } {
    const nonExistentPaths = ["/home/services", "/home/about-us"];

    if (nonExistentPaths.includes(input)) {
        return {
            valid: false,
            path: "",
        };
    }

    return {
        valid: true,
        path: input.replace("/home", "/"),
    };
}

function pathBeautifier(input: string): string {
    const wordsToUppercase = ["pv", "qppv", "mlm", "cro", "gvp"];

    return input.split("-").map(word => {
        if (wordsToUppercase.includes(word.toLowerCase())) {
            return word.toUpperCase();
        }
        return word;
    }).join("-");
}

const Breadcrumbs = () => {
    const { pathname } = useRouter();

    let pathNames = ["home"].concat(pathname.split("/").filter(x => !!x));
    const paths = pathNames.map((_name: string, idx) => "/" + pathNames.slice(0, idx + 1).join("/"));
    pathNames = pathNames.map(pathBeautifier);

    return (
        <div className="
            inline-flex text-gray-600 dark:text-gray-300 md:text-lg text-base
            px-4 sm:px-6 lg:px-0 space-x-2
        ">
            {pathNames.map((crumb, i) => {
                if (i === pathNames.length - 1) {
                    return <div key={i}>{formatBreadcrumb(crumb)}</div>;
                } else if (!pathSanitisation(paths[i]).valid) {
                    return  <React.Fragment key={i}>
                        <div>{formatBreadcrumb(crumb)}</div>
                        <span>/</span>
                    </React.Fragment>;
                } else {
                    return (
                        <React.Fragment key={i}>
                            <div>
                                <Link
                                    href={pathSanitisation(paths[i]).path}
                                    className="text-blue-500 hover:text-blue-400 hover:underline"
                                >
                                    {formatBreadcrumb(crumb)}
                                </Link>
                            </div>
                            <span>/</span>
                        </React.Fragment>
                    );
                }
            })}
        </div>
    );
};

export default Breadcrumbs;
