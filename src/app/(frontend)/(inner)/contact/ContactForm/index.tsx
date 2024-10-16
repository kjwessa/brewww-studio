import { CoolButton } from "@/components/CoolButton";

export function ContactForm() {
  return (
    <>
      <form className="mx-auto max-w-3xl">
        <div className="hidden">
          <label htmlFor="honeypot">Leave this field blank</label>
          <input id="honeypot" name="honeypot" type="text" className="hidden" />
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                className="peer h-14 w-full rounded-lg border-2 border-neutral-700 bg-zinc-900 px-5 pb-2 pt-6 text-white placeholder-transparent transition duration-200 focus:border-brand-gold focus:outline-none"
                placeholder="Name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-5 top-1 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                className="peer h-14 w-full rounded-lg border-2 border-neutral-700 bg-zinc-900 px-5 pb-2 pt-6 text-white placeholder-transparent transition duration-200 focus:border-brand-gold focus:outline-none"
                placeholder="Email Address"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-5 top-1 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                className="peer h-14 w-full rounded-lg border-2 border-neutral-700 bg-zinc-900 px-5 pb-2 pt-6 text-white placeholder-transparent transition duration-200 focus:border-brand-gold focus:outline-none"
                placeholder="Phone (Optional)"
              />
              <label
                htmlFor="phone"
                className="absolute left-5 top-1 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
              >
                Phone <span className="text-neutral-500">(Optional)</span>
              </label>
            </div>
            <div className="relative">
              <select
                id="referral"
                name="referral"
                className="peer h-14 w-full appearance-none rounded-lg border-2 border-neutral-700 bg-zinc-900 px-5 pb-2 pt-6 text-white transition duration-200 focus:border-brand-gold focus:outline-none"
                defaultValue=""
                required
              >
                <option value="" disabled hidden>
                  Select One
                </option>
                <option value="google">Google</option>
                <option value="friendOrFamily">Friend or family</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
                <option value="wordOfMouth">Word of mouth</option>
                <option value="newsletter">Newsletter</option>
              </select>
              <label
                htmlFor="referral"
                className="absolute left-5 top-1 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
              >
                How did you hear about Brewww Studio?
              </label>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-400">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <textarea
              id="project"
              name="project"
              className="peer h-32 w-full resize-y rounded-lg border-2 border-neutral-700 bg-zinc-900 px-5 pb-2 pt-6 text-white placeholder-transparent transition duration-200 focus:border-brand-gold focus:outline-none"
              placeholder="Tell us about your project"
              required
            ></textarea>
            <label
              htmlFor="project"
              className="absolute left-5 top-1 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm"
            >
              Tell us about your project
            </label>
          </div>

          <div className="flex items-center">
            <div className="relative inline-flex items-center">
              <input
                id="subscribe"
                name="subscribe"
                type="checkbox"
                className="peer sr-only"
              />
              <div className="h-6 w-6 rounded border-2 border-neutral-700 bg-zinc-900 transition-colors peer-checked:border-brand-gold peer-checked:bg-brand-gold"></div>
              <svg
                className="pointer-events-none absolute left-1 top-1 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <label
              htmlFor="subscribe"
              className="ml-2 cursor-pointer text-zinc-400"
            >
              Subscribe to our newsletter for all the latest Brewww Studio goss!
            </label>
          </div>

          <p className="text-sm text-zinc-400">
            By submitting this form I accept the Privacy Policy of this site.
          </p>

          <div>
            <CoolButton text="Send Message" showIcon={false} />
          </div>
        </div>
      </form>
    </>
  );
}
