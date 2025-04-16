import { Link } from "react-router-dom";
import { Cross, Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1d2f4c] text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-16 text-sm text-left">
        {/* Branding */}
        <div>
          <Link to="/" className="font-bold font-[Poppins] text-white">
            <Cross className="text-[#00B583] inline" size={18} /> NOUVELLE
            PHARMACIE MPOUTO{" "}
            <Cross className="text-[#00B583] inline" size={18} />
          </Link>
          <p className="mt-2 text-gray-300">
            Votre santé, notre priorité. Nous vous accompagnons avec
            professionnalisme et bienveillance.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <div>
                <Phone size={16} className="text-[#00B583]" />
              </div>
              <p> +225 27 22 59 13 88 / 25 20 00 16 34 / 07 87 72 50 06</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Mail size={16} className="text-[#00B583]" />
              </div>
              <p>Nvellepharmaciempouto@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <MapPin size={16} className="text-[#00B583]" />
              </div>
              <p>08 BP 3436 Abidjan 08 Abidjan, Riviera4 M'Pouto Ciad Primo.</p>
            </li>
          </ul>
        </div>

        {/* Liens rapides (optionnel) */}
        <div>
          <h3 className="text-white font-semibold mb-2">Liens rapides</h3>
          <ul className="space-y-1 text-gray-300">
            <li>
              <Link to="/contact" className="hover:text-[#00B583]">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/equipe" className="hover:text-[#00B583]">
                Notre Équipe
              </Link>
            </li>
            <li>
              <Link to="/produits" className="hover:text-[#00B583]">
                Produits
              </Link>
            </li>
            <li>
              <Link to="/galerie" className="hover:text-[#00B583]">
                Galerie
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-6 py-6 pt-14">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-[#00B583] transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 text-[#00B583] transition"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-xs text-gray-400">
        <p>
          © {new Date().getFullYear()} - NOUVELLE PHARMACIE MPOUTO. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
