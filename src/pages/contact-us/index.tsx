import Breadcrumbs from "@/components/Breadcrumb";
import MapCategory from "@/pages/contact-us/MapCategory";

const Contact = () => {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <MapCategory />

            <div id="main-content" className="max-w-[1200px] w-full items-left whitespace-pre-line flex flex-col mt-12 gap-16">
                <Breadcrumbs />
                <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    {/* <div className="flex flex-col items-center gap-6 whitespace-pre-line px-4 sm:px-6 text-2xl text-gray-500 dark:text-gray-400 lg:px-0 py-16">
                    <section className="md:mx-auto flex max-w-[1200px] flex-col items-start justify-center gap-16 md:flex-row mb-8">
                        <ContactForm />
                    </section>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
