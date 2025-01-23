import React, { useEffect, useState } from "react";
import InlineInfoBox, { InlineInfoBoxParams } from "./InlineInfoBox";

type Legislation = {
  name: string;
  dropDowns: InlineInfoBoxParams[];
  footer?: string;
};

const EOF =
  "https://www.eof.gr/web/guest/lawmedical?p_p_id=62_INSTANCE_4s7I&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=2&_62_INSTANCE_4s7I_struts_action=%2Fjournal_articles%2Fview&_62_INSTANCE_4s7I_groupId=12225&_62_INSTANCE_4s7I_articleId=18157&_62_INSTANCE_4s7I_version=1.0";

const legislations: Legislation[] = [
  {
    name: "Greek Pharmacovigilance Legislation",
    dropDowns: [
      {
        title:
          "Questions and Answers regarding the local implementation of Regulation (EU) No 536/2014 (CTR) in Greece",
        content: "(Version 1.1/01-07-2022)",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "CTR Q&A Greece_v1.1 01.07.2022.pdf",
      },
      {
        title:
          "Circular regarding the management and reporting of safety issues in the context of conducting clinical trials",
        content: "(Version 12976/05-02-2019)",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "Circular_12976_05-02-2019.pdf",
      },
      {
        title:
          "Common/frequently asked questions about Pharmacovigilance of medicines for human use and Materiovigilance",
        content: "(Version 1.1/12-03-2018)",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "12-03-2018_GR.pdf",
        fileNameEN: "12-03-2018_EN.pdf",
      },
      {
        title: "National Organization for Medicines - Yellow Card",
        content:
          "The \"Yellow Card\", is used to collect information on adverse drug reactions. Healthcare professionals and patients can use it to report adverse drug reactions to the National Organization for Medicines (EOF). It can be sent via fax or regular mail. Alternatively, adverse drug reactions may be reported electronically via EOF's site. For more information visit: https://www.eof.gr/web/guest/yellowgeneral.",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "Yellow card.pdf",
      },
      {
        title:
          "Ministerial Decision 3a/90023, published in Government Gazette issue 2485/B/03-10-2013",
        content:
          "Transposition of Directive 2012/26/EU of the European Parliament and of the Council of 25 October 2012 into Greek law, amending Directive 2001/83/EC as regards pharmacovigilance. It applies in conjunction with the \"Ministerial Decision No. 3a / G.P.\",32221/29-04-2013.",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "3a_90023_03-10-2013.pdf",
      },
      {
        title: "National Organization for Medicines Circular 70473/01-10-2013",
        content:
          "Requirement to add: (a) specific text regarding ADR reporting in SmPC and PIL; (b) a black triangle in SmPC and PIL; and (c) specific text in educational material that is part of RMPs in order to promote ADR reporting by HCPs and consumers.",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "Circular_70473_01-10-2013.pdf",
      },
      {
        title:
          "Ministerial Decision 3a/32221, published in Government Gazette issue 1049/B/29-4-2013",
        content:
          "Transposition of EU Directive 2001/83/EC into Greek law, concerning the production and the marketing of medicinal products for human use, as applicable and as amended by the EU Directive 2011/62 regarding the prevention of falsified medicines in the legal supply chain (L 174/01-07-2011).",
        filePath: "pdfs/legislation/greek-pharmacovigilance",
        fileNameGR: "Ministerial_Decision_3a_32221_29-04-2013_GR.pdf",
        fileNameEN: "Ministerial_Decision_3a_32221_29-04-2013_EN.pdf",
      },
    ],
  },
  {
    name: "Cypriot Pharmacovigilance Legislation",
    dropDowns: [
      {
        title:
          "Pharmaceutical Services - Ministry of Health Announcement 03-02-2016",
        content:
          "Announcement regarding submission through Common European Submission Platform (CESP)",
        filePath: "pdfs/legislation/cypriot-pharmacovigilance",
        fileNameGR: "CESP_03-02-2026.pdf",
      },
      {
        title:
          "Pharmaceutical services - Ministry of Health Circular - RMPs 02-01-2015",
        content:
          "Local requirements regarding the submission of Risk Management Plans (RMP) and Risk Minimisation Measures (RMM)",
        filePath: "pdfs/legislation/cypriot-pharmacovigilance",
        fileNameGR: "Circular_RMP_02-01-2015.pdf",
      },
      {
        title:
          "Pharmaceutical services - Ministry of Health Circular - Local contact person 02-01-2015",
        content: "Requirements for local QPPV/RPPV",
        filePath: "pdfs/legislation/cypriot-pharmacovigilance",
        fileNameGR: "Circular_LQPPV_02-01-2015.pdf",
      },
      {
        title:
          "Pharmaceutical Services - Ministry of Health Announcement 25-10-2013",
        content:
          "Announcement regarding \"Dear Health Care Professional (DHPC)\" communications",
        filePath: "pdfs/legislation/cypriot-pharmacovigilance",
        fileNameGR: "Announcement_DHPC_25-10-2013.pdf",
      },
      {
        title: "Legislation on medicinal products for human use",
        content:
          "Legislation on medicinal products for human use (quality control, supply and prices) from 2001 to 2004 (No. 3)/452 2004",
        filePath: "pdfs/legislation/cypriot-pharmacovigilance",
        fileNameGR: "Legislation_452_2004.pdf",
      },
    ],
  },
  {
    name: "Greek Materiovigilance Legislation",
    dropDowns: [
      {
        title:
          "Regulation (EU) 2017/746 of the European Parliament and of the Council of 5 April 2017 on in vitro diagnostic medical devices and repealing Directive 98/79/EC and Commission Decision 2010/227/EU",
        content: "",
        filePath: "pdfs/legislation/greek-materiovigilance",
        fileNameGR: "Regulation_2017-746_GR.pdf",
        fileNameEN: "Regulation_2017-746_EN.pdf",
      },
      {
        title:
          "Regulation (EU) 2017/745 of the European Parliament and of the Council of 5 April 2017 on medical devices, amending Directive 2001/83/EC, Regulation (EC) No 178/2002 and Regulation (EC) No 1223/2009 and repealing Council Directives 90/385/EEC and 93/42/EEC",
        content: "",
        filePath: "pdfs/legislation/greek-materiovigilance",
        fileNameGR: "Regulation_2017-745_GR.pdf",
        fileNameEN: "Regulation_2017-745_EN.pdf",
      },
      {
        title:
          "Guidelines on a Medical Device Vigilance System_revision January 13",
        content:
          "EU Guidelines on a Medical Device Vigilance System _MEDDEV 2.12-1 revision 8/January 2013",
        filePath: "pdfs/legislation/greek-materiovigilance",
        fileNameEN: "MEDDEV_2.12-1_ rev8_Jan13.pdf",
      },
      {
        title:
          "Summary of the Obligations for manufacturers and operators of Medical Devices (Version 1.0/April 2010)",
        content: "",
        filePath: "pdfs/legislation/greek-materiovigilance",
        fileNameGR: "Summary_v1.0_Apr10.pdf",
      },
    ],
    footer: `<span>For further information regarding legislation on medical devices please visit: <a href=${EOF} target="_blank">National Organisation for Medicine&apos;s website</a></span>`,
  },
];

const LegislationTabs = () => {
  const [openTab, setOpenTab] = useState(0);

  useEffect(() => {
    const getQueryParam = (param: string): string | null => {
      const queryParams = new URLSearchParams(window.location.search);
      return queryParams.get(param);
    };

    const tabQueryParam = getQueryParam("tab");
    const tabQueryParamTab = tabQueryParam ? parseInt(tabQueryParam, 10) : 0;
    const initialTab =
      tabQueryParamTab > 2 || tabQueryParamTab < 0 ? 0 : tabQueryParamTab;

    setOpenTab(initialTab);
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full">
          <ul
            className="w-full flex list-none flex-col sm:flex-row my-12"
            role="tablist"
          >
            {legislations.map((legislation, index) => {
              return (
                <li
                  className="sm:mr-2 last:mr-0 mb-2 sm:mb-0 last:mb-0 flex-auto text-center cursor-pointer transition-all duration-500 hover:bg-blue-300 hover:bg-opacity-25"
                  key={index}
                >
                  <a
                    key={index}
                    className={`text-md font-bold uppercase px-5 py-3 block border-medwork-dark dark:border-medwork-light border ${
                      openTab === index
                        ? "text-medwork-light dark:text-medwork-dark border-blue-400 dark:border-blue-400 bg-blue-400 dark:bg-blue-400"
                        : "text-medwork-dark dark:text-medwork-light"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(index); /* setOpenDropDown(-1) */
                    }}
                    data-toggle="tab"
                    role="tablist"
                  >
                    {legislation.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* <p className="text-sm text-medwork-dark dark:text-medwork-light mb-10">
                        * For the full translation of the texts in English, please contact us at <a
                            aria-label="By clicking you will be taken to Mail"
                            rel="noopener noreferrer"
                            target="_blank"
                            href={"mailto:" + MedworkInfoMail}
                        >
                            {MedworkInfoMail}
                        </a>
                    </p> */}

          <div className="relative flex flex-col min-w-0 break-words">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                {legislations.map((legislation, legislationIndex) => {
                  return (
                    <ul
                      className={`${openTab === legislationIndex ? "block" : "hidden"}`}
                      key={legislationIndex}
                      id="link1"
                    >
                      <li className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
                        {legislation.dropDowns.map((link, dropDownIndex) => {
                          return (
                            <div key={dropDownIndex}>
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
                              {dropDownIndex === legislations.length &&
                              !!legislation.footer ? (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: legislation.footer,
                                    }}
                                  ></div>
                                ) : (
                                  ""
                                )}
                            </div>
                          );
                        })}
                      </li>
                    </ul>
                  );
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
