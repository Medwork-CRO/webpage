import "react-multi-carousel/lib/styles.css";
import React from "react";

type CompanyInfoProps = {
  align?: "center" | "left";
}

// const companyBriefOld = "Medwork is a Contract Research Organization (CRO) operating in Southeast Europe, which since 2005 offers a wide range of specialized services to the pharmaceutical and medical device industries.";
// const companyBrief = "Since its establishment in 2005, Medwork has been offering an extensive array of specialised vigilance services to the pharmaceutical and medical device industries.";
const companyBrief = "Beyond Compliance, Towards Confidence Elevating Pharmacovigilance Together";

function CompanyInfo({ align = "left" }: CompanyInfoProps) {
    return (
        <span className={`max-w-sm whitespace-pre-line text-${align} italic text-xl font-thin narrow-letters`}>
            {companyBrief}
        </span>
    );
}

export default CompanyInfo;