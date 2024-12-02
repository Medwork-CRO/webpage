import person1 from "@assets/people/nikolas_tsiakkas.webp";
import person2 from "@assets/people/eleni_voidou.webp";
import person3 from "@assets/people/katerina_paschou.webp";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import MemberCard, { MemberInfo } from "./MemberCard";

const membersInfo: MemberInfo[] = [
    {
        image: person1,
        name: "Nikolas Tsiakkas",
        title: "Scientific Director",
        description:
            [
                "Nikolas Tsiakkas has been an active member of the pharmaceutical industry for over 30 years, possessing extensive knowledge and expertise in pharmacovigilance, clinical development, and quality assurance. An MD by training, Nikolas commenced his pharmaceutical career in 1989 at Schering-Plough Greece as Medical Director. Following a five-year tenure, he transitioned to Rhone-Poulenc Rorer, serving as the Regional Medical Director and Pharmacovigilance Manager for Greece, Bulgaria, Romania, and the former Yugoslavia.",
                "In 2005, amidst successive mergers with Hoechst Marion Russel and Sanofi, he established Medwork. Under his leadership, Medwork has evolved from a provider of clinical research and pharmacovigilance services into a highly-regarded CRO, specializing in vigilance services for both international and local pharmaceutical companies.",
                "Nikolas is a member of the Pharmacovigilance Working Group of the European CRO Federation (EUCROF). Additionally, from 2019 to 2022, he served on the organizing committee for the Drug Information Association (DIA) Global Forum for Qualified Persons in Pharmacovigilance.",
            ]
    },
    {
        image: person2,
        name: "Eleni Voidou",
        title: "Director of Operations",
        description: [
            "As the head of Medwork's operations, Eleni is one of the driving forces behind our commitment to client satisfaction and the continuous development of our team. With a background in the pharmaceutical industry dating back to 1997, her professional journey began in the medical device sector, where she transitioned from hand-on operational responsibilities to strategic roles in sales. Between 2004 and 2008, she took charge as the Sales Manager for the GE Healthcare ICU/CCU monitoring product line in Greece, navigating the intricacies of the industry.",
            "In 2009, Eleni seamlessly shifted gears into the pharmaceutical domain, taking on the role of Director of Operations at Medwork. In this capacity, she not only refined her skills in business development and operational management but also played a pivotal role in steering the company towards sustained growth.",
            "Eleni holds a Bachelor's degree in Physics and a Master's degree in Biomedical Engineering from Imperial College London.",
        ]
    },
    {
        image: person3,
        name: "Katerina Paschou",
        title: "Pharmacovigilance Manager",
        description:
            [
                "Katerina embarked on her pharmacovigilance journey in 2009, transitioning from dentistry to become a member of Medwork's newly established pharmacovigilance department. As Medwork evolved, so did Katerina's role, navigating through various responsibilities. In 2012, she assumed the role of Pharmacovigilance Manager, leading a compact team of four PV officers.",
                "Under Katerina's guidance, Medwork's pharmacovigilance services flourished, expanding both in scope and expertise. Currently heading Medwork's safety department, she oversees a dynamic team of over 25 safety professionals. Her contribution has been essential in the continuous growth and expansion of Medwork's safety services, establishing a reputation for quality services trusted by a diverse clientele.",
                "A graduate of the National and Kapodistrian University of Athens with a Doctor of Dental Surgery (DDS) degree, Katerina brings a unique perspective to her leadership role, ensuring Medwork remains at the forefront of delivering exceptional pharmacovigilance services.",
            ]
    },
];

function People() {
    const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setSelectedMemberIndex(selectedMemberIndex === index ? null : index);
    };

    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return (
        <div id="leadership">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
                {membersInfo.map((memberInfo, i) => (
                    <MemberCard
                        {...memberInfo}
                        onToggleDescription={() => toggleDescription(i)}
                        showDescription={selectedMemberIndex === i}
                        selected={selectedMemberIndex !== null}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default People;
