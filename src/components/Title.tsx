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
                mt-2 pb-2
                ${colour} ${textAlign}
                text-2xl md:text-3xl
                font-semibold tracking-wide uppercase leading-tight
                border-b border-gray-200 dark:border-gray-600
              `}
        >
            {title}
        </span>
    );
}

export default Title;
