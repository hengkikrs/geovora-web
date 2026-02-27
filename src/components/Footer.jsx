import { Map, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Map className="w-6 h-6 text-teal" />
          <span className="text-xl font-bold tracking-tight text-navy">
            GeoVora
          </span>
        </div>

        <div className="flex items-center gap-6 text-gray-500">
          <a
            href="mailto:halo@geovora.dummy"
            className="hover:text-teal transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">halo@geovora.com</span>
          </a>
          <a href="#" className="hover:text-teal transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GeoVora. Hak cipta dilindungi
          undang-undang.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
