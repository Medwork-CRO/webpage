import { useState } from "react";
import Title from "../../components/Title";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, subject, message);
    };

    return (
        <div className="font-semibold leading-[2rem] sm:leading-[2rem] md:leading-[3rem] xl:leading-[4rem] text-lg sm:text-xl text-medwork-dark dark:text-medwork-light text-left">
            <Title title="Contact Us" align="left" />
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
                        id="send-message" aria-label="Send message"
                        type="submit"
                        className="cursor-pointer text-white xs:text-md max-w-full w-full rounded-full bg-blue-400 hover:bg-green-400 py-3 text-center text-sm font-semibold transition duration-100 ease-in focus:outline-none border-2 border-transparent hover:border-white"
                    >
                        Send message
                    </button>
                    <label
                        htmlFor="cv"
                        className="cursor-pointer text-white xs:text-md max-w-full w-full rounded-full bg-blue-400 hover:bg-green-400 py-3 text-center text-sm font-semibold transition duration-100 ease-in focus:outline-none border-2 border-transparent hover:border-white"
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
}

export default ContactForm;
