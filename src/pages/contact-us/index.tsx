import Breadcrumbs from "@/components/Breadcrumb";
import MapCategory from "@/pages/contact-us/MapCategory";

const crumbs = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];

const Contact = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
      <Breadcrumbs items={crumbs} />
      <MapCategory />
      {/* <div className="flex flex-col items-center gap-6 whitespace-pre-line mx-4 text-xl text-gray-500 dark:text-gray-400 lg:mx-0 py-16">
        <section className="md:mx-auto flex max-w-[86rem] flex-col items-start justify-center gap-16 md:flex-row mb-8">
          <ContactForm />
        </section>
      </div> */}
    </div>
  );
};

export default Contact;
