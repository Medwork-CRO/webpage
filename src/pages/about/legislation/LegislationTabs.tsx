import React from "react";
import Faq from "react-faq-component";

const legislations = [
    {
        name: "Greek Pharmacovigilance Legislation",
        faqs: [
            {
                title: "Circular regarding the management and reporting of safety issues in the context of conducting clinical trials 12976 05-02-2019",
                content: ""
            },
            {
                title: "Announcement of the Department of Adverse Events / Directorate of Pharmaceutical Studies and Research on regulation regarding literature and signal management.",
                content: ""
            },
            {
                title: "Common/frequently asked questions about Pharmacovigilance of medicines for human use and Materiovigilance. ",
                content: ""
            },
            {
                title: "National Organization for Medicines - Yellow Card",
                content: ""
            },
            {
                title: "National Organization for Medicines Circular 64745/7-7-2014",
                content: ""
            },
            {
                title: "Ministerial Decision 3a/90023, published in Government Gazette issue 2485/B/3-10-2013",
                content: ""
            },
            {
                title: "National Organization for Medicines Circular 70473 01-10-2013",
                content: ""
            },
            {
                title: "Ministerial Decision 3a/32221, published in Government Gazette issue 1049/B/29-4-2013",
                content: ""
            },
            {
                title: "Announcement of National Organization for Medicines 29-04-2013",
                content: ""
            },
            {
                title: "National Organization for Medicines Circular 82798 22-11-2012",
                content: ""
            },
            {
                title: "Announcement of National Organization for Medicines 24-10-2012",
                content: ""
            },
            {
                title: "National Organization for Medicines Circular 67585 26-09-2011",
                content: ""
            },
            {
                title: "Summary of the Obligations for Marketing Authorization Holders of Medicinal Products &amp; for Clinical Studies Sponsors",
                content: ""
            },
        ],
    },
    {
        name: "Cypriot Pharmacovigilance Legislation",
        faqs: [
            {
                title: '',
                faq: ''
            }
        ],
    },
    {
        name: "Greek Materiovigilance Legislation",
        faqs: [
            {
                title: '',
                faq: ''
            }
        ],
    },
];

const LegislationTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        {legislations.map((legislation, index) => {
                            return (<li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={index}>
                                <a
                                    className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === index
                                            ? "text-medwork-dark dark:text-medwork-light bg-cyan-600"
                                            : "text-blueGray-600 bg-medwork-light dark:bg-medwork-dark")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(index);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    {legislation.name}
                                </a>
                            </li>);
                        })}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-medwork-light dark:bg-medwork-dark w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {legislations.map((legislation, index) => {
                                    return (<div className={`${openTab === index ? "block" : "hidden"}`} key={index} id="link1">
                                        <div className="flex flex-col gap-4">
                                            <Faq data={legislation.faqs} />
                                            {/* {legislation.faqs.map((link, index) => { return (<li key={index}><a href={link.link}>{link.title}</a></li>); })} */}
                                        </div>
                                    </div>);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LegislationTabs;

