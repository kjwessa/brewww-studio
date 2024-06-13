import Image from "next/image";

export function Landing() {
  return (
    <section className="fixed z-50 flex min-h-dvh w-full flex-row items-center justify-center bg-black">
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
