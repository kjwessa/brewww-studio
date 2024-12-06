import { WorkCard } from '@/components/WorkCard'
import { Work } from '@/payload-types'
import { Section } from '@/components/Layout/Section'
import { Container } from '@/components/Layout/Container'
import { Title } from '@/components/Title'

export async function WorkGridSection({ projects }: { projects: Work[] }) {
  return (
    <Section theme="dark" color="default">
      <Container size="full" spacing="large">
        <div className="flex flex-wrap">
          <div className="w-full px-2 md:mt-20 md:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="mb-16 w-full lg:mb-28">
              {projects[0] && <WorkCard project={projects[0]} />}
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects[1] && <WorkCard project={projects[1]} />}
            </div>
            <div className="hidden w-full lg:flex">
              <div className="mb-10 flex w-full justify-center text-center">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-headline-small mb-5 leading-none text-white">
                    Like what <br />
                    you see?
                  </h2>
                  <div className="relative inline-flex items-center">
                    <a
                      className="inline-flex"
                      href=""
                      style={{
                        outlineOffset: '2px',
                      }}
                    >
                      <div className="bg-brand-gold inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full px-5 py-2">
                        <div className="inline-flex">Contact us</div>
                      </div>
                      <div className="bg-brand-gold -ml-1 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full" />
                    </a>
                    <div className="absolute top-0 right-0 z-20 flex h-9 w-9 items-center justify-center">
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
                        <div className="absolute top-0 left-0">
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

                  <a className="flex w-full" href="">
                    <div className="relative w-full cursor-pointer overflow-hidden pt-14">
                      <picture className="absolute top-0 left-0 h-full w-full">
                        <source
                          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/google-reviews-badge.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1702301485&s=a559fc5608bf902cd329da89be5a9b01"
                          type="image/webp"
                        />

                        <img
                          className="mt-3 h-auto w-full max-w-full"
                          src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/google-reviews-badge.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1702301485&s=a559fc5608bf902cd329da89be5a9b01"
                          alt="Google Reviews Badge"
                        />
                      </picture>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 md:w-2/4 lg:pr-3 lg:pl-3 xl:pr-4 xl:pl-4">
            <div className="mb-16 hidden w-full justify-center lg:mb-20 lg:flex">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <div className="ml-2 font-light text-white">Our Work</div>
                </div>
                <Title el="h2" size="headline-medium">
                  A few projects to explore
                </Title>
              </div>
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects[2] && <WorkCard project={projects[2]} />}
            </div>
            <div className="mb-16 w-full lg:mb-28">
              {projects[3] && <WorkCard project={projects[3]} />}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
