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
        <h1
            id={title.split(" ").join("-").toLowerCase()}
            className={`
                mt-16 pb-2
                ${colour} ${textAlign}
                text-lg md:text-xl lg:text-2xl
                font-semibold tracking-wide
                uppercase leading-tight
                border-b border-gray-200 dark:border-gray-600
              `}
        >
            {title}
        </h1>
    );
}

export default Title;
