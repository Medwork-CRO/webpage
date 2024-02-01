import ImageCategory from "@/components/ImageCategory";
import MapCategory from "@/pages/contact-us/MapCategory";
import contactUs from "@assets/badimages/Contact us.jpg";

const Contact = () => {
    return (
        <div className="mx-auto flex flex-col items-center justify-between w-full">
            <ImageCategory
                textSide="right"
                image={contactUs}
                title="Contact Us"
                description=""
            />

            <MapCategory />
        </div>
    );
};

export default Contact;
