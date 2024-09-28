import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-900 text-white shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo/Title */}
        <div className="text-2xl font-bold uppercase tracking-wide">
          My Portfolio
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              aria-label="Go to home page"
              className={`hover:text-gray-400 transition-colors duration-300 text-lg font-medium ${
                location.pathname === "/" ? "text-gray-400" : "text-white"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="Go to about page"
              className={`hover:text-gray-400 transition-colors duration-300 text-lg font-medium ${
                location.pathname === "/about" ? "text-gray-400" : "text-white"
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              aria-label="Go to projects page"
              className={`hover:text-gray-400 transition-colors duration-300 text-lg font-medium ${
                location.pathname === "/projects"
                  ? "text-gray-400"
                  : "text-white"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experiences"
              aria-label="Go to experiences page"
              className={`hover:text-gray-400 transition-colors duration-300 text-lg font-medium ${
                location.pathname === "/experiences"
                  ? "text-gray-400"
                  : "text-white"
              }`}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              aria-label="Go to contact page"
              className={`hover:text-gray-400 transition-colors duration-300 text-lg font-medium ${
                location.pathname === "/contact"
                  ? "text-gray-400"
                  : "text-white"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
