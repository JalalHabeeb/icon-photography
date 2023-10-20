import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-center gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
            <p className="mb-4 font-semibold text-black-500 md:mb-6 md:text-lg xl:text-xl">
              Capture your special moments with
            </p>

            <h1 className="mb-2 text-4xl font-bold text-golden sm:text-5xl md:text-6xl">
              ICON
            </h1>
            <h2 className="mb-8 text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
              Photo &amp; Video Services
            </h2>
          </div>

          <div className="h-48 overflow-hidden rounded-lg lg:h-96 xl:w-9/12 bg-[url('/assets/images/hero.jpg')] bg-cover bg-no-repeat bg-center drop-shadow-lg">
            <Image
              src="/assets/images/border.png"
              alt="Hero Image"
              className="h-full w-full object-cover object-center "
              width={600}
              height={600}
            />
          </div>
        </section>

        <div className="flex flex-col justify-around gap-2.5 sm:flex-row">
          <Link
            href="#"
            className="inline-block rounded-lg bg-golden px-8 py-3 text-center text-sm font-semibold text-slate-900 ring-indigo-300 transition duration-100 hover:bg-slate-700 hover:text-white hover:drop-shadow-lg focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Book Appointment Now
          </Link>

          <Link
            href="#"
            className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-slate-900 outline-none ring-indigo-300 transition duration-100 hover:bg-slate-700 hover:text-white hover:drop-shadow-lg focus-visible:ring active:text-gray-700 md:text-base"
          >
            Check Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
