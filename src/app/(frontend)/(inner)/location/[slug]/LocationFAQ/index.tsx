import { AccordionCard } from "@/components/AccordionCard";
import { Faq } from "@/payload-types";
import { Title } from "@/components/Title";

export function LocationFAQ({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="w-full bg-brand-dark-bg py-32 text-white lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 w-full lg:mb-0 lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <div className="flex flex-col items-start">
                <h2 className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">
                    Anything else?
                  </div>
                </h2>
                <Title
                  el="h2"
                  size="headline-small"
                  weight="medium"
                  className="mt-5"
                >
                  The answers to your questions.
                </Title>
                <div className="relative mt-8 inline-flex items-center">
                  <a
                    className="inline-flex"
                    href=""
                    style={{
                      outlineOffset: "2px",
                    }}
                  >
                    <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                      <div className="inline-flex">View all FAQs</div>
                    </div>
                    <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold" />
                  </a>
                  <div className="absolute right-0 top-0 z-20 flex h-9 w-9 items-center justify-center">
                    <div className="relative overflow-hidden">
                      <div>
                        <svg
                          className="h-3 w-3"
                          fill="rgb(1, 2, 2)"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                            fill="rgb(1, 2, 2)"
                          />
                        </svg>
                      </div>
                      <div className="absolute left-0 top-0">
                        <svg
                          className="h-3 w-3"
                          fill="rgb(1, 2, 2)"
                          viewBox="0 0 384 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M328 96h24v288h-48V177.9L81 401l-17 17-33.9-34 17-17 223-223H64V96h264z"
                            fill="rgb(1, 2, 2)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="w-full">
              {faqs.map((faq) => (
                <AccordionCard key={faq.id} props={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}