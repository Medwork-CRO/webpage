import MemberCard from "@/components/MemberCard";
import Title from "@/components/Title";
import { MemberInfo } from "@/types/MemberInfo";
import cat from "@assets/team-photos/cat-cat.jpg";
import ioannis from "@assets/team-photos/ioannis-tsiakkas.jpg";
import nicolas from "@assets/team-photos/nicolas-tsiakkas.jpg";

const membersInfo: MemberInfo[] = [
  {
    image: cat,
    name: "Katelinus Mouserous",
    title: "CEO",
    description:
      "Whiskers, the extraordinary feline CEO of a pharmaceutical company, combines feline intuition with exceptional leadership skills to revolutionize the industry. With a passion for improving lives, Whiskers drives groundbreaking research and development, inspiring their team to reach new heights. Their charismatic presence and advocacy for animal welfare have made them an iconic figure, creating a positive impact on both humans and pets alike.",
  },
  {
    image: ioannis,
    name: "John Doe",
    title: "Head Of Design",
    description:
      "John, the visionary designer, possesses an innate ability to transform ideas into captivating visual experiences. With a keen eye for aesthetics and attention to detail, he crafts innovative designs that captivate audiences and breathe life into brands. Through his creative genius and passion for pushing boundaries, John leaves an indelible mark on every project he undertakes, redefining the world of design.",
  },
  {
    image: nicolas,
    name: "Nicolas Doe",
    title: "Head of Operations",
    description:
      "Nicolas, the exceptional Head of Operations, orchestrates seamless efficiency and optimal performance within the organization. With a strategic mindset and sharp analytical skills, he streamlines processes, enhances productivity, and ensures smooth day-to-day operations. Nicolas's unwavering dedication and leadership inspire the team to achieve operational excellence, driving the company's success to new heights.",
  },
];

function OurTeam() {
  return (
    <div className="mx-auto flex max-w-[86em] flex-col items-center justify-between mt-16">
      <div
        className={`flex flex-col gap-8 whitespace-pre-line text-center text-xl text-gray-500`}
      >
        <Title title={"OUR TEAM"} />
        <p className="font-semibold">
          Medwork is a leading pharmaceutical company, specializing in clinical,
          drug safety, and review services for global pharmaceutical,
          biotechnology, and medical device companies. Our team of experts
          brings a wealth of experience and a comprehensive portfolio of
          solutions, including clinical research support, life science
          consulting, R&D technology, pharmacovigilance, and IRB/IBC services.
          We are committed to delivering optimal outcomes for our clients trials
          and improving patient care.
        </p>
        <p>
          With our end-to-end global clinical services and advanced technology
          solutions, Medwork is dedicated to serving the needs of clinical
          research and patients worldwide. Our unwavering dedication, coupled
          with our commitment to excellence, drives us to continually innovate
          and provide the highest standard of service. We strive to optimize the
          research and development process, ensure drug safety, and facilitate
          efficient regulatory review, all with the ultimate goal of advancing
          healthcare through exceptional pharmaceutical services. Partner with
          Medwork for trusted expertise and a customer-centric approach in the
          ever-evolving pharmaceutical industry.
        </p>
      </div>
      <div className="my-12 flex justify-center">
        <div className="grid max-w-5xl grid-rows-2 gap-16 md:grid-cols-2">
          {membersInfo.map((memberInfo, i) => (
            <MemberCard
              key={i}
              image={memberInfo.image}
              name={memberInfo.name}
              title={memberInfo.title}
              description={memberInfo.description}
              linkedInTag={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
