import { Spectral } from "@next/font/google";

const inter = Spectral({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

type TitleProps = {
  title: string;
  colour?: string;
  align?: "left" | "center";
};

function Title({
  title,
  colour = "text-gray-500 dark:text-[#f6f1eb]",
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
