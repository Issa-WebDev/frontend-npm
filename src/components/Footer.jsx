import { Link } from "react-router-dom";
import { Cross, Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdMarkunreadMailbox } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#6A874C] text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-16 text-sm text-left">
        {/* Branding */}
        <div>
          <p className="mt-2 text-gray-100">
            Votre santé, notre priorité. Nous vous accompagnons avec
            professionnalisme et bienveillance.
          </p>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-gray-100">
            <li className="flex items-center gap-2">
              <div>
                <Phone size={16} className="text-white" />
              </div>
              <p className="text-[13px]"> +225 27 22 59 13 88 / 25 20 00 16 34 / 07 87 72 50 06</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <Mail size={16} className="text-white" />
              </div>
              <p>Nvellepharmaciempouto@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <MdMarkunreadMailbox size={16} className="text-white" />
              </div>
              <p>08 BP 3436 Abidjan 08 Abidjan</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <MapPin size={16} className="text-white" />
              </div>
              <p>Riviera4 M'Pouto Ciad Primo.</p>
            </li>
          </ul>
        </div>

        {/* Liens rapides (optionnel) */}
        <div>
          <h3 className="text-white font-semibold mb-2">Liens rapides</h3>
          <ul className="space-y-1 text-gray-100">
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
              href="https://www.linkedin.com/company/106560898/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-white transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/nouvellepharmaciempouto/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 text-white transition"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-6 pt-4 text-center text-xs text-gray-200">
        <p>
          © {new Date().getFullYear()} - NOUVELLE PHARMACIE MPOUTO. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
