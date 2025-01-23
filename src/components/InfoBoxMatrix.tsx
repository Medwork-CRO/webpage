import React from "react";
import InfoBox from "./InfoBox";

export type InfoBoxAttributes = {
  title: string;
  text: string;
  link: string;
  color: string;
};

function InfoBoxMatrix({ infoBoxes }: { infoBoxes: InfoBoxAttributes[] }) {
  const maxCols =
    infoBoxes.length % 2 === 0 ? (infoBoxes.length > 4 ? 3 : 4) : 3;

  return (
    <div
      className={`
            w-full self-center
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${maxCols}
            mx-4 md:mx-8 lg:mx-16 gap-8
        `}
    >
      {infoBoxes.map((infoBox, i) => (
        <React.Fragment key={i}>
          <InfoBox
            title={infoBox.title}
            text={infoBox.text}
            link={infoBox.link}
            color={infoBox.color}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default InfoBoxMatrix;
