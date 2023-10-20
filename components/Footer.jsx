import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
          {/* <!-- logo - start --> */}
          <div>
            <Link href="/" aria-label="logo">
              <Image src="/assets/icons/logo2.png" width={100} height={100} />
            </Link>
          </div>
          {/* <!-- logo - end --> */}

          {/* <!-- nav - start --> */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href="/"
              className="text-gray-500 transition duration-100 hover:text-golden active:text-indigo-600"
            >
              Home
            </Link>
            <Link
              href="/our-services"
              className="text-gray-500 transition duration-100 hover:text-golden active:text-indigo-600"
            >
              Services
            </Link>
            <Link
              href="/prices"
              className="text-gray-500 transition duration-100 hover:text-golden active:text-indigo-600"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-500 transition duration-100 hover:text-golden active:text-indigo-600"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-500 transition duration-100 hover:text-golden active:text-indigo-600"
            >
              Contact
            </Link>
          </nav>
          {/* <!-- nav - end --> */}

          {/* <!-- social - start --> */}
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/fadihaddadphotography/"
              target="_blank"
              className="social_links hover:text-blue-500"
            >
              <FaFacebook />
            </Link>

            <Link
              href="https://www.instagram.com/icon.haddad.photography/?igshid=NGExMmI2YTkyZg%3D%3D"
              target="_blank"
              className="social_links hover:text-pink-500"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCPtcJMVKSqPoBen5AkT1hzQ"
              target="_blank"
              className="social_links hover:text-red-500"
            >
              <FaYoutube />
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=+31626633846"
              target="_blank"
              className="social_links hover:text-green-500"
            >
              <FaWhatsapp />
            </Link>
          </div>
          {/* <!-- social - end --> */}
        </div>

        <div className="py-4 text-center text-sm text-gray-400">
          © 2023 - Icon Photography. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
