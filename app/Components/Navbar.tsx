"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"; // Asegúrate de tener este archivo CSS
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg min-h-[60px] pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center font-semibold text-4xl text-black"
            >
              <span className="font-semibold text-4xl text-black">
                <span className="text-red-600">T</span>ransfren.
                <p className="ms-[6.5px] font-thin text-sm text-gray-400">
                  Frenos y embragues
                </p>
              </span>
            </Link>
          </div>
          {/* Hamburger Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Navigation Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              href="servicios"
              className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-medium"
            >
              Servicios
            </Link>
            <Link
              href="aboutus"
              className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-lg font-medium"
            >
              Nosotros
            </Link>
            <Image
            className="mt-1"
            src="/sinfondo2.png"
            width={65}
            height={65}
            alt="Logo transfren"
            quality={100}
          ></Image>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${isOpen ? styles.menuOpen : styles.menuClosed} sm:hidden`}
        id="mobile-menu"
        ref={menuRef}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="servicios"
            className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/aboutus"
            className="text-black hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
