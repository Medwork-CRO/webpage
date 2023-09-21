type TitleProps = {
  title: string;
  colour?: string;
  align?: "left" | "center";
};

function Title({
  title,
  colour = "text-gray-500 dark:text-gray-400",
  align = "left",
}: TitleProps) {
  const textAlign = align === "left" ? "md:text-left" : "md:text-center";
  return (
    <div
      className={`my-4 ${textAlign} text-4xl font-bold leading-relaxed ${colour} my-4`}
    >
      {/*  text-cyan-500 */}
      {/* &#8226;  */}
      {title}
    </div>
  );
}

export default Title;
