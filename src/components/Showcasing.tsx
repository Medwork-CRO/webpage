import React from "react";
import Title from "./Title";

type Showcase = {
    title: string;
    point: string
};

function Showcase({ title, point }: Showcase) {
    return (
        <li className="flex flex-col narrow-letters leading-relaxed">
            <span className="font-light mr-2 text-2xl">{title}</span>
            <span className="font-thin ml-2 text-xl">{point}</span>
        </li>
    );
}

function Showcasing({ title, showcases }: { title: string, showcases: Showcase[] }) {
    return (
        <div className="
            w-full flex flex-col gap-8
            text-medwork-brown dark:text-gray-400
        ">
            <Title title={title} />
            <ul className="flex flex-col gap-6 list-disc pl-4">
                {showcases.map((showcase, i) => (
                    <React.Fragment key={i}>
                        <Showcase title={showcase.title} point={showcase.point} />
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

export default Showcasing;
