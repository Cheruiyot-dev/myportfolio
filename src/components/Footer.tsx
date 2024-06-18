const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Past Work", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact Me", href: "/contact" },
  ];
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <ul className="flex flex-wrap justify-center space-x-4 text-white mb-4">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="px-2 text-white hover:text-gray-400"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="lg:w-1/2 px-6 text-center">
          <a className="text-indigo-400 leading-relaxed">
            cheruiyottallan@gmail.com
          </a>
          <p>
            <a href="tel:+254798057343">+254798057343</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;