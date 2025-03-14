"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import DropServices from "../DropServices/DropServices";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleInput = () => {
    router.push("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md flex">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/">
            <div className="cursor-pointer lg:ml-16 ml-0" onClick={handleInput}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={140}
                height={60}
              />
            </div>
          </Link>

          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            <GiHamburgerMenu
              className="text-3xl text-sky-400"
              aria-label="Toggle menu"
            />
          </div>

          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-6 absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 shadow-md md:shadow-none z-20 transition-all duration-300 items-center justify-center text-center text-sm font-semibold`}
            role="navigation"
          >
            <li
              key="Services"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <Link
                href="./Services"
                className={`${
                  pathname === "/Services" ? "text-sky-400" : "text-gray-700"
                } hover:text-sky-500 transition duration-300 flex py-2 justify-center`}
              >
                Services
                <IoMdArrowDropdown className="relative mt-1" />
              </Link>

              {isServicesHovered && (
                <div
                  className={`absolute ${
                    isMenuOpen ? "left-1/2 transform -translate-x-1/2" : "left-0"
                  } w-[100%] bg-white shadow-lg top-16`}
                >
                  <DropServices />
                </div>
              )}
            </li>
            <li key="Industries">
              <Link
                href="./Industries"
                className={`${
                  pathname === "/Industries" ? "text-sky-400" : "text-gray-700"
                } hover:text-sky-500 transition duration-300 block py-2`}
              >
                Industries
              </Link>
            </li>
            <li key="work">
              <Link
                href="./work"
                className={`${
                  pathname === "/work" ? "text-sky-400" : "text-gray-700"
                } hover:text-sky-500 transition duration-300 block py-2`}
              >
                Work
              </Link>
            </li>
            <li key="About">
              <Link
                href="./About"
                className={`${
                  pathname === "/About" ? "text-sky-400" : "text-gray-700"
                } hover:text-sky-500 transition duration-300 block py-2`}
              >
                About Us
              </Link>
            </li>
            <li key="ContactUs">
              <Link
                href="./ContactUs"
                className={`${
                  pathname === "/ContactUs" ? "text-sky-400" : "text-gray-700"
                } hover:text-sky-500 transition duration-300 block py-2`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Email Section */}
          <div className="hidden lg:flex items-center space-x-1 cursor-pointer ">
            <Link href="mailto:invextech@gmail.com" className="cursor-pointer flex gap-2 ">
              <Image
                src="/images/Email.png"
                alt="Email Icon"
                width={20}
                height={20}
                aria-label="Email Icon"
              />
              <p className="text-gray-700 hover:text-sky-400 "> invextech@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center border border-blue-500 bg-sky-500 text-white cursor-pointer hover:bg-sky-600 transition duration-300 px-6 py-2 ml-auto">
          <p className="font-semibold">GET Estimates</p>
          <p className="text-sm whitespace-nowrap">Response in 24 hours</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;