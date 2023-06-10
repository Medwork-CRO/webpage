import { Spectral } from "@next/font/google";

const inter = Spectral({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <div className="flex items-center justify-center">
      <span className={`${inter.variable} text-xl text-cyan-500 xs:text-3xl`}>
        {/* &#8226;  */}
        {title}
      </span>
    </div>
  );
}

export default Title;
