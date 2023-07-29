import React, { useState } from "react";
import InlineInfoBox, { InlineInfoBoxParams } from "./InlineInfoBox";

type Legislation = {
    name: string,
    dropDowns: InlineInfoBoxParams[]
};

const legislations: Legislation[] = [
    {
        name: "Greek Pharmacovigilance Legislation",
        dropDowns: [
            {
                title: 'Circular regarding the management and reporting of safety issues in the context of conducting clinical trials 12976 05-02-2019',
                content: "this is some contet",
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Announcement of the Department of Adverse Events / Directorate of Pharmaceutical Studies and Research on regulation regarding literature and signal management.',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Common/frequently asked questions about Pharmacovigilance of medicines for human use and Materiovigilance. ',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'National Organization for Medicines - Yellow Card',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 64745/7-7-2014',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 3a/90023, published in Government Gazette issue 2485/B/3-10-2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 70473 01-10-2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 3a/32221, published in Government Gazette issue 1049/B/29-4-2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Announcement of National Organization for Medicines 29-04-2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 82798 22-11-2012',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Announcement of National Organization for Medicines 24-10-2012',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 67585 26-09-2011',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Summary of the Obligations for Marketing Authorization Holders of Medicinal Products &amp; for Clinical Studies Sponsors',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
        ],
    },
    {
        name: "Cypriot Pharmacovigilance Legislation",
        dropDowns: [
            {
                title: 'Pharmaceutical services - Ministry of Health Circular - RMPs 02-01-2015',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Pharmaceutical services - Ministry of Health Circular - Local contact person 02-01-2015',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Circular 30-12-2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Announcement 08-07-2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Guidelines March 2013',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Announcement 04-04-2012',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Announcement 01-09-2008',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Legislation on medicinal products for human use',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
        ],
    },
    {
        name: "Greek Materiovigilance Legislation",
        dropDowns: [
            {
                title: 'Guidelines on a Medical Device Vigilance System _ revision January 13',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Summary of the Obligations for manufacturers and operators of Medical Devices / Version 1.0_April 2010',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 130648 published in Government Gazette issue 2198/02-10-2009',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 130644 published in Government Gazette issue 2197/02-10-2009',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'General Regulation on Evaluation and Certification of Quality Systems and Medical Devices November 2007',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministry of Health Circular 58308 / 05-10-2005',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Amendment to Ministerial Decision 8δ/1348, published in Government Gazette issue 1459/B/22-09-04',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 8δ/1348, published in Government Gazette issue 32/B/16-01-04',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 3607/892 published in Government Gazette issue 1060/10-08-2001',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 2048 published in Government Gazette issue 679/13-09-1994',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
            {
                title: 'Ministerial Decision 2351 published in Government Gazette issue 639/29-08-1994',
                content: '',
                filePath: '/file/file',
                fileName: 'legislation.pdf'
            },
        ],
    },
];

const LegislationTabs = () => {
    const mail = "medworkinfo@medwork.gr";
    const [openTab, setOpenTab] = React.useState(1);
    // const [openDropDown, setOpenDropDown] = useState(-1);

    return (
        <>
            <div className="flex flex-col sm:flex-row w-full">
                <div className="w-full">
                    <ul
                        className="w-full flex list-none flex-col sm:flex-row pt-3 pb-4"
                        role="tablist"
                    >
                        {legislations.map((legislation, index) => {
                            return (<li className="sm:mr-2 last:mr-0 mb-2 sm:mb-0 last:mb-0 flex-auto text-center cursor-pointer transition-all duration-500 hover:bg-cyan-300 hover:bg-opacity-25" key={index}>
                                <a
                                    className={
                                        `text-xs font-bold uppercase px-5 py-3 block border-medwork-dark dark:border-medwork-light border ${openTab === index
                                            ? "text-medwork-light dark:text-medwork-dark border-cyan-400 dark:border-cyan-400 bg-cyan-400 dark:bg-cyan-400"
                                            : "text-medwork-dark dark:text-medwork-light"}`
                                    }
                                    onClick={e => { e.preventDefault(); setOpenTab(index); /* setOpenDropDown(-1) */ }}
                                    data-toggle="tab"
                                    role="tablist"
                                >
                                    {legislation.name}
                                </a>
                            </li>);
                        })}
                    </ul>

                    <p className="text-xs text-medwork-dark dark:text-medwork-light mb-10">* For the full translation of the texts in English, please contact us at <a
                        aria-label="By clicking you will be taken to Mail"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={"mailto:" + mail}
                    >
                        {mail}
                    </a>
                    </p>

                    <div className="relative flex flex-col min-w-0 break-words">
                        <div className="flex-auto">
                            <div className="tab-content tab-space">
                                {legislations.map((legislation, legislationIndex) => {
                                    return (<div className={`${openTab === legislationIndex ? "block" : "hidden"}`} key={legislationIndex} id="link1">
                                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
                                            {legislation.dropDowns.map((link, dropDownIndex) => {
                                                return (<div key={dropDownIndex}>
                                                    <InlineInfoBox
                                                        title={link.title}
                                                        content={link.content}
                                                        filePath={link.filePath}
                                                        fileName={link.fileName}
                                                    />
                                                    {/* <DropDown
                                                        title={link.title}
                                                        content={link.content}
                                                        filePath={link.filePath}
                                                        fileName={link.fileName}
                                                        onClick={() => { setOpenDropDown(openDropDown !== dropDownIndex ? dropDownIndex : -1) }}
                                                        isOpen={openDropDown === dropDownIndex}
                                                    /> */}
                                                </div>)
                                            })}
                                        </div>
                                    </div>);
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default LegislationTabs;

