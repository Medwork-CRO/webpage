import React, { useEffect, useState } from 'react';
import InlineInfoBox, { InlineInfoBoxParams } from "./InlineInfoBox";

type Legislation = {
    name: string,
    dropDowns: InlineInfoBoxParams[]
};

const MedworkInfoMail = "medworkinfo@medwork.gr";

const legislations: Legislation[] = [
    {
        name: "Greek Pharmacovigilance Legislation",
        dropDowns: [
            {
                title: 'Circular regarding the management and reporting of safety issues in the context of conducting clinical trials 12976 05-02-2019',
                content: "",
                filePath: 'pdfs/legislation/',
                fileNameGR: '190205_ _ T _12976_05-02-2019.pdf'
            },
            {
                title: 'Announcement of the Department of Adverse Events / Directorate of Pharmaceutical Studies and Research on regulation regarding literature and signal management.',
                content: '(Version 2/07.03.2018).',
                filePath: 'pdfs/legislation/',
                fileNameGR: '07.03.2018 evlit- signal-final update.pdf'
            },
            {
                title: 'Common/frequently asked questions about Pharmacovigilance of medicines for human use and Materiovigilance.',
                content: '(Version 1.1/12.03.2018)',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'QA_final_TAE_2018.pdf'
            },
            {
                title: 'National Organization for Medicines - Yellow Card',
                content: 'The “Yellow Card” is used to collect information on adverse drug reactions. Healthcare professionals and patients can use it to report adverse drug reactions to the National Organization for Medicines (EOF). It can be sent via fax or regular mail. Alternatively, adverse drug reactions may be reported electronically via EOF\'s site. For more information see here: https://www.eof.gr/web/guest/yellowgeneral.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'KITRINI_KARTA.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 64745/7-7-2014',
                content: 'Circular providing clarifications regarding local requirements for the management and reporting of safety information arising from clinical trials. A short description of the obligations of the investigators and the sponsors is included. Relevant requirements previously mentioned in Circular 10301/11-2-2010 are superseded by the requirements set within this Circular.',
                filePath: 'pdfs/legislation/',
                fileNameGR: '_Safety for CTs_64745_7-7-2014.pdf'
            },
            {
                title: 'Ministerial Decision 3a/90023, published in Government Gazette issue 2485/B/3-10-2013',
                content: 'Transposition of Directive 2012/26/EU of the European Parliament and of the Council of 25 October 2012 into Greek law, amending Directive 2001/83/EC as regards pharmacovigilance. It applies in conjunction with the “Ministerial Decision No. 3a/G.P. 32221/29-4-2013.”',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Government Gazette_2485_B_03102013_GR.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 70473 01-10-2013',
                content: 'Requirement to add: (a) specific text regarding ADR reporting in SmPC and PIL; (b) a black triangle in SmPC and PIL; and (c) specific text in educational material that is part of RMPs in order to promote ADR reporting by HCPs and consumers.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Circular_70473_GR.pdf'
            },
            {
                title: 'Ministerial Decision 3a/32221, published in Government Gazette issue 1049/B/29-4-2013',
                content: 'Transposition of EU Directive 2001/83/EC into Greek law, concerning the production and the marketing of medicinal products for human use, as applicable and as amended by the EU Directive 2011/62 regarding the prevention of falsified medicines in the legal supply chain (L 174/1.7.2011).',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Government Gazette_1049_B_29042013_GR.pdf'
            },
            {
                title: 'Announcement of National Organization for Medicines 29-04-2013',
                content: 'Announcement of the National Organization for Medicines on the text that will appear on the promotional material for the reporting of adverse events (Yellow Box).',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'ADR_Yellow_Box.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 82798 22-11-2012',
                content: 'Circular referring a) to the type of non-interventional trials that will require the approval of the National Organization for Medicines and b) to the supporting documents that need to be attached to the dossier of the study that is sent for approval.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Circular_82798_National Organization for Medicines_GR.pdf'
            },
            {
                title: 'Announcement of National Organization for Medicines 24-10-2012',
                content: 'Announcement of the National Organization for Medicines regarding the obligation of MAHs to acknowledge the electronic receipt of ICSRs sent by the National Organization for Medicines.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'EOF_Announcement regarding ICSRs acknowledgement receipt_GR.pdf'
            },
            {
                title: 'National Organization for Medicines Circular 67585 26-09-2011',
                content: 'Electronic reporting requirements for Suspected Unexpected Serious Adverse Reactions (SUSAR) from interventional clinical trials and for spontaneous reports, reports from non-interventional studies or others, including requirements for submission of literature articles to the National Organization for Medicines.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Circular_67585_National Organization for Medicines_26092011_GR.pdf',
                fileNameEN: 'Circular_67585_National Organization for Medicines_26092011_EN.pdf'
            },
            {
                title: 'Summary of the Obligations for Marketing Authorization Holders of Medicinal Products & for Clinical Studies Sponsors',
                content: 'Brief description of the pharmacovigilance obligations under "Volume 9A of the Rules Governing Medicinal Products in the European Union - Guidelines on Pharmacovigilance for Medicinal Products for Human Use". The majority of the text is no longer valid due to the application of the GVP Modules; however, some sections still remain effective.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Summary_GR.pdf',
                fileNameEN: 'Summary_EN.pdf'
            },
        ],
    },
    {
        name: "Cypriot Pharmacovigilance Legislation",
        dropDowns: [
            {
                title: 'Pharmaceutical services - Ministry of Health Circular - RMPs 02-01-2015',
                content: 'Local requirements regarding the submission of Risk Management Plans (RMP) and Risk Minimisation Measures (RMM)',
                filePath: 'pdfs/legislation/',
                fileNameGR_EN: 'Pharmaceutical services - Ministry of Health Circular - RMPs 02-01-2015.pdf'
            },
            {
                title: 'Pharmaceutical services - Ministry of Health Circular - Local contact person 02-01-2015',
                content: 'Requirements for local QPPV/RPPV',
                filePath: 'pdfs/legislation/',
                fileNameGR_EN: 'Pharmaceutical services - Ministry of Health Circular - Local contact person 02-01-2015.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Circular 30-12-2013',
                content: 'Persons in charge of Pharmacovigilance issues - Drug Regulatory Sector, Pharmaceutical Services.',
                filePath: 'pdfs/legislation/',
                fileNameGR_EN: 'Circular_30-12-2013.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Announcement 08-07-2013',
                content: 'Amendments to the standard texts of the medicinal product information (SPC PILS) as a result of the new legislation on Pharmacovigilance.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Announcement_08-07-2013.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Guidelines March 2013',
                content: 'Guidance to Marketing Authorisation Holders (MAH) on the new Pharmacovigilance (PV) Legislation.',
                filePath: 'pdfs/legislation/',
                fileNameEN: 'Guidelines_March2013.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Announcement 04-04-2012',
                content: 'Amended procedure concerning the electronic reporting requirements of adverse reactions (ICSRs and SUSARS) to the Cypriot Competent Authority (Drugs Council, Pharmaceutical Services).',
                filePath: 'pdfs/legislation/',
                fileNameEN: 'Announcement_04-04-2012.pdf'
            },
            {
                title: 'Pharmaceutical Services - Ministry of Health Announcement 01-09-2008',
                content: 'Announcement regarding: a) Reporting & Submission requirements to the Cyprus Competent Authority of lCSRs and PSURs, b) QPPV and product\'s list and electronic product\'s list.',
                filePath: 'pdfs/legislation/',
                fileNameEN: 'Announcement_01-09-2008.pdf'
            },
            {
                title: 'Legislation on medicinal products for human use',
                content: 'Legislation on medicinal products for human use (quality control, supply and prices) from 2001 to 2004 (No. 3)/452 2004',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Law_452_2004.pdf'
            },
        ],
    },
    {
        name: "Greek Materiovigilance Legislation",
        dropDowns: [
            {
                title: 'Guidelines on a Medical Device Vigilance System _ revision January 13',
                content: 'EU Guidelines on a Medical Device Vigilance System _ MEDDEV  2.12-1 revision 8 _ January 2013.',
                filePath: 'pdfs/legislation/',
                fileNameEN: 'Guidelines on a Medical Device Vigilance System_revision Jan 13.pdf'
            },
            {
                title: 'Summary of the Obligations for manufacturers and operators of Medical Devices',
                content: '(Version 1.0_April 2010)',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Summary_Version 1.0_April 2010.pdf'
            },
            {
                title: 'Ministerial Decision 130648 published in Government Gazette issue 2198/02-10-2009',
                content: 'Transposition of Directive 93/42/EEC/27-10-98 into Greek law regarding Medical Devices with amendments.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_2198_021009.pdf'
            },
            {
                title: 'Ministerial Decision 130644 published in Government Gazette issue 2197/02-10-2009',
                content: 'Ministerial Decision regarding Active Implantable Medical Devices.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_2197_021009.pdf'
            },
            {
                title: 'General Regulation on Evaluation and Certification of Quality Systems and Medical Devices November 2007',
                content: '',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'EKEVYL_Nov2007.pdf'
            },
            {
                title: 'Ministry of Health Circular 58308 / 05-10-2005',
                content: 'Guidelines for the application of Article 48 paragraph 3 of 3370/11-7-05 (Government Gazette 176/ A) on the medical device special fees to the National Regulatory Authority.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'Circular_58308_051005.pdf'
            },
            {
                title: 'Amendment to Ministerial Decision 8δ/1348, published in Government Gazette issue 1459/B/22-09-04',
                content: 'Amended Principles and Guidelines of medical device good distribution practices.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_1459_220904.pdf'
            },
            {
                title: 'Ministerial Decision 8δ/1348, published in Government Gazette issue 32/B/16-01-04',
                content: 'Principles and guidelines of medical device good distribution practices.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_32B_160104.pdf'
            },
            {
                title: 'Ministerial Decision 3607/892 published in Government Gazette issue 1060/10-08-2001',
                content: 'Transposition of Directive 90/385/EC/27-10-98 into Greek law regarding in vitro diagnostic medical devices.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_1060_100801.pdf'
            },
            {
                title: 'Ministerial Decision 2048 published in Government Gazette issue 679/13-09-1994',
                content: 'Transposition of Directive 93/42/EEC/14-06-93 into Greek law regarding Medical Devices.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_679_130994.pdf'
            },
            {
                title: 'Ministerial Decision 2351 published in Government Gazette issue 639/29-08-1994',
                content: 'Transposition of Directive 90/385/EEC/20-06-90 into Greek law regarding Active Implantable Medical Devices.',
                filePath: 'pdfs/legislation/',
                fileNameGR: 'GovGazette_639_290894.pdf',
                extraFileNames: [
                    {
                        title: "Act 100(I)/2004 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "Act_100_2004.pdf"
                    },
                    {
                        title: "Act 75(I)/2006 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "Act_75_2006.pdf"
                    },
                    {
                        title: "Act 104(I)/2006 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "Act_104_2006.pdf"
                    },
                    {
                        title: "Act 318/2006 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "Act_318_2004.pdf"
                    },
                    {
                        title: "Act 63(I)/2012 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "Act_63_2012.pdf"
                    },
                    {
                        title: "Act 209(I)/2012 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "Act_209I_2004.pdf"
                    },
                    {
                        title: "Act 146(I)/2013 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "146I 2013.pdf"
                    },
                    {
                        title: "Act 142(I)/2017 amending Law 452/2004 on medicinal products for human use (quality control, supply and prices)",
                        fileName: "1422017.pdf"
                    },
                ]
            },
        ],
    },
];

const LegislationTabs = () => {
    const [openTab, setOpenTab] = useState(0);

    useEffect(() => {
        const getQueryParam = (param: string): string | null => {
            const queryParams = new URLSearchParams(window.location.search);
            return queryParams.get(param);
        };

        const tabQueryParam = getQueryParam('tab');
        const tabQueryParamTab = tabQueryParam ? parseInt(tabQueryParam, 10) : 0;
        const initialTab = tabQueryParamTab > 2 || tabQueryParamTab < 0 ? 0 : tabQueryParamTab;

        setOpenTab(initialTab);
    }, []);


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
                                    key={index}
                                    className={
                                        `text-md font-bold uppercase px-5 py-3 block border-medwork-dark dark:border-medwork-light border ${openTab === index
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

                    <p className="text-sm text-medwork-dark dark:text-medwork-light mb-10">
                        * For the full translation of the texts in English, please contact us at <a
                            aria-label="By clicking you will be taken to Mail"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={"mailto:" + MedworkInfoMail}
                        >
                            {MedworkInfoMail}
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
                                                        fileNameGR={link.fileNameGR}
                                                        fileNameEN={link.fileNameEN}
                                                        fileNameGR_EN={link.fileNameGR_EN}
                                                        extraFileNames={link.extraFileNames}
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
            </div>
        </>
    );
};

export default LegislationTabs;

