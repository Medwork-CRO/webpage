import { Spectral } from "@next/font/google";

const inter = Spectral({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

type TitleProps = {
  colour?: string;
  title: string;
};

function Title({
  title,
  colour = "text-gray-500 dark:text-[#f6f1eb]",
}: TitleProps) {
  return (
    <div className="flex items-center justify-center">
      <span
        className={`my-4 text-center text-3xl font-bold ${colour}`}
        // className={`${inter.variable} dark:text-white text-xl font-semibold text-gray-400 xs:text-3xl`}
      >
        {/*  text-cyan-500 */}
        {/* &#8226;  */}
        {title}
      </span>
    </div>
  );
}

export default Title;
