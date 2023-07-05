import Link from "next/link";

type InfoBoxProps = {
  title: string;
  text: string;
  link: string;
  color: string;
};

const InfoBox = ({ title, text, link, color }: InfoBoxProps) => (
  <Link href={link}>
    <div className={`
      flex flex-col p-8 ${color} h-[18rem] sm:h-[28rem] lg:h-[30rem]
      w-full md:max-w-[26rem] lg:max-w-[18rem] saturate-50 hover:saturate-150
      hover:border-cyan-600 border-4 border-transparent text-cyan-800 transition duration-500 ease-in-out`}>
      <h4 className="mb-2 text-xl sm:text-2xl font-bold">{title}</h4>
      <p className="text-md sm:text-lg font-semibold">{text}</p>
    </div>
  </Link>
)

export default InfoBox;
