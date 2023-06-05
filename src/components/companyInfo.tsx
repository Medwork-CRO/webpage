import "react-multi-carousel/lib/styles.css";
import React from "react";

type CompanyInfoProps = {
  align?: "center" | "left";
}

export default function CompanyInfo({ align = "center" }: CompanyInfoProps) {
  return (
    <section className="">
      <p className={`whitespace-pre-line p-8 text-xl font-bold text-${align}`}>
        Medwork is a Contract Research Organization (CRO) operating in Southeast
        Europe, which since 2005 offers a wide range of specialized services to
        the pharmaceutical and medical device industries
      </p>
    </section>
  );
}
