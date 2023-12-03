import { motion } from "framer-motion";
import React from "react";
import InfoBox from "./InfoBox";

export type InfoBoxAttributes = {
    title: string
    text: string;
    link: string;
    color: string;
};

function InfoBoxMatrix({ infoBoxes }: { infoBoxes: InfoBoxAttributes[] }) {
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            className="w-full self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-8">
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
        </motion.div>
    );
}

export default InfoBoxMatrix;
