import Title from "@/components/Title";
import Link from "next/link";
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
    <div className="w-full max-w-5xl">
      <Title title="Contact Us" />
      <p className="mb-8 text-left font-light text-gray-500 dark:text-gray-400 sm:text-xl">
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
            className="xs:text-md w-[200px] cursor-pointer rounded-full bg-cyan-400 py-3 text-center text-sm font-semibold text-white transition duration-100 ease-in hover:bg-green-400 focus:outline-none"
          >
            Send message
          </button>
          <label
            htmlFor="cv"
            className="xs:text-md w-[200px] cursor-pointer rounded-full bg-cyan-400 py-3 text-center text-sm font-semibold text-white transition duration-100 ease-in hover:bg-green-400 focus:outline-none"
          >
            Upload CV
            <input
              type="file"
              id="cv"
              accept="application/pdf"
              className="hidden"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

const ConnectCard = () => {
  return (
    <div className="h-full w-full max-w-5xl">
      <Title title="Connect with us" />
      <div className="flex h-full flex-col items-start gap-8 rounded-xl bg-cyan-600 p-4 md:p-8">
        <div className="text-[#f6f1eb]">
          <div className="mb-6 mt-8 flex gap-4">
            <AiOutlinePhone className="h-6 w-6" />
            <Link
              href="tel:+302109960971"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+30) 210 9960971
            </Link>
          </div>
          <div className="mb-6 flex gap-4">
            <AiOutlinePhone className="h-6 w-6" />
            <Link
              href="fax:+302109969578"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+30) 210 9969578
            </Link>
          </div>
          <div className="mb-6 flex gap-4">
            <AiOutlineMail className="h-6 w-6" />
            <Link
              href="mailto:medworkinfo@medwork.gr"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              medworkinfo@medwork.gr
            </Link>
          </div>
          <div className="flex gap-4">
            <AiOutlineEnvironment className="h-6 w-6" />
            <Link
              href="https://goo.gl/maps/KDKk5piro9Cb6AXG7"
              className="text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chiou 5, Argyroupoli 16452
            </Link>
          </div>
        </div>
        <iframe
          src="https://maps.google.com/maps?q=Chiou5,Argyroupoli16452&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-full max-h-96 w-full rounded-lg shadow-xl"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="mx-auto my-8 flex max-w-[86em] flex-col items-start justify-center gap-16 md:flex-row lg:my-16">
      <ConnectCard />
      <ContactForm />
    </section>
  );
};

export default Contact;
