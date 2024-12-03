import { Media, Team } from '@/payload-types'
import Image from 'next/image'

export function TeamBio({ team }: { team: Team }) {
  return (
    <section className="flex w-full flex-wrap justify-between bg-brand-dark-bg py-24 text-black">
      <div className="container mx-auto flex flex-wrap">
        <div className="mb-10 w-full px-2 lg:w-[68.75%] lg:pl-3 lg:pr-3 xl:w-[75%] xl:pl-4 xl:pr-4">
          <div className="w-full">
            <h3 className="mb-3 text-[1.75rem] leading-8 text-white">
              You're the founder of Brewww Studio. How did it all start?
            </h3>
            <p className="mb-6 text-lg font-light text-zinc-400">
              My journey in the branding industry began in 2009 when I started working with
              start-ups. It was then that I realized the crucial importance of branding, quality
              websites, and clear language. In 2017, feeling the need for a career change, I took on
              a few client projects. What started as small endeavors kept growing, snowballing into
              something bigger year after year. This organic growth led to the creation of Brewww
              Studio, where we focus on crafting impactful brands and helping businesses make
              lasting impressions.
            </p>
            <h3 className="mb-3 text-[1.75rem] leading-8 text-white">
              What's your favourite thing about working at Brewww?
            </h3>
            <p className="mb-6 text-lg font-light text-zinc-400">
              Two things come to mind. The first is getting to meet incredible people and being in a
              privileged position to hear their vision. It's truly inspiring to watch their eyes
              light up as their ideas unfold. There's something magical about being part of that
              process.
            </p>
            <p className="mb-6 text-lg font-light text-zinc-400">
              The second is how this career beautifully blends work and play. It's rekindled my
              sense of curiosity and exploration, moving away from the monotony of punching a clock.
              Every day brings new challenges and opportunities, making work feel less like a job
              and more like an adventure.
            </p>
            <h3 className="mb-3 text-[1.75rem] leading-8 text-white">
              You mention that you get to really impact people's businesses. Do any projects stand
              out?
            </h3>
            <p className="mb-6 text-lg font-light text-zinc-400">
              There are obviously a lot of projects near and dear to my heart, but The Merry Beggars
              stands out. When we began working together in 2021, they had just joined Relevant
              Radio to increase their reach, beginning with two series and a small but interested
              audience. Years later, our work together impacts millions, has charted on Apple
              Podcasts, and is well received by an audience looking for original content. It's
              incredibly rewarding to see how our collaboration has helped them grow and reach such
              a wide audience.
            </p>
            <h3 className="mb-3 text-[1.75rem] leading-8 text-white">
              Have you always wanted to be a web designer/developer?
            </h3>
            <p className="mb-6 text-lg font-light text-zinc-400">
              I've always had an interest in computers, but for the longest time I saw Economics and
              Business as my path in life. Brewww was the convergence of all those interests, as I
              get to solve real business problems with tools I love. There's something unique about
              the web - unlike anything else in human history, you can make a change in code or
              design language and impact a worldwide audience of millions. The stakes are high, and
              that keeps it interesting. It's not the path I initially envisioned, but I wouldn't
              change it for anything. I'm incredibly proud of what we've created here at Brewww.
            </p>
            <h3 className="mb-3 text-[1.75rem] leading-8 text-white">
              You are a family man. Tell us more.
            </h3>
            <p className="mb-6 text-lg font-light text-zinc-400">
              My wife Christine and our three beautiful kids - James, John, and Ava - are the reason
              for everything I do and my sole motivator. I'm fortunate to have shaped a career that
              allows me to be present and provide, while also enjoying many moments with my kids
              throughout the day as they grow up. They're all artistic, and I'm always happy to
              cheer them on. This balance between work and family is what drives me and makes
              everything worthwhile.
            </p>
          </div>
          <div className="mt-5 w-full">
            <div className="relative inline-flex items-center">
              <a
                className="inline-flex"
                href=""
                style={{
                  outlineOffset: '2px',
                  outlineStyle: 'solid',
                  outlineWidth: '2px',
                }}
              >
                <div className="inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full bg-brand-gold px-5 py-2">
                  <div className="inline-flex">
                    Follow Kevin on
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="rgb(1, 2, 2)"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        fill="rgb(1, 2, 2)"
                      />
                    </svg>
                  </div>
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
        <div className="w-full px-2 lg:w-[31.25%] lg:pl-3 lg:pr-3 xl:w-1/4 xl:pl-4 xl:pr-4">
          <div className="sticky top-[2.50rem] w-full">
            <div className="w-full">
              <div className="relative flex w-full flex-wrap pl-1">
                <a className="absolute left-0 top-0 z-10 h-full w-full" href=""></a>
                <div className="absolute right-[0.75rem] top-[0.75rem] z-20 inline-flex items-center">
                  <div className="flex items-center">
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300"
                      href=""
                    >
                      <svg
                        className="h-3.5 w-3.5 cursor-pointer"
                        fill="rgb(1, 2, 2)"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          fill="rgb(1, 2, 2)"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full">
                  <div className="w-full overflow-hidden rounded-3xl bg-zinc-800">
                    <div className="relative w-full overflow-hidden pt-96">
                      <Image
                        src={(team.image as Media)?.url || ''}
                        alt={(team.image as Media)?.alt || ''}
                        layout="fill"
                        objectFit="cover"
                        quality={80}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 z-20 w-full pr-14">
                  <div className="relative inline-flex w-auto flex-wrap rounded-tr-3xl pr-5 pt-3 lg:pr-8">
                    <svg
                      className="absolute bottom-0 right-[0.13rem] h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
                      fill="rgb(14, 15, 17)"
                      version="1.1"
                      viewBox="0 0 100 100"
                      x="0"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                        fill="rgb(14, 15, 17)"
                      />
                    </svg>
                    <svg
                      className="absolute left-0 top-[0.13rem] h-10 w-10 text-neutral-950 lg:h-12 lg:w-12"
                      fill="rgb(14, 15, 17)"
                      version="1.1"
                      viewBox="0 0 100 100"
                      x="0"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"
                        fill="rgb(14, 15, 17)"
                      />
                    </svg>
                    <div>
                      <div className="text-white">Kevin</div>
                      <div className="text-sm font-light text-neutral-400">Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-white lg:mb-0 lg:mt-6">
              <a
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800"
                href=""
              >
                <svg
                  className="h-4 w-4 cursor-pointer"
                  fill="rgb(255, 255, 255)"
                  height="16"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8l-60.3-21.3c10.8-30.7 28.4-59.4 52.8-83.8 87.5-87.5 229.3-87.5 316.8 0L472 40l24 24v160H336l-24-24 57.1-57.1c-62.5-62.5-163.8-62.5-226.3 0zm0 226.3c62.5 62.5 163.8 62.5 226.3 0 17.5-17.5 30.1-38 37.8-59.8l60.4 21.3c-10.8 30.6-28.4 59.3-52.9 83.7-87.5 87.5-229.3 87.5-316.7 0L40 472l-24-24V288h160l24 24-57.1 57.1z"
                    fill="rgb(255, 255, 255)"
                  />
                </svg>
              </a>
              <div className="flex h-12 flex-grow items-center justify-center rounded-full bg-zinc-800 px-4 text-center">
                Favorite Food: Tacos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
