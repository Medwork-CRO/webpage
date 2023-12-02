import React from "react";

type Showcase = {
    title: string;
    point: string
};

function Showcase({ title, point }: Showcase) {
    return (
        <li className="flex flex-col narrow-letters leading-relaxed">
            <span className="font-light text-2xl">{title}</span>
            <span className="font-thin text-xl">{point}</span>
        </li>
    );
}

function Showcasing({ title, showcases }: { title: string, showcases: Showcase[] }) {
    return (
        <div className="
            w-full flex flex-col gap-6
            text-medwork-brown dark:text-gray-400
        ">
            <span
                id={title.split(" ").join("-").toLowerCase()}
                className={`
                pl-4 mt-2 mb-4 text-2xl md:text-3xl text-center
                font-normal uppercase tracking-wide leading-tight narrow-letters
              `}
            >
                {title}
            </span>
            <ul className="
                flex flex-col gap-6 list-disc pl-4
                border-l border-medwork-brown dark:border-gray-400
            ">
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
