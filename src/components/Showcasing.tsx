import React from "react";
import Title from "./Title";

type Showcase = {
    title: string;
    point: string
};

function Showcase({ title, point }: Showcase) {
    return (
        <li className="flex flex-col narrow-letters leading-relaxed">
            <span className="font-semibold mr-2">{title}</span>
            <span className="font-light">{point}</span>
        </li>
    );
}

function Showcasing({ title, showcases }: { title: string, showcases: Showcase[] }) {
    return (
        <div className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 text-medwork-brown dark:text-gray-400">
            <Title title={title} />
            <ul className="flex flex-col gap-6 list-disc">
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
