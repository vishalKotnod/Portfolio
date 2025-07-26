import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 fixed top-0 left-0 w-full z-50 shadow-sm border-b border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col shrink-0">
            <span
              className="text-l font-semibold text-gray-100"
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                letterSpacing: "0.06em",
              }}
            >
              Vishal <span className="text-blue-500">Kotnod</span>
            </span>
            <span
              className="text-xs text-gray-400 -mt-1"
              style={{
                fontFamily: "'Pacifico', cursive",
                letterSpacing: "0.08em",
              }}
            >
              aspiring developer
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:space-x-4 flex-1 justify-start">
            <Link
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="/Skills"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              Skills
            </Link>
            <Link
              to="/internships"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              Internships
            </Link>
            <Link
              to="/projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              Projects
            </Link>
            <Link
              to="/Education"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              Education
            </Link>
            <Link
              to="/hobbies"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            >
              Hobbies
            </Link>
          </div>

          {/* Hamburger Button - visible only on small screens */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {/* Icon */}
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                // X icon when open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - togglable */}
      <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            onClick={() => setMenuOpen(false)} // close menu on link click
          >
            About
          </Link>
          <Link
            to="/skills"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/internships"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Internships
          </Link>
          <Link
            to="/projects"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/education"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/hobbies"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Hobbies
          </Link>
        </div>
      </div>
    </nav>
  );
}
