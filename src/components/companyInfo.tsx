import "react-multi-carousel/lib/styles.css";
import React from "react";

type CompanyInfoProps = {
  align?: "center" | "left";
}

function CompanyInfo({ align = "left" }: CompanyInfoProps) {
    return (
        <span className={`max-w-sm whitespace-pre-line text-${align} text-xl font-thin narrow-letters`}>
        Medwork is a Contract Research Organization (CRO) operating in
        Southeast Europe, which since 2005 offers a wide range of
        specialized services to the pharmaceutical and medical device
        industries
        </span>
    );
}

export default CompanyInfo;