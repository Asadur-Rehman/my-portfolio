import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import icons for WhatsApp and Email

const Contact = () => {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-12 text-center bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-14 relative z-10">
        Contact Me
      </h2>

      {/* Background Circle Elements for Styling */}
      <div className="absolute -top-10 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 opacity-20 blur-3xl"></div>

      {/* Contact Info Card */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg border border-gray-200 z-10">
        {/* WhatsApp Contact */}
        <p className="text-lg font-medium text-gray-700 mb-6 flex items-center justify-center space-x-3">
          <FaWhatsapp className="text-green-600 text-3xl" />{" "}
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/923117080207"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-semibold text-lg hover:text-green-700 transition-colors duration-300"
          >
            +923117080207
          </a>
        </p>

        {/* Email Contact */}
        <p className="text-lg font-medium text-gray-700 flex items-center justify-center space-x-3">
          <FaEnvelope className="text-blue-600 text-3xl" /> {/* Email Icon */}
          <a
            href="mailto:aur63639@gmail.com"
            className="text-blue-700 hover:text-blue-900 font-semibold text-lg transition-colors duration-300"
          >
            aur63639@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
