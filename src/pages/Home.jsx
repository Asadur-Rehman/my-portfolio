import profilePic from "../assets/heroImage.png";

const Home = () => {
  return (
    <section className="container mx-auto py-20 px-6 lg:px-24 flex flex-col items-center lg:flex-row lg:items-start lg:space-x-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-lg">
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt="Asad ur Rehman"
        className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-gray-300 shadow-xl mb-8 lg:mb-0"
      />

      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide">
          Hi, I&apos;m Asad
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          I am a dedicated Full Stack Developer with hands-on experience in
          building dynamic and scalable web applications. Currently, I am
          enhancing my skills as a MERN Stack Development Intern at Eon
          Intelligence, following a rewarding internship with Oasis Infobyte.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          With a solid foundation in various programming languages, including
          Python, JavaScript, and Java, I specialize in both front-end and
          back-end development. My expertise spans across MERN stack
          technologies, SQL and NoSQL databases, and blockchain development.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I am passionate about solving complex problems and continuously
          learning new technologies. Let’s connect and see how I can help you
          with your next project!
        </p>
      </div>
    </section>
  );
};

export default Home;
