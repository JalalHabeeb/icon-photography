import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mx-auto flex items-center justify-between py-4 md:mb-8 md:py-8 xl:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            <Image src="/assets/icons/logo.png" width={200} height={200} />
          </Link>

          <nav className="hidden gap-12 lg:flex">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-600 hover:text-amber-600"
            >
              Home
            </Link>
            <Link
              href="/our-services"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-amber-600 active:text-indigo-700"
            >
              Services
            </Link>
            <Link
              href="/prices"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-amber-600 active:text-indigo-700"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-amber-600 active:text-indigo-700"
            >
              About
            </Link>
          </nav>

          <Link
            href="contact-us"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-amber-600 hover:text-white focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>
      </div>
    </div>
  );
};

export default Header;
