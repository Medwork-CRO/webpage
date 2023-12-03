import person1 from "@assets/people/nicolas_tsiakkas.webp";
// import person2 from "@assets/people/eleni_voidou.webp";
import person2 from "@assets/people/default.jpg";
import person3 from "@assets/people/katerina_paschou.webp";
import person4 from "@assets/people/fotoula_dragatsi.webp";
import MemberCard, { MemberInfo } from "./MemberCard";
import { motion } from "framer-motion";

const membersInfo: MemberInfo[] = [
    {
        image: person1,
        name: "Nicolas Tsiakkas",
        title: "Scientific Director",
        description:
            [
                "Nicolas Tsiakkas has been an active member of the pharmaceutical industry for over 30 years, possessing extensive knowledge and expertise in pharmacovigilance, clinical development, and quality assurance. An MD by training, Nicolas commenced his pharmaceutical career in 1989 at Schering-Plough Greece as Medical Director. Following a five-year tenure, he transitioned to Rhone-Poulenc Rorer, serving as the Regional Medical Director and Pharmacovigilance Manager for Greece, Bulgaria, Romania, and the former Yugoslavia.",
                "In 2005, amidst successive mergers with Hoechst Marion Russel and Sanofi, he established Medwork. Under his leadership, Medwork has evolved from a provider of clinical research and pharmacovigilance services into a highly-regarded CRO, specializing in vigilance services for both international and local pharmaceutical companies.",
                "Dr. Tsiakkas is a member of the Pharmacovigilance Working Group of the European CRO Federation (EUCROF). Additionally, from 2019 to 2022, he served on the organizing committee for the DIA Global Forum for Qualified Persons in Pharmacovigilance.",
            ]
    },
    {
        image: person2,
        name: "Eleni Voidou",
        title: "Administration Director",
        description: [
            "As the head of Medwork's operations, Eleni is one of the driving forces behind our commitment to client satisfaction and the continuous development of our team. With a background in the pharmaceutical industry dating back to 1997, Eleni's professional journey began in the medical device sector, where she transitioned from hand-on operational responsibilities to strategic roles in sales. Between 2004 and 2008, she took charge as the Sales Manager for the GE Healthcare ICU/CCU monitoring product line in Greece, navigating the intricacies of the industry.",
            "In 2009, Eleni seamlessly shifted gears into the pharmaceutical domain, taking on the role of Administration Director at Medwork. In this capacity, she not only refined her skills in business development and operational management but also played a pivotal role in steering the company towards sustained growth.",
            "Eleni holds a degree in Physics and a Master's degree in Biomedical Engineering from Imperial College London.",
        ]
    },
    {
        image: person3,
        name: "Katerina Paschou",
        title: "Human Resources Manager",
        description:
            [
                "Katerina Paschou graduated from the National and Kapodistrian University of Athens with a bachelor's degree in Dentistry (DDS). She practiced Dentistry for two years and in 2009 she joined Medwork, taking up the position of Pharmacovigilance Assistant. Since then, Katerina has been gradually taking responsibility for a variety of complex and difficult tasks, among which have been assuming the roles of EU Qualified Person for Pharmacovigilance (QPPV) and Local Pharmacovigilance Contact Person. She has also served as a substitute Drug Safety Manager at Roche Hellas for a period of six months in 2011.",
                "Katerina progressively assumed further responsibilities and became the Pharmacovigilance Manager of Medwork in 2012, coordinating a department of 26 pharmacovigilance professionals. Her extensive knowledge of pharmacovigilance and her personal commitment to quality makes her an invaluable member of Medwork's team.",
            ]
    },
    {
        image: person4,
        name: "Fotoula Dragatsi",
        title: "Sales Manager",
        description:
            [
                "Fotoula has more than 18 years in the pharmaceutical industry experience. She started her career in 1995 as a Sales Representative at Boehringer Ingelheim, Greece, and, one year later, moved to Rhone-Poulenc Rorer/Aventis as a Clinical Research Associate. Fotoula progressively assumed management responsibilities in a wide range of activity areas, including clinical trial regulatory clearance, investigative product management, training and SOP development. Following the creation of Sanofi-Aventis in 2005, Fotoula assumed further responsibilities including the roles of SOP & Training Ambassador, Clinical Trial Application Manager and Investigational Product Manager.",
                "In 2011, Fotoula joined Medwork as Quality Services Manager and in this capacity she is responsible for the organization, provision and management of all aspects of quality management services.",
                "In addition to her deep knowledge of and experience in quality assurance and the training she received in her specialist field, Fotoula has also been trained as an auditor/lead auditor as per ISO 9001 and has successfully conducted numerous GCP, GDP and quality system audits.",
            ]
    },
];

function People() {
    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-24">
            {/* <div className="flex flex-wrap justify-between w-full gap-8 items-center self-center"> */}
            {membersInfo.map((memberInfo, i) => (
                <MemberCard
                    image={memberInfo.image}
                    name={memberInfo.name}
                    title={memberInfo.title}
                    description={memberInfo.description}
                    linkedInTag={""}
                    key={i}
                />
            ))}
        </motion.div>
    );
}

export default People;