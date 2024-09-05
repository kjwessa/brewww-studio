import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-96 pb-4">
        <div className="overflow-hidden rounded-xl">
          <Image
            alt={`${name} profile picture`}
            className="h-[37.5rem] w-full object-cover"
            src={imageSrc}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="pt-4">
        <p>{role}</p>
        <h3 className="mt-2 text-lg font-bold">{name}</h3>
      </div>
    </div>
  );
}

export function AboutTeam() {
  return (
    <section className="bg-neutral-900 px-6 py-12 font-light text-white md:px-24 md:py-48">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          <TeamMember
            name="Kevin Wessa"
            role="Founder + Lead Engineer"
            imageSrc="/5f53f8986ce296e3d5512d59_kevin-profile-pic.1920.jpg"
          />
          <TeamMember
            name="Christine Wessa"
            role="Founder + Lead Designer"
            imageSrc="/5f53f783d20ccc4fe020678f_christine-profile-pic.1920.jpg"
          />
        </div>
      </div>
    </section>
  );
}
