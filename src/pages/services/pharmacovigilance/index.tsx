import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import InfoBox from "@/components/InfoBox";
import pharmacovigilance from "@assets/services/pharmacovigilance.jpg";

const paragraphs0 = [
  "We have an extensive Pharmacovigilance Department composed of a team of 21 pharmacovigilance professionals and four medical advisors.",
  "Our clients range from small local companies to large international corporations. Currently [Dec 2021 data], we have over 117 active contracts with more than 77 clients relating to pharmacovigilance activities.",
  "Our services may be fully customized to cover all of a Marketing Authorization Holders responsibilities related to drug safety.",
];

function Pharmacovigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
      <ImageCategory
        image={pharmacovigilance}
        title="Pharmacovigilance"
        description=""
      />

      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 text-xl text-gray-500 dark:text-gray-400 sm:px-8 py-16">
        <DisplayParagraphs paragraphs={paragraphs0} />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:mx-4 md:my-8 lg:grid-cols-3 lg:mx-0 lg:my-16 my-8">
          <InfoBox
            title="Bulk ICSR processing"
            text="We offer an advanced solution for the processing of Individual Case Safety Reports (ICSR). With the capability of handling a large volume of data, our system ensures timely and accurate submissions to meet regulatory requirements."
            link="/solutions/early-phase/clinical-research-units/"
            color="bg-lime-200"
          />
          <InfoBox
            title="Local contact person GR/CY"
            text="For our clients based in Greece and Cyprus, we provide a dedicated local contact person for seamless communication and tailored service delivery. This local presence ensures better understanding and execution of region-specific requirements."
            link="/solutions/early-phase/patient-studies/"
            color="bg-blue-200"
          />
          <InfoBox
            title="Local MLM"
            text="Our local Medical Literature Monitoring (MLM) service ensures that all relevant local literature is screened for Individual Case Safety Reports (ICSRs), increasing the likelihood of identifying adverse drug reactions from different sources."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-purple-200"
          />
          <InfoBox
            title="Global MLM"
            text="Our global Medical Literature Monitoring (MLM) service provides comprehensive monitoring and review of worldwide literature. This global approach helps ensure the early detection of new potential risks or side effects of a drug."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-red-200"
          />
          <InfoBox
            title="PPVs & Local PV Services in Greece, Cyprus, and Malta"
            text="We offer comprehensive and integrated local pharmacovigilance services for Greece, Cyprus and Malta. Our services go beyond the responsibilities of a local QP/LPPV, providing MAHs with a complete local PV system. This includes an independent and cutting-edge Local MLM service, regulatory intelligence, a diverse team of case handling personnel, along with all other expertise necessary for the QP/LPPV to fulfil their role effectively, even during absences, vacations, or unexpected leave."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-orange-200"
          />
          <InfoBox
            title="Bulk ICSR Processing"
            text="Efficient Solutions for Large-Scale Pharmacovigilance Needs: Facing a surge in the number of ICSRs that need to be processed, requiring urgent handling of excess amounts of ICSRs, or simply needing ICSR handling for any reason, there's no need to panic. Our expert team is here to assist you with our specialized Bulk ICSR Processing services. Our services are compliant with EudraVigilance rules and adhere to  robust quality control measures."
            link="/solutions/early-phase/pharmacodynamic-models/"
            color="bg-cyan-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Pharmacovigilance;
