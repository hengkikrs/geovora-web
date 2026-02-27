import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Map } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Portofolio", path: "/portofolio" },
    { name: "Download", path: "/download" },
    { name: "Layanan", path: "/layanan" },
    { name: "Tentang", path: "/tentang" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Map className="w-8 h-8 text-teal group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-bold tracking-tight text-navy">
            GeoVora
          </span>
        </Link>

        {/* Tombol Admin DIHAPUS dari sini agar tersembunyi */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${location.pathname === link.path ? "text-teal font-semibold" : "text-gray-600 hover:text-teal"} transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-teal font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
