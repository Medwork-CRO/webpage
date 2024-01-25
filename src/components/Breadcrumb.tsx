import { infoBoxes as safetyInfoBoxes } from "@/pages/services/safety";
import { infoBoxes as qualityAssuranceInfoBoxes } from "@/pages/services/quality-assurance";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { InfoBoxAttributes } from "./InfoBoxMatrix";

const SERVICES = ["safety", "quality-assurance"];

function SafetyServices(service: string) {
    let infoBoxes: InfoBoxAttributes[] = [];

    if (service === "safety") {
        infoBoxes = safetyInfoBoxes;
    } else if (service === "quality-assurance") {
        infoBoxes = qualityAssuranceInfoBoxes;
    }

    return infoBoxes.map((infoBox, i) => {
        return (
            <React.Fragment key={i}>
                <div>
                    <Link
                        href={infoBox.link}
                        className="text-blue-500 hover:text-blue-400 hover:underline"
                    >
                        {infoBox.title}
                    </Link>
                </div>
            </React.Fragment>
        );
    });
}

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
    const wordsToUppercase = ["pv", "qppv", "mlm", "cro", "gvp", "qa"];

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
    console.log("pathNames :>> ", pathNames);
    return (
        <div className="
            inline-flex px-4 sm:px-6 lg:px-0 space-x-2
            text-gray-600 dark:text-gray-300 md:text-lg text-base
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
                            <div className="group/item">
                                <div className="flex flex-row items-center">
                                    <Link
                                        href={pathSanitisation(paths[i]).path}
                                        className="text-blue-500 hover:text-blue-400 hover:underline"
                                    >
                                        {formatBreadcrumb(crumb)}
                                    </Link>
                                    {SERVICES.includes(crumb) && <MdExpandMore className="ml-2 "/>}
                                </div>
                                {SERVICES.includes(crumb) && <div className="
                                    hidden group-hover/item:block z-50 absolute
                                    border border-gray-300 dark:border-gray-400
                                    bg-medwork-light dark:bg-medwork-dark
                                    p-4 rounded-md shadow-2xl drop-shadow-lg
                                ">
                                    {SafetyServices(crumb)}
                                </div>}
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
