import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import InfoBox from "@/components/InfoBox";
import vigilance from "@assets/services/vigilance-vector.jpg";

const paragraphs0 = [
  "Medwork is dedicated to supporting Marketing Authorisation Holders in fulfilling their pharmacovigilance obligations. With over 15 years of experience in different facets of pharmacovigilance, our team possesses a wealth of knowledge and a comprehensive understanding of the intricacies involved in ensuring drug safety. ",
];

function Vigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={vigilance} title="Vigilance" />

      <div className="max-w-[1376px] w-full">
        <Breadcrumbs />
        <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraphs0} />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 md:mx-4 md:my-8 lg:grid-cols-3 lg:mx-0 lg:my-16 my-8 gap-4">
            <InfoBox
              title="PV System & QPPV"
              text="We establish and maintain robust Pharmacovigilance Systems.  Our team of experienced EU Qualified Persons for Pharmacovigilance will guarantee the effective management of your drug safety operations and ensure regulatory compliance."
              link="/solutions/early-phase/clinical-research-units/"
              color="bg-blue-200"
            />
            <InfoBox
              title="Local Pharmacovigilance"
              text="Comprehensive and integrated pharmacovigilance services for Greece, Cyprus and Malta, that extend beyond the responsibilities of the LPPV/LSO, providing Marketing Authorization Holders with a complete local PV system."
              link="/solutions/early-phase/pharmacodynamic-models/"
              color="bg-blue-200"
            />
            <InfoBox
              title="Case processing"
              text="We provide streamlined case processing solutions tailored to client's workflows and processes. We adapt to customer's needs, being able to handle excessive volume of ICSRs while ensuring quality and compliance."
              link="/solutions/early-phase/pharmacodynamic-models/"
              color="bg-blue-200"
            />
            <InfoBox
              title="Global and local literature monitoring"
              text="To be defined"
              link="/solutions/early-phase/pharmacodynamic-models/"
              color="bg-blue-200"
            />
            <InfoBox
              title="Clinical Safety"
              text="To be defined"
              link="/solutions/early-phase/pharmacodynamic-models/"
              color="bg-blue-200"
            />
            <InfoBox
              title="Medical device vigilance"
              text="To be defined"
              link="/solutions/early-phase/pharmacodynamic-models/"
              color="bg-blue-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vigilance;
