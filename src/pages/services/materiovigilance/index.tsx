import ImageCategory from "@/components/ImageCategory";
import materiovigilance from "@assets/services/materiovigilance.jpg";

function Materiovigilance() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={materiovigilance}
        title="Materiovigilance"
        description="The principal purpose of materiovigilance is to improve the protection of the health and safety of patients, users and others by reducing the likelihood that incidents related to the use of a medical device will reoccur."
      />

      <div className="mx-auto flex max-w-[86em] flex-col items-center justify-between">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 dark:text-gray-400 xs:px-24">
          <p className="font-semibold">
            Medical Devices Directives ensure that adverse incidents are
            evaluated and, where appropriate, information is disseminated in the
            form of a National Competent Authority Report (NCAR) with the
            objective of preventing the repetition of such incidents through the
            adoption of appropriate corrective actions to be taken in the field.
          </p>
          <p>
            Medwork can provide you with a vigilance reporting system that is
            compliant with MEDDEV 2.12-1 r 6, and develop all the standard
            operating procedures required.
          </p>
          <h2>Our services include:</h2>
          <p className="font-semibold">
            Pre- and post-marketing vigilance services for all classes of
            Medical Devices according to the European guideline MEDDEV 2.12-1
            rev. 5, including:
          </p>
          <p className="font-semibold">
            Preparation of customized Standard Operating Procedures (SOPs) for a
            Medical Device Vigilance system and reporting procedures for
            Incidents/Near Incidents;
          </p>
          <p className="font-semibold">
            Management of Incidents/Near Incidents: case reception, Quality
            Control Assessment and preparation of narratives;
          </p>
          <p className="font-semibold">
            Expedited reporting of Incidents/Near Incidents: preparation and
            submission of Manufacturer Incident Reports and Field Safety Notice
            (FSN) to multiple regulatory authorities where necessary;
          </p>
          <p className="font-semibold">
            Periodic Vigilance Reports: complete and submit Periodic
            Summary/Trend Reports to National Competent Authorities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Materiovigilance;
