import { MemberInfo } from "@/types/MemberInfo";
import person1 from "@assets/people/person1.webp";
import person2 from "@assets/people/person2.jpg";
import person3 from "@assets/people/person3.jpg";
import person6 from "@assets/people/person6.jpg";
import MemberCard from "./MemberCard";

const membersInfo: MemberInfo[] = [
    {
        image: person6,
        name: "Nicolas Tsiakkas",
        title: "M.D. - Scientific Director",
        description:
            ["Nicolas Tsiakkas has been an active member of the pharmaceutical industry for over 35 years, having gained a deep knowledge and expertise across a wide range of pharmacovigilance, clinical development and quality assurance activities. Following his specialization in ophthalmology at the Medical School of Wurzburg in Germany, he started his career in 1989 in Schering-Plough Greece, holding the position of Medical Director for a period of 5 years. He then moved to Rhone-Poulenc Rorer as the Regional Medical Director and Pharmacovigilance Manager, being responsible for the company's research program from Phase II to Phase IV studies and surveys in Greece, Bulgaria, Romania and former Yugoslavia. Following the merger of Rhone-Poulenc Rorer with Hoechst-Marion-Roussel, he served as a Medical Director and Pharmacovigilance Manager in Aventis Pharma Greece, between 2000 and 2005. In 2005 he founded Medwork, which, under his leadership, has grown from a company offering clinical research and Pharmacovigilance services to a highly esteemed, Vigilance services oriented CRO for international and local pharmaceutical companies. Dr. Tsiakkas is a member of the Pharmacovigilance Working Group of the European CRO Federation (EUCROF). Since 2019, he is also a member of the organizing committee for the DIA EU-QPPV annual meetings.",]
    },
    {
        image: person1,
        name: "Eleni Voidou",
        title: "Administration Director",
        description: [
            "As the head of Medwork's operations, Eleni is one of the driving forces behind our commitment to client satisfaction and the continuous development of our team. With a background in the pharmaceutical industry dating back to 1997, Eleni's professional journey began in the medical device sector, where she transitioned from hand-on operational responsibilities to strategic roles in sales. Between 2004 and 2008, she took charge as the Sales Manager for the GE Healthcare ICU/CCU monitoring product line in Greece, navigating the intricacies of the industry.",
            "In 2009, Eleni seamlessly shifted gears into the pharmaceutical domain, taking on the role of Administration Director at Medwork. In this capacity, she not only refined her skills in business development and operational management but also played a pivotal role in steering the company towards sustained growth.",
            "Eleni holds a degree in Physics and a Master's degree in Biomedical Engineering from Imperial College London.",
        ]
    },
    {
        image: person2,
        name: "Emily Davis",
        title: "Human Resources Manager",
        description:
            ["Emily is a dedicated and compassionate HR professional with a passion for creating a positive work environment. With expertise in talent acquisition, employee relations, and performance management, she ensures that the organization attracts and retpersonns top talent. Emily's exceptional interpersonal skills and ability to build strong relationships make her a trusted advisor to both employees and management.",]
    },
    {
        image: person3,
        name: "Alex Rodriguez",
        title: "Sales Manager",
        description:
            ["Alex is a results-driven sales professional with a proven track record of exceeding targets. With expertise in lead generation, account management, and sales strategy, he drives revenue growth and builds long-term customer relationships. Alex's exceptional communication skills and ability to understand customer needs make him a valuable asset to any sales team.",]
    },
];

function People() {
    return (
        // <div className="
        //     flex
        //      border-gray-300 dark:border-gray-500
        //     w-full m-2 sm:p4 px-4
        //     overflow-x-auto space-x-8 snap-x snap-mandatory
        //     ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {membersInfo.map((memberInfo, i) => (
                <div className="snap-center" key={i}>
                    <MemberCard
                        image={memberInfo.image}
                        name={memberInfo.name}
                        title={memberInfo.title}
                        description={memberInfo.description}
                        linkedInTag={""}
                    />
                </div>
            ))}
        </div>
    );
}

export default People;