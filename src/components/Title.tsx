import { Spectral } from "@next/font/google";

type TitleProps = {
  title: string;
  colour?: string;
  align?: "left" | "center";
};

function Title({
  title,
  colour = "text-[#2d333b] dark:text-[#f6f1eb]",
  align = "center",
}: TitleProps) {
  const textAlign = align === "left" ? "md:text-left" : "md:text-center";
  return (
    <div
      className={`my-4 text-center ${textAlign} text-3xl font-bold ${colour} my-4`}
    >
      {/*  text-cyan-500 */}
      {/* &#8226;  */}
      {title}
    </div>
  );
}

export default Title;
