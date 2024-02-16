const navLinks = [
  { text: "Home", href: "/" },
  { text: "Upload", href: "/upload" },
  { text: "About Us", href: "/about-us" },
  { text: "Contact Us", href: "/contact-us" },
];

export const Navbar = () => {
  return (
    <div className="hidden md:block">
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-md">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a
                className="text-base text-gray-500 transition hover:text-gray-500/75"
                href={link.href}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
