import Breadcrumbs from "@/components/Breadcrumb";
import DisplayParagraphs from "@/components/DisplayParagraphs";
import ImageCategory from "@/components/ImageCategory";
import Title from "@/components/Title";
import vigilance from "@assets/services/vigilance-vector.jpg";

const paragraph1 = [
  "Drawing from our extensive 15-year journey in pharmacovigilance, we proudly extend our expertise to the realm of medical device vigilance. As a natural progression of our commitment to safety, we approach medical devices with the same stringent concepts and unwavering mindset that have defined our pharmacovigilance legacy.",
];

const paragraph2 = [
  "Embrace this evolution with us, as our pharmacovigilance legacy transcends to elevate medical device vigilance. It's more than a service – it's a continuation of our commitment to fostering safety and trust across the healthcare spectrum.",
];

function Vigilance() {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory image={vigilance} title="MEDICAL DEVICES VIGILANCE" />

      <div id="main-content" className="max-w-[1476px] w-full">
        <Breadcrumbs />
        <div className="flex flex-col items-center gap-16 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
          <DisplayParagraphs paragraphs={paragraph1} />

          <Title title="Introducing Medical Device Vigilance" />
          <ul className="w-full flex flex-col px-4 mx-4 md:mx-8 lg:mx-16 my-4 md:my-8 lg:my-16 gap-16 list-disc">
            <li>
              <b className="mr-2">Seamless Transition:</b>
              <span>Our transition to medical device vigilance is not just a new venture; it&apos;s an evolution of our legacy. The same dedication that has fueled our pharmacovigilance journey now underpins our approach to medical devices.</span>
            </li>
            <li>
              <b className="mr-2">Consistent Standards:</b>
              <span>Just as we&apos;ve maintained uncompromising standards in pharmacovigilance, we bring the same level of rigor and precision to our medical device vigilance services.</span>
            </li>
            <li>
              <b className="mr-2">Holistic Expertise:</b>
              <span>Our multidisciplinary team leverages insights from both pharmacovigilance and medical device fields, creating a holistic approach that addresses diverse safety concerns.</span>
            </li>
            <li>
              <b className="mr-2">Unified Vigilance:</b>
              <span>Whether pharmaceuticals or medical devices, our overarching goal remains unchanged: to safeguard patient well-being and uphold regulatory compliance.</span>
            </li>
          </ul>

          <DisplayParagraphs paragraphs={paragraph2} />
        </div>
      </div>
    </div>
  );
}

export default Vigilance;
