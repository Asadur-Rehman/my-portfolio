import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons for GitHub and Live links

// Define your project data including screenshots
const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    github: "#", // Replace with actual GitHub link
    live: "#", // Replace with actual live link
    screenshot: "https://via.placeholder.com/400x300", // Replace with actual screenshot URL
  },
  {
    title: "Project 2",
    description:
      "Description of project 2. and what if the description of one project is too long as compared to others",
    github: "#", // Replace with actual GitHub link
    live: "#", // Replace with actual live link
    screenshot: "https://via.placeholder.com/400x300", // Replace with actual screenshot URL
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    github: "#", // Replace with actual GitHub link
    live: "#", // Replace with actual live link
    screenshot: "https://via.placeholder.com/400x300", // Replace with actual screenshot URL
  },
  {
    title: "Project 4",
    description:
      "Description of project 4. which is a long long long looooooong and very very very loooooooooooooong description",
    github: "#", // Replace with actual GitHub link
    live: "#", // Replace with actual live link
    screenshot: "https://via.placeholder.com/400x300", // Replace with actual screenshot URL
  },
];

const Projects = () => {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-12 relative">
      {/* Decorative soft gradient background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 opacity-10 rounded-full blur-2xl"></div>

      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-gray-800 mb-14 text-center relative z-10">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100"
          >
            {/* Project Screenshot */}
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow max-h-20 overflow-hidden transition-all duration-500 ease-in-out hover:max-h-full">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors duration-300"
              >
                <FaExternalLinkAlt className="mr-2" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
