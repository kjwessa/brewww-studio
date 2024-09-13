import BrewwwLogo from "/public/images/brewww-logotype-gold.png";

export function FooterNew() {
  return (
    <>
      <footer className="border-b-4 border-[#f8ac43] bg-[#060D0E]">
        <div className="py-12 text-lg text-white">
          <div className="m-auto w-full px-12 min-[100px]:max-w-full min-[100px]:px-16 min-[1920px]:max-w-[120rem] min-[1920px]:px-10">
            <div className="flex justify-between">
              <nav className="text-[2.13rem] leading-9">
                <div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Our Work
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Our Approach
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Our Playground
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Why Brewww
                    </a>
                  </div>
                </div>
              </nav>
              <nav className="text-lg">
                <div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Blog
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Contact
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a className="inline-block hover:underline" href="#">
                      Store
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="my-8 font-medium">
            <h2 className="text-center text-sm uppercase">
              <div className="overflow-hidden">Stay in touch</div>
            </h2>
            <div className="overflow-hidden text-8xl">
              <div className="animate-carousel flex whitespace-nowrap">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex">
                    <a className="mr-8 inline-block hover:underline" href="#">
                      Instagram
                    </a>
                    <a className="mr-8 inline-block hover:underline" href="#">
                      Facebook
                    </a>
                    <a className="mr-8 inline-block hover:underline" href="#">
                      Linkedin
                    </a>
                    <a className="mr-8 inline-block hover:underline" href="#">
                      In Person
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="m-auto w-full px-12 min-[100px]:max-w-full min-[100px]:px-16 min-[1920px]:max-w-[120rem] min-[1920px]:px-10">
            <div className="m-auto w-full">
              <img
                className="m-auto h-auto w-full max-w-full"
                src={BrewwwLogo.src}
                alt="Brewww Logo"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
