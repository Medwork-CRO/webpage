import Title from "@/components/Title";

function OurTeam() {
  return (
    <div className="mx-auto mt-16 flex max-w-[86em] flex-col items-center  justify-between text-black">
      <Title title={"CONTACT US"} />
      <div className="flex">
        <div className="w-1/3">
          Medwork is a leading pharmaceutical company, specializing in clinical,
          drug safety, and review services for global pharmaceutical,
          biotechnology, and medical device companies. Our team of experts
          brings a wealth of experience and a comprehensive portfolio of
          solutions, including clinical research support, life science
          consulting, R&D technology, pharmacovigilance, and IRB/IBC services.
          We are committed to delivering optimal outcomes for our clients trials
          and improving patient care.
        </div>
        <div className="w-2/3">
          <section>
            <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
              <form action="#" className="space-y-8">
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
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="name@flowbite.com"
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
                    className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
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
                    rows={6}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
