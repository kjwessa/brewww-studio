import { Project } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import { Title } from '../Title'
import { Text } from '../Text'

export type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative w-full text-white">
      <Link href={`/work/${project.slug}`} className="relative flex flex-col items-start">
        <div className="relative mb-6 w-full cursor-pointer overflow-hidden">
          <div className="absolute top-0 right-0 z-20 pt-1 pb-3 pl-3">
            <div className="text-label-small -mr-2 -mb-2 flex flex-wrap items-center text-white lg:-mb-3">
              <div className="mr-2 mb-2 rounded-full bg-zinc-800 px-4 pt-2 pb-1.5 lg:mr-3 lg:mb-3">
                Branding
              </div>
              <div className="mr-2 mb-2 rounded-full bg-zinc-800 px-4 pt-2 pb-1.5 lg:mr-3 lg:mb-3">
                Website
              </div>
              <div className="mr-2 mb-2 hidden rounded-full bg-zinc-800 px-4 pt-2 pb-1.5 lg:mr-3 lg:mb-3 lg:inline-flex">
                SEO
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg bg-zinc-800 text-black">
            <div className="relative w-full overflow-hidden">
              <div className="w-full">
                <div className="relative w-full overflow-hidden pb-[75%]">
                  <Image
                    src={
                      typeof project.image === 'string'
                        ? project.image
                        : project.image?.sizes?.full?.url || project.image?.url || ''
                    }
                    alt={
                      (typeof project.image === 'object' && project.image?.alt) ||
                      project.title ||
                      ''
                    }
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 flex cursor-pointer items-center text-zinc-400">
          <Text level="p" size="label-large" className="flex items-center font-light">
            <span>2023</span>
            <span className="mx-3">/</span>
            <span>{project.title}</span>
          </Text>
        </div>

        <Title el="h3" size="title-medium" className="max-w-2xl leading-none">
          {project.tagline}
        </Title>
      </Link>
    </div>
  )
}
