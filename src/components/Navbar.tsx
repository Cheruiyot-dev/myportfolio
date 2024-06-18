const Navbar = () => {
  return (
    <header className="bg-gray-900 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap  justify-between p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Allan Cheruiyot
          </a>
        </a>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-gray-300 hover:text-white mr-6 transition duration-300 py-2 px-4">
            Projects
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white mr-4 transition duration-300">
            Skills
          </a>
        </nav>

        <div className="lg:w-1/2 flex  px-6 mt-4 lg:mt-0">
          <a
            href="mailto:cheruiyottallan@gmail.com"
            className="text-gray-300 hover:text-white mr-4 transition duration-300"
          >
            cheruiyottallan@gmail.com
          </a>

          <a
            href="tel:+254798057343"
            className="text-gray-300 hover:text-white mr-4 transition duration-300"
          >
            +254798057343
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
