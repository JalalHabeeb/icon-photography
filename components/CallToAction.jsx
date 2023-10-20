import React from "react";

const CallToAction = () => {
  return (
    <div class="bg-white mt-12 pt-12">
      <div class="mx-auto max-w-screen-2xl">
        <div class="flex flex-col overflow-hidden rounded-lg sm:flex-row md:h-80  drop-shadow-lg">
          {/* <!-- image - start --> */}
          <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <img
              src="/assets/images/cta.jpg"
              loading="lazy"
              alt="Photo by Dom Hill"
              class="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}
          {/* <!-- content - start --> */}
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5 bg-slate-800">
            <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Summer Sale
              <br />
              Up to 70% off.
            </h2>

            <p class="mb-8 max-w-md text-gray-400">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>

            <div class="mt-auto">
              <a
                href="#"
                class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-golden focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Book Now
              </a>
            </div>
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
