import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import InfoBox from "@/components/InfoBox";
import pharmacovigilance from "@assets/services/pharmacovigilance.jpg";
import { FaHome } from 'react-icons/fa';

const paragraphs0 = [
  "We have an extensive Pharmacovigilance Department composed of a team of 21 pharmacovigilance professionals and four medical advisors.",
  "Our clients range from small local companies to large international corporations. Currently [Dec 2021 data], we have over 117 active contracts with more than 77 clients relating to pharmacovigilance activities.",
  "Our services may be fully customized to cover all of a Marketing Authorization Holders responsibilities related to drug safety.",
];

function Pharmacovigilance() {
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
            label: "Services",
            path: "",
          },
          {
            label: "Pharmacovigilance",
            path: "/services/pharmacovigilance",
          }
        ]}
      />
      <ImageCategory
        image={pharmacovigilance}
        title="Pharmacovigilance"
        description=""
      />

      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
        <DisplayParagraphs paragraphs={paragraphs0} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:mx-4 md:my-8 lg:grid-cols-3 lg:mx-0 lg:my-16 my-8">
          <InfoBox
            title="Development of Pharmacovigilance Systems"
            text="We develop reliable and compliant pharmacovigilance systems. We understand the criticality of establishing efficient processes that prioritize patient safety and regulatory compliance. Working closely with our clients, we offer customized solutions that align with regulatory requirements and industry standards. Our services encompass the implementation of robust quality systems, reporting mechanisms, comprehensive signal detection and management, streamlined case processing, and proactive risk assessment. We maintain a thorough understanding of the regulatory landscape to deliver effective pharmacovigilance systems."
            link="/solutions/early-phase/patient-studies/"
            color="bg-blue-200"
          />
          <InfoBox
            title="Bulk ICSR Processing: Efficient Solutions for acute Needs"
            text="When faced with a surge in the number of ICSRs that require processing, urgent handling of excessive amounts of ICSRs, or simply a need for ICSR handling for any reason, there's no need to panic. Our specialized Bulk ICSR Processing services are here to assist you. Compliant with EudraVigilance rules and all applicable regulatory requirements, we ensure that all ICSRs are processed according to your existing pharmacovigilance systems and processes. We work closely with your team to understand your specific requirements and tailor our approach accordingly. We understand the challenges that arise from managing a sudden influx of ICSRs or handling exceptionally large volumes, and we are equipped to handle them efficiently."
            link="/solutions/early-phase/clinical-research-units/"
            color="bg-lime-200"
          />
          <InfoBox
            title="LPPV & Local PV Services in Greece, Cyprus and Malta"
            text="We offer comprehensive and integrated local pharmacovigilance services for Greece, Cyprus and Malta. Our services go beyond the responsibilities of a local QP/LPPV, providing MAHs with a complete local PV system. This includes an independent Local MLM service, regulatory intelligence, a diverse team of case handling personnel, along with all other expertise necessary for the QP/LPPV to fulfil their role effectively, even during regular leave, absences, vacations, or unexpected incidences."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-orange-200"
          />
          <InfoBox
            title="Global MLM"
            text="Our global Medical Literature Monitoring (MLM) service provides comprehensive monitoring and review of worldwide literature. This global approach helps ensure the early detection of new potential risks or side effects of a drug."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-red-200"
          />
          <InfoBox
            title="Local MLM"
            text="Our local Medical Literature Monitoring (MLM) service ensures that all relevant local literature is screened for Individual Case Safety Reports (ICSRs), increasing the likelihood of identifying adverse drug reactions from different sources."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-purple-200"
          />
          <InfoBox
            title="Appointment of local contact person in Cyprus during centralized MAA"
            text=""
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-cyan-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Pharmacovigilance;
