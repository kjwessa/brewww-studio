import { ContactForm } from "../ContactForm";

export function ContactFormSection() {
  return (
    <section className="w-full bg-brand-dark-bg pb-28 text-black lg:pb-32 min-[1450px]:pb-40 min-[2100px]:pb-48">
      <div className="px-2 sm:pl-6 sm:pr-6 xl:pl-12 xl:pr-12 min-[1450px]:pl-20 min-[1450px]:pr-20 min-[1800px]:pl-40 min-[1800px]:pr-40 min-[2100px]:pl-60 min-[2100px]:pr-60">
        <div className="flex w-full flex-wrap justify-between lg:-mt-4">
          <div className="order-1 mb-10 w-full px-2 lg:mb-0 lg:w-[31.25%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <div className="mb-5 w-full pr-5 text-lg font-light text-zinc-400 lg:max-w-sm lg:pr-0">
              <p className="mb-6">
                For general enquiries, please fill out the form to get in touch.
                Alternatively, if you know your project details — head over to
                our project planner for a more refined step-by-step process.
              </p>
            </div>

            <div className="mt-6 flex w-full flex-col xl:flex-row">
              <div className="font-light text-zinc-400">
                Hate contact forms?
              </div>
              <a
                className="text-white xl:relative xl:ml-4 xl:mr-0 xl:inline-block"
                href="mailto:hello@brewww.studio"
              >
                hello@brewww.studio
              </a>
            </div>
          </div>
          <div className="order-2 mb-10 w-full px-2 lg:mb-0 lg:w-[62.5%] lg:pl-3 lg:pr-3 xl:pl-4 xl:pr-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
