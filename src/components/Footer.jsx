import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 flex flex-col mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm text-gray-400 flex-1 text-center">
          &copy; 2024 My Portfolio. All rights reserved.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-6 mr-4">
          <a
            href="https://www.linkedin.com/in/asad-ur-rehman-0b7870202"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Asadur-Rehman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300 text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
