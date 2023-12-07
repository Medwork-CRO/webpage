import person1 from "@assets/people/nicolas_tsiakkas.webp";
// import person2 from "@assets/people/eleni_voidou.webp";
import person2 from "@assets/people/default.jpg";
import person3 from "@assets/people/katerina_paschou.webp";
import person4 from "@assets/people/fotoula_dragatsi.webp";
import MemberCard, { MemberInfo } from "./MemberCard";

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
        title: "Pharmacovigilance Manager",
        description:
            [
                "Katerina embarked on her pharmacovigilance journey in 2009, transitioning from dentistry to become a member of Medwork's newly established pharmacovigilance department. As Medwork evolved, so did Katerina's role, navigating through various responsibilities. In 2012, she assumed the role of Pharmacovigilance Manager, leading a compact team of four PV officers.",
                "Under Katerina's guidance, Medwork's pharmacovigilance services flourished, expanding both in scope and expertise. Currently heading Medwork's safety department, she oversees a dynamic team of over 25 safety professionals. Katerina's contribution has been essential in the continuous growth and expansion of Medwork's safety services, establishing a reputation for quality services trusted by a diverse clientele.",
                "A graduate of the National and Kapodistrian University of Athens with a Doctor of Dental Surgery (DDS) degree, Katerina brings a unique perspective to her leadership role, ensuring Medwork remains at the forefront of delivering exceptional pharmacovigilance services.",
            ]
    },
    {
        image: person4,
        name: "Fotoula Dragatsi",
        title: "Quality Assurance Manager",
        description:
            [
                "Fotoula's experience in the pharmaceutical industry goes back to 1995, when she started her career as a Sales Representative at Boehringer-Ingelheim Greece. A year later, she transitioned to Rhone-Poulenc Rorer/Aventis as a Clinical Research Associate. Over time, her responsibilities progressively expanded in diverse areas, including regulatory clearance for clinical trials, investigational products management, training, and development of procedural documents. With the formation of Sanofi-Aventis in 2005, Fotoula took on additional roles as SOP & Training Ambassador, Clinical Trial Application Manager and Investigational Product Manager.",
                "In 2011 Fotoula joined Medwork as the Quality Assurance Manager where she  is responsible for the maintenance and continual improvement of the company's quality management system. In addition to her extensive expertise in quality assurance, Fotoula has been trained as an auditor/lead auditor as per ISO 9001 and has successfully conducted numerous GCP, GDP and system audits.",
                "Fotoula's profound understanding and commitment to quality make her an invaluable guardian of Medwork's dedication to excellence, serving as a trusted consultancy point for the company's clients."
            ]
    },
];

function People() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-4">
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
        </div>
    );
}

export default People;