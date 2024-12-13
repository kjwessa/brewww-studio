import { ContactForm } from '../ContactForm'
import { CoolButton } from '@/components/CoolButton/index'
import { Section } from '@/components/layout/Section'

export function ContactFormSection() {
  return (
    <Section theme="inherit" background="default">
      <div className="bg-brand-dark-bg w-full px-2 pb-28 text-black min-[1450px]:pr-20 min-[1450px]:pb-40 min-[1450px]:pl-20 min-[1800px]:pr-40 min-[1800px]:pl-40 min-[2100px]:pr-60 min-[2100px]:pb-48 min-[2100px]:pl-60 sm:pr-6 sm:pl-6 lg:pb-32 xl:pr-12 xl:pl-12">
        <div className="flex w-full flex-wrap justify-between lg:-mt-4">
          <div className="order-1 mb-10 w-full px-2 lg:mb-0 lg:w-[31.25%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="mb-5 w-full pr-5 text-lg font-light text-zinc-400 lg:max-w-sm lg:pr-0">
              <p className="text-body-medium mb-6">
                For general inquiries, please fill out the form to get in touch. Alternatively, if
                you know your project details — head over to our project planner for a more refined
                step-by-step process.
              </p>
            </div>
            <CoolButton text="Go to Project Planner" showIcon={true} />
            <div className="text-label-large mt-6 flex w-full flex-col xl:flex-row">
              <div className="font-light text-zinc-400">Hate contact forms?</div>
              <a
                className="text-white xl:relative xl:mr-0 xl:ml-4 xl:inline-block"
                href="mailto:hello@brewww.studio"
              >
                hello@brewww.studio
              </a>
            </div>
          </div>
          <div className="order-2 mb-10 w-full px-2 lg:mb-0 lg:w-[62.5%] lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  )
}
