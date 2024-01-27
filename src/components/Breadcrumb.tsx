import { infoBoxes as safetyInfoBoxes } from "@/pages/services/safety";
import { infoBoxes as qualityAssuranceInfoBoxes } from "@/pages/services/quality-assurance";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdExpandMore } from "react-icons/md";
import { InfoBoxAttributes } from "./InfoBoxMatrix";

const SERVICES = ["safety", "quality-assurance"];

function hoverList(list: {link: string, title: string}[]) {
    return (<div className="
        hidden group-hover/item:block z-50 absolute
        border border-gray-300 dark:border-gray-600
        bg-medwork-light dark:bg-medwork-dark
        p-4 rounded-md shadow-2xl drop-shadow-lg
    ">
        <div className="flex flex-col gap-2">
            {list.map((item, i) => {
                console.log("item.title :>> ", item.title);
                return (
                    <React.Fragment key={i}>
                        <Link
                            href={item.link}
                            className="hover:text-blue-400"
                        >
                            {item.title}
                        </Link>
                    </React.Fragment>
                );
            })}
        </div>
    </div>);
}

function servicesPerCategory(service: string) {
    let infoBoxes: InfoBoxAttributes[] = [];

    if (service === SERVICES[0]) {
        infoBoxes = safetyInfoBoxes;
    } else if (service === SERVICES[1]) {
        infoBoxes = qualityAssuranceInfoBoxes;
    }

    return hoverList(infoBoxes);
}

function services() {
    const list: {link: string, title: string}[] = [{
        link: "/services/safety",
        title: "Safety",
    },{
        link: "/services/quality-assurance",
        title: "Quality Assurance",
    },{
        link: "/services/outsourcing",
        title: "Outsourcing",
    }];

    return hoverList(list);
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

    return (
        <div className="
            inline-flex px-4 pb-2  mb-4 sm:px-6 lg:px-0 space-x-2
            text-gray-600 dark:text-gray-300 md:text-lg text-base
        ">
            {pathNames.map((crumb, i) => {
                if (i === pathNames.length - 1) {
                    return <div key={i}>{formatBreadcrumb(crumb)}</div>;
                } else if (!pathSanitisation(paths[i]).valid) {
                    return  <React.Fragment key={i}>
                        <div className="group/item">
                            <div className="flex flex-row items-center">
                                <div>{formatBreadcrumb(crumb)}</div>
                                {crumb === "services" && <MdExpandMore className="ml-1"/>}
                                <span>/</span>
                            </div>
                            {crumb === "services" && services()}
                        </div>
                    </React.Fragment>;
                } else {
                    return (
                        <React.Fragment key={i}>
                            <div className="group/item">
                                <div className="flex flex-row items-center">
                                    <Link
                                        href={pathSanitisation(paths[i]).path}
                                        className="hover:text-blue-400"
                                    >
                                        {formatBreadcrumb(crumb)}
                                    </Link>
                                    {SERVICES.includes(crumb) && <MdExpandMore className="ml-1"/>}
                                </div>
                                {SERVICES.includes(crumb) && servicesPerCategory(crumb)}
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
