import profilePic from "../assets/heroImage.png"; // Update the path to your image
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto py-20 px-6 lg:px-24">
      {/* About Section */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-white via-gray-50 to-white shadow-2xl rounded-3xl p-10 lg:p-16 mb-20 flex flex-col lg:flex-row lg:items-center lg:space-x-16 relative overflow-hidden">
        {/* Background Circle Elements for Styling */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 opacity-30 blur-3xl"></div>

        {/* About Me Text */}
        <div className="flex-1 lg:order-1">
          <h2 className="text-5xl font-extrabold mb-10 text-gray-800">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            I am a dedicated Full Stack Developer with a passion for building
            dynamic and scalable web applications. With experience in both
            front-end and back-end development, I specialize in creating
            efficient and effective solutions using modern technologies. I am
            constantly learning and adapting to new trends in the tech industry
            to deliver high-quality results.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 lg:order-2 mb-8 lg:mb-0">
          <img
            src={profilePic}
            alt="Asad ur Rehman"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-gray-200 shadow-lg"
          />
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10 lg:p-16 mb-20">
        <h3 className="text-4xl font-extrabold mb-12 text-gray-800">
          Education
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Bachelor of Engineering in Software Engineering
          <br />
          National University of Sciences and Technology, Expected Graduation:
          November 2025
        </p>
        <h4 className="text-2xl font-semibold mb-4 text-gray-900">
          Relevant Coursework:
        </h4>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Fundamentals of Programming</li>
          <li>Object-Oriented Programming</li>
          <li>Computer Architecture and Logic Design</li>
          <li>Software Engineering</li>
          <li>Data Structures and Algorithms</li>
          <li>Design and Analysis of Algorithms</li>
          <li>Software Design and Architecture</li>
          <li>Operating Systems</li>
          <li>Web Development</li>
          <li>Software Construction</li>
          <li>Cloud Computing</li>
          <li>Embedded Systems</li>
          <li>Software Quality Engineering</li>
          <li>Formal Methods</li>
          <li>Machine Learning</li>
          <li>Software Project Management</li>
        </ul>
      </div>

      {/* Certificates Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-10 lg:p-16 mb-20">
        <h3 className="text-4xl font-extrabold mb-12 text-gray-800">
          Certificates
        </h3>
        <div className="space-y-6">
          {/* Certificate 1 */}
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <FaAward className="text-yellow-600 text-4xl transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-800 transition-colors duration-300">
                Software Design Principles - Codecademy
              </h4>
              <p className="text-lg text-gray-700">Completed in May 2023</p>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <FaAward className="text-green-600 text-4xl transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                Learn the Basics of Blockchain with Python - Codecademy
              </h4>
              <p className="text-lg text-gray-700">Completed in July 2023</p>
            </div>
          </div>

          {/* Add more certificates as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
