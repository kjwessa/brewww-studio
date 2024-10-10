import React from "react";
import { FAQCard } from "./AccordionCard";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { Faq } from "@/payload-types";

export default async function FAQPage() {
  const payload = await getPayloadHMR({ config: configPromise });
  const faqs = await payload.find({
    collection: "faq",
    limit: 1000,
  });

  return (
    <>
      <section className="w-full bg-brand-dark-bg py-32 text-black lg:py-40">
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
                  <h2 className="mt-5 max-w-lg text-5xl text-white">
                    The answers to your questions.
                  </h2>
                  <div className="relative mt-8 inline-flex items-center">
                    <a
                      className="inline-flex"
                      href=""
                      style={{
                        outlineOffset: "2px",
                      }}
                    >
                      <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300 px-5 py-2">
                        <div className="inline-flex">View all FAQs</div>
                      </div>
                      <div className="-ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-lime-300" />
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
                {faqs.docs.map((faq) => (
                  <FAQCard key={faq.id} props={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
