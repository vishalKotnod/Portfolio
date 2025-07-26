import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/95 fixed top-0 left-0 w-full z-50 shadow-sm border-b border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
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
          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-4 ml-8">
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
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link
            to="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            Skills
          </Link>
          <Link
            to="/internships"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            Internships
          </Link>
          <Link
            to="/projects"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            to="/education"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            Education
          </Link>
          <Link
            to="/hobbies"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition"
          >
            Hobbies
          </Link>
        </div>
      </div>
    </nav>
  );
}
