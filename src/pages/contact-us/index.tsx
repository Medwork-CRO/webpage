import Breadcrumbs from "@/components/Breadcrumb";
import ImageCategory from "@/components/ImageCategory";
import MapCategory from "@/pages/contact-us/MapCategory";
import contactUs from "@assets/stock-images/contact-us.webp";

const ContactUs = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-between w-full">
      <ImageCategory
        image={contactUs}
        title="Contact Us"
        aria-label="Contact Us"
      />

      <div
        id="main-content"
        className="w-full max-w-[1200px] items-left whitespace-pre-line flex flex-col"
      >
        <Breadcrumbs />

        <div className="flex flex-col gap-20 sm:gap-24 md:gap-28 px-4 sm:px-6 eq:px-0 py-16">
          <MapCategory />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
