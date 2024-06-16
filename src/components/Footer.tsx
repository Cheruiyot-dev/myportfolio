

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Past Work", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact Me", href: "/contact" },
  ];
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <ul className="flex flex-wrap space-x-4text-white ">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="px-2 text-white hover:text-gray-400"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                cheruiyottallan@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p > <a  href="tel:+254798057343">+254798057343</a></p>
             
            </div>
      </div>
    </footer>
  );
};

export default Footer;
