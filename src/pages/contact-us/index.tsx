import Title from "@/components/Title";
import { useState } from "react";
import {
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, subject, message);
  };

  return (
    <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
      <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
        You are always welcome to send us your CV and tell us about yourself.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-[#eae4dd] p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="name@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-[#eae4dd] p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="block w-full rounded-lg border border-gray-300 bg-[#eae4dd] p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
          >
            Send message
          </button>
          <button
            type="submit"
            className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
          >
            Upload CV
          </button>
        </div>
      </form>
    </div>
  );
};

const ConnectCard = () => {
  return (
    <div className="text: flex items-center justify-center">
      <div className="m-4 flex h-[356px] w-full flex-col items-center space-x-5 rounded-xl bg-[#1a2188] p-8 text-gray-300 shadow-md md:m-8 md:max-w-[456px] md:flex-row">
        <div className="p-4 md:p-8">
          <Title title="Connect with us" />
          <div className="mx-8 mb-6 mt-8 flex space-x-3">
            <AiOutlinePhone className="h-6 w-6" />
            <a href="tel:+302109960971" className="text-sm">
              (+30) 210 9960971
            </a>
          </div>
          <div className="mx-8 mb-6 flex space-x-3">
            <AiOutlinePhone className="h-6 w-6" />
            <a href="fax:+302109969578" className="text-sm">
              (+30) 210 9969578
            </a>
          </div>
          <div className="mx-8 mb-6 flex space-x-3">
            <AiOutlineMail className="h-6 w-6" />
            <a href="mailto:medworkinfo@medwork.gr" className="text-sm">
              medworkinfo@medwork.gr
            </a>
          </div>
          <div className="mx-8 flex space-x-3">
            <AiOutlineEnvironment className="h-6 w-6" />
            <div className="text-sm">Chiou 5, Argyroupoli 16452</div>
          </div>
        </div>
        <div className="mx-0 my-2 md:mx-2 md:my-0"></div>
        <iframe
          src="https://maps.google.com/maps?q=Chiou5,Argyroupoli16452&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-64 w-full rounded-lg shadow-md"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="flex flex-col gap-24">
      <ConnectCard />
      <ContactForm />
    </section>
  );
};

export default Contact;
