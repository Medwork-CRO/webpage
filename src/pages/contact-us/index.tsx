import ImageCategory from "@/components/ImageCategory";
import React from "react";
import happyPeople2 from "@assets/img/happy-people2.jpg";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center gap-4 place-self-center">
      <ImageCategory
        image={happyPeople2}
        title="Contact us"
        description="We can help; get in touch. Our team of experts is on hand to answer your questions."
      />
      <div className="mx-8 my-8 flex flex-col justify-between">
        <div className="overflow-hidden rounded-2xl md:flex">
          <div className="divide-y divide-gray-200 bg-white shadow-xl rounded-2xl">
            <div className="p-4 md:p-8">
              <div className="mx-8 mb-5 flex space-x-3">
                <AiOutlinePhone className="h-6 w-6 text-gray-500" />
                <a href="tel:+302109960971" className="text-sm text-gray-700">
                  (+30) 210 9960971
                </a>
              </div>
              <div className="mx-8 mb-5 flex space-x-3">
                <AiOutlinePhone className="h-6 w-6 text-gray-500" />
                <a href="fax:+302109969578" className="text-sm text-gray-700">
                  (+30) 210 9969578
                </a>
              </div>
              <div className="mx-8 mb-5 flex space-x-3">
                <AiOutlineMail className="h-6 w-6 text-gray-500" />
                <a
                  href="mailto:medworkinfo@medwork.gr"
                  className="text-sm text-gray-700"
                >
                  medworkinfo@medwork.gr
                </a>
              </div>
              <div className="mx-8 flex space-x-3">
                <AiOutlineEnvironment className="h-6 w-6 text-gray-500" />
                <div className="text-sm text-gray-700">
                  Chiou 5, Argyroupoli 16452
                </div>
              </div>
            </div>
            <div className="w-full">
              <iframe
                src="https://maps.google.com/maps?q=Chiou5,Argyroupoli16452&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
