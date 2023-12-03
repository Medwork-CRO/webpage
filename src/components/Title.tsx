type TitleProps = {
    title: string;
    colour?: string;
    align?: "left" | "center" | "right";
  };

function Title({
    title,
    colour = "text-medwork-brown dark:text-gray-400",
    align = "left",
}: TitleProps) {
    const textAlignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    };

    const textAlign = textAlignClass[align];

    return (
        <span
            id={title.split(" ").join("-").toLowerCase()}
            className={`
                pl-4 mt-2 text-2xl md:text-3xl text-center ${colour} ${textAlign}
                font-normal uppercase tracking-wide leading-tight narrow-letters
            `}
        >
            {title}
        </span>
    );
}

export default Title;
