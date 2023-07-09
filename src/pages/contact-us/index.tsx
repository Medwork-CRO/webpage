import MapCategory from "@/pages/contact-us/MapCategory";
import ContactForm from "./ContactForm";



const Contact = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-between max-w-[86rem] w-full">
      <MapCategory title="Where we are" />
      <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 text-xl text-gray-500 dark:text-gray-400 sm:px-8 py-16">
        <section className="md:mx-auto flex max-w-[86rem] flex-col items-start justify-center gap-16 md:flex-row mx-4 mb-8">
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
