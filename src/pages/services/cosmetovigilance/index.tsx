import ImageCategory from "@/components/ImageCategory";
import cosmetovigilance from "@assets/services/cosmetovigilance.jpg";

function Cosmetovigilance() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={cosmetovigilance}
        title="Cosmetovigilance"
        description="Medwork provides a comprehensive and customizable set of services to assist cosmetics companies in complying with the regulatory directives."
      />

      <div className="mx-auto flex max-w-[86em] flex-col items-center justify-between">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 dark:text-gray-400 xs:px-24">
          <h2>Our services include:</h2>
          <p className="font-semibold">
            Establishing a cosmetovigilance system
          </p>
          <p className="font-semibold">
            Collection and assessment of undesirable events
          </p>
          <p className="font-semibold">
            Handling of Serious Undesirable Effects (SUE), including expedited
            reporting to Competent Authorities
          </p>
          <p className="font-semibold">
            Appointment of qualified Medwork personnel as a local contact person
          </p>
          <p className="font-semibold">
            Training of personnel on cosmetovigilance, as legally required
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cosmetovigilance;
