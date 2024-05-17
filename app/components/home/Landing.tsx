import Image from "next/image";

export function Landing() {
  return (
    <section className="flex min-h-dvh w-full flex-row items-center justify-center">
      <div>
        <Image
          src="/images/brewww_mark.png"
          width={256}
          height={256}
          alt="Brewww Studio logo"
        />
      </div>
    </section>
  );
}
