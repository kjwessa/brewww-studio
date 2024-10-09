import Image from "next/image";
export default function Page() {
  return (
    <div
      className="fixed z-50 flex min-h-dvh w-full items-center justify-center bg-brand-dark-bg pt-64" // Center the image
      style={{ marginBottom: "-100px" }}
    >
      <div className="container mx-auto">
        <div className="flex w-full flex-row items-center justify-center">
          <Image
            src="/images/brewww_mark.png"
            width={256}
            height={256}
            alt="Brewww Studio logo"
          />
        </div>
      </div>
    </div>
  );
}
