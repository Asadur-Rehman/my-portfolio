import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Experiences = () => {
  return (
    <section className="container mx-auto py-20 px-6 lg:px-24">
      {/* Experiences Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10 lg:p-16 mb-20">
        <h3 className="text-4xl font-extrabold mb-12 text-gray-800">
          Experiences
        </h3>
        <div className="relative border-l-4 border-gradient-to-b from-blue-500 to-blue-300 pl-10 space-y-16">
          {/* Experience 1 */}
          <div className="relative group hover:bg-gradient-to-r from-blue-50 via-blue-100 to-white rounded-xl shadow-lg transition-all duration-500 p-10 transform hover:scale-105 hover:shadow-2xl">
            <FaLaptopCode className="text-blue-600 text-4xl absolute left-[-2.5rem] top-1 group-hover:scale-125 transition-transform duration-300" />
            <h4 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
              MERN Stack Development Intern - Eon Intelligence
            </h4>
            <span className="text-sm text-gray-500 mb-2 block">
              July 2024 - Onwards
            </span>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently working on building and maintaining MERN stack
              applications, focusing on both front-end and back-end development
              to create scalable solutions.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="relative group hover:bg-gradient-to-r from-blue-50 via-blue-100 to-white rounded-xl shadow-lg transition-all duration-500 p-10 transform hover:scale-105 hover:shadow-2xl">
            <FaBriefcase className="text-blue-600 text-4xl absolute left-[-2.5rem] top-1 group-hover:scale-125 transition-transform duration-300" />
            <h4 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
              Web Development and Designing Intern - Oasis Infobyte
            </h4>
            <span className="text-sm text-gray-500 mb-2 block">
              July 2023 - August 2023
            </span>
            <p className="text-lg text-gray-700 leading-relaxed">
              Gained hands-on experience in web development and design,
              contributing to various projects and enhancing my skills in
              front-end technologies.
            </p>
          </div>

          {/* Add more experiences as needed */}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10 lg:p-16 mb-20">
        <h3 className="text-4xl font-extrabold mb-12 text-gray-800">
          Technologies
        </h3>
        <div className="space-y-6">
          {/* Technology 1 */}
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCode className="text-blue-600 text-4xl transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                Programming Languages
              </h4>
              <p className="text-lg text-gray-700">
                Python, C/C++, Java, JavaScript, Solidity
              </p>
            </div>
          </div>

          {/* Technology 2 */}
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <FaCode className="text-green-600 text-4xl transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                Testing and Version Control
              </h4>
              <p className="text-lg text-gray-700">
                Junit Testing, Jest, Playwright, Selenium, Git, Github
              </p>
            </div>
          </div>

          {/* Add more technologies as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
