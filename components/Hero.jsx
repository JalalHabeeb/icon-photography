import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
            <p className="mb-4 font-semibold text-amber-500 md:mb-6 md:text-lg xl:text-xl">
              Capture your special moments with
            </p>

            <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              ICON
            </h1>
            <h2 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
              Photography and Video
            </h2>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
            <Image
              src="/assets/images/hero.jpg"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;