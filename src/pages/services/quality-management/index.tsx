import ImageCategory from "@/components/ImageCategory";
import qualityManagement from "@assets/services/qualityManagement.jpg";

function QualityManagement() {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={qualityManagement}
        title="Quality Management"
        description="Combining an excellent knowledge of the pharmaceutical environment, a deep understanding of European and international pharmaceutical quality standards and an unwavering commitment to quality, Medwork provides tailored and cost-effective quality management services in the area of Pharmacovigilance (GVP)."
      />

      <div className="mx-auto mt-16 flex max-w-[86em] flex-col items-center justify-between">
        <div className="mb-16 flex flex-col gap-8 whitespace-pre-line px-8 text-xl text-gray-500 xs:px-24">
          <h2>Medwork can assist you with:</h2>
          <p className="font-semibold">
            Building a corporate quality-oriented mind-set by improving your
            personnel's understanding of quality requirements, and communicating
            and enforcing this message at all levels and functions throughout
            your organization;
          </p>
          <p className="font-semibold">
            Integrating quality into your daily working environment by building
            quality into all processes, while maintaining flexibility as
            appropriate to the size and particularities of your organization;
          </p>
          <p className="font-semibold">
            Ensuring compliance and minimizing regulatory risk by improving your
            responsiveness to a demanding and fast-changing environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QualityManagement;
