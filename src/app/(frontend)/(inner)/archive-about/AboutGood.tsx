import Image from "next/image";

export function AboutGood() {
  return (
    <>
      <div>
        <div
          className="h-full w-full cursor-none bg-neutral-900 pl-0 pr-28 text-white"
          id="div-1"
        >
          <div
            className="flex h-screen w-full max-w-full overflow-visible"
            id="div-2"
          >
            <Image
              src="/5f53f60a0033860407ff3718_ThebyWessa2020-6960.jpg"
              width={1000}
              height={1000}
              alt="Theby Wessa 2020"
              className="h-full w-full object-cover"
              style={{
                objectPosition: "50% 50%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
