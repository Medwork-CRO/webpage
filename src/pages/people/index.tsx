import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import MemberCard from "@/components/MemberCard";
import { MemberInfo } from "@/types/MemberInfo";
import ai from "@assets/team-photos/ai.webp";
import ai1 from "@assets/team-photos/ai1.webp";
import ai2 from "@assets/team-photos/ai2.webp";
import ai3 from "@assets/team-photos/ai3.jpg";
import ai4 from "@assets/team-photos/ai4.webp";
import ai5 from "@assets/team-photos/ai5.png";
import ioannis from "@assets/team-photos/ioannis-tsiakkas.jpg";
import nicolas from "@assets/team-photos/nicolas-tsiakkas.jpg";
import team1 from "@assets/team-photos/team1.jpg";
import { FaHome } from 'react-icons/fa';

const membersInfo: MemberInfo[] = [
  {
    image: ai,
    name: "Jane Smith",
    title: "Marketing Manager",
    description:
      "Jane is a creative and strategic marketing professional with a passion for developing innovative campaigns that drive business growth. With a deep understanding of consumer behavior and market trends, she leverages data-driven insights to create impactful marketing strategies that resonate with target audiences. Jane's exceptional communication skills and collaborative approach make her a valuable asset to any team.",
  },
  {
    image: ai1,
    name: "Bob Johnson",
    title: "Software Engineer",
    description:
      "Bob is a highly skilled software engineer with a passion for developing scalable and efficient applications. With expertise in a wide range of programming languages and frameworks, he leverages his technical knowledge to design and implement robust solutions that meet business requirements. Bob's attention to detail and commitment to quality ensure that his code is always of the highest standard.",
  },
  {
    image: ai2,
    name: "Emily Davis",
    title: "Human Resources Manager",
    description:
      "Emily is a dedicated and compassionate HR professional with a passion for creating a positive work environment. With expertise in talent acquisition, employee relations, and performance management, she ensures that the organization attracts and retains top talent. Emily's exceptional interpersonal skills and ability to build strong relationships make her a trusted advisor to both employees and management.",
  },
  {
    image: ai3,
    name: "Alex Rodriguez",
    title: "Sales Manager",
    description:
      "Alex is a results-driven sales professional with a proven track record of exceeding targets. With expertise in lead generation, account management, and sales strategy, he drives revenue growth and builds long-term customer relationships. Alex's exceptional communication skills and ability to understand customer needs make him a valuable asset to any sales team.",
  },
  {
    image: ai4,
    name: "Sarah Lee",
    title: "Product Manager",
    description:
      "Sarah is a highly skilled product manager with a passion for developing innovative products that meet customer needs. With expertise in product strategy, market research, and user experience design, she leads cross-functional teams to deliver products that exceed customer expectations. Sarah's exceptional communication skills and ability to collaborate with stakeholders make her a valuable asset to any product team.",
  },
  {
    image: ai5,
    name: "David Kim",
    title: "Data Analyst",
    description:
      "David is a data analyst with a passion for turning data into insights that drive business decisions. With expertise in data visualization, statistical analysis, and machine learning, he leverages data-driven insights to inform business strategy and improve operational efficiency. David's exceptional analytical skills and attention to detail ensure that his insights are always accurate and actionable.",
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

const paragraphs = [
  "Medwork is a leading pharmaceutical company, specializing in clinical, drug safety, and review services for global pharmaceutical, biotechnology, and medical device companies.",
  "Our team of experts brings a wealth of experience and a comprehensive portfolio of solutions, including clinical research support, life science consulting, R&D technology, pharmacovigilance, and IRB/IBC services. We are committed to delivering optimal outcomes for our clients trials and improving patient care.",
  "With our end-to-end global clinical services and advanced technology solutions, Medwork is dedicated to serving the needs of clinical research and patients worldwide.",
  "Our unwavering dedication, coupled with our commitment to excellence, drives us to continually innovate and provide the highest standard of service. We strive to optimize the research and development process, ensure drug safety, and facilitate efficient regulatory review, all with the ultimate goal of advancing healthcare through exceptional pharmaceutical services. Partner with Medwork for trusted expertise and a customer-centric approach in the ever-evolving pharmaceutical industry.",
];

function OurTeam() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
      <Breadcrumbs
        items={[
          {
            label: (
              <FaHome size={18} />
            ),
            path: "/",
          },
          {
            label: "People",
            path: "/people",
          },
        ]}
      />
      <ImageCategory
        image={team1}
        title="Meet the people behind the answers."
        description="We believe in a better world when it comes to health. It is our responsibility to make it."
      />

      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
        <DisplayParagraphs paragraphs={paragraphs} />

        <div className="w-full my-12 grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
