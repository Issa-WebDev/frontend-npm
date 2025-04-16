import { useState } from "react";
import { Link } from "react-router-dom";
import { Cross } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [showExpertise, setShowExpertise] = useState(false);
  const [showPharma, setShowPharma] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1d2f4c] text-white shadow sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex justify-between items-center font-sans">
        {/* LOGO */}
        <Link
          to="/"
          className="absolute left-0 w-[150px] h-[150px] text-sm font-bold font-[Poppins] text-white"
        >
          <img
            src="/logonpm.png"
            className="w-full h-full"
            alt="Logo de la nouvelle pharmacie mpouto"
          />
        </Link>
        <div></div>
        {/* BURGER ICON */}
        <div className="lg:hidden">
          {!isMobileMenuOpen ? (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          ) : (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex text-sm items-center gap-6 relative">
          <Link to="/" className="transition">
            Accueil
          </Link>
          <Link to="/equipe" className="transition">
            Notre Équipe
          </Link>

          {/* NOS EXPERTISES */}
          <div
            className="relative"
            onMouseEnter={() => setShowExpertise(true)}
            onMouseLeave={() => setShowExpertise(false)}
          >
            <span className="cursor-pointer transition">Nos Expertises</span>
            {showExpertise && (
              <div className="absolute top-5 left-0 text-black bg-white rounded shadow-md p-2">
                <Link
                  to="/conseils"
                  className="block px-4 py-2 hover:bg-[#7FB23A] hover:text-white"
                >
                  Conseils
                </Link>
                <Link
                  to="/medicaments"
                  className="block px-4 py-2 hover:bg-[#7FB23A] hover:text-white"
                >
                  Médicaments
                </Link>
              </div>
            )}
          </div>

          <Link to="/galerie" className="transition">
            Notre Galerie
          </Link>

          {/* PHARMACIE */}
          <div
            className="relative"
            onMouseEnter={() => setShowPharma(true)}
            onMouseLeave={() => setShowPharma(false)}
          >
            <span className="cursor-pointer transition">ParaPharmacie</span>
            {showPharma && (
              <div className="absolute top-5 left-0 bg-white text-black rounded shadow-md p-2 w-52">
                <Link
                  to="/credo"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                >
                  Notre credo KLC
                </Link>
                <Link
                  to="/ingredients"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                >
                  Ingrédients
                </Link>
                <Link
                  to="/routines"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                >
                  Routines
                </Link>
                <Link
                  to="/produits"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                >
                  Produits
                </Link>
                <Link
                  to="/cosmetovigilance"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                >
                  Cosmétovigilance
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact">
            <button className="bg-[#7FB23A] rounded-[0.2rem] hover:opacity-90 font-bold text-white px-4 py-2 transition cursor-pointer">
              Contact
            </button>
          </Link>

          <div className="flex gap-6">
            <a href="#" className="text-[#FFFFFF] hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-[#FFFFFF] hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-6">
          <div className="flex flex-col gap-4 text-sm bg-[#1d2f4c] pt-4 border-t border-white/20">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Accueil
            </Link>

            <Link to="/equipe" onClick={() => setIsMobileMenuOpen(false)}>
              Notre Équipe
            </Link>

            <div>
              <p className="font-semibold">Nos Expertises</p>
              <Link
                to="/conseils"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Conseils
              </Link>
              <Link
                to="/medicaments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Médicaments
              </Link>
            </div>
            <Link to="/galerie" onClick={() => setIsMobileMenuOpen(false)}>
              Notre Galerie
            </Link>

            <div>
              <p className="font-semibold">ParaPharmacie</p>
              <Link
                to="/credo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Notre credo KLC
              </Link>
              <Link
                to="/ingredients"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Ingrédients
              </Link>
              <Link
                to="/routines"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Routines
              </Link>
              <Link
                to="/produits"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Produits
              </Link>
              <Link
                to="/cosmetovigilance"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-1 text-sm"
              >
                Cosmétovigilance
              </Link>
            </div>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-[#7FB23A] w-full rounded-[0.5rem] hover:opacity-90 font-bold text-white px-4 py-2 transition mt-2 cursor-pointer">
                Contact
              </button>
            </Link>

            <div className="flex gap-6 py-6">
              <a href="#" className="text-[#FFFFFF] hover:text-blue-600">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-blue-700">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
