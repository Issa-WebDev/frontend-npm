import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [showExpertise, setShowExpertise] = useState(false);
  const [showPharma, setShowPharma] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPharmaLink, setSelectedPharmaLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Cache la nav secondaire si on quitte les pages parapharma
    const parapharmaPaths = [
      "/credo",
      "/ingredients",
      "/routines",
      "/produits",
      "/cosmetovigilance",
    ];
    if (!parapharmaPaths.includes(location.pathname)) {
      setSelectedPharmaLink(null);
    } else {
      setSelectedPharmaLink(location.pathname);
    }
  }, [location.pathname]);

  return (
    <nav className="bg-[#6A874C] text-white shadow sticky top-0 z-100">
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex justify-between items-center">
        {/* LOGO */}
        <div></div>

        <Link
          to="/"
          className={`absolute left-0  text-sm font-bold text-white  ${
            selectedPharmaLink
              ? "md:w-[100px] md:h-[100px] w-[70px] h-[60px]"
              : "md:w-[150px] md:h-[150px] w-[100px] h-[90px]"
          }`}
        >
          <img
            src={selectedPharmaLink ? "logok.png" : "logonpm.png"}
            alt="Logo de la nouvelle pharmacie mpouto"
          />
        </Link>

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
                  onClick={() => setSelectedPharmaLink("/credo")}
                >
                  Notre credo KLC
                </Link>
                <Link
                  to="/ingredients"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                  onClick={() => setSelectedPharmaLink("/ingredients")}
                >
                  Ingrédients
                </Link>
                <Link
                  to="/routines"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                  onClick={() => setSelectedPharmaLink("/routines")}
                >
                  Routines
                </Link>
                <Link
                  to="/produits"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                  onClick={() => setSelectedPharmaLink("/produits")}
                >
                  Produits
                </Link>
                <Link
                  to="/cosmetovigilance"
                  className="block px-4 py-2 hover:bg-[#EAD72A]"
                  onClick={() => setSelectedPharmaLink("/cosmetovigilance")}
                >
                  Cosmétovigilance
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact">
            <button className="bg-[#EAD72A] rounded-[0.2rem] hover:opacity-90 font-bold text-gray-700 px-4 py-2 transition cursor-pointer">
              Contact
            </button>
          </Link>

          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/nouvellepharmaciempouto/"
              className="text-[#FFFFFF] hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/106560898/admin/dashboard/"
              className="text-[#FFFFFF] hover:text-blue-700"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPharmaLink && (
          <motion.div
            className="bg-[#EAD72A] text-black z-50  border-t border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <div className="max-w-7xl mx-auto px-4 flex justify-between py-2">
              <div className="flex gap-x-4 gap-y-3 flex-wrap text-sm">
                <Link to="/credo" className="hover:underline whitespace-nowrap">
                  Notre credo KLC
                </Link>
                <Link
                  to="/ingredients"
                  className="hover:underline whitespace-nowrap"
                >
                  Ingrédients
                </Link>
                <Link
                  to="/routines"
                  className="hover:underline whitespace-nowrap"
                >
                  Routines
                </Link>
                <Link
                  to="/produits"
                  className="hover:underline whitespace-nowrap"
                >
                  Produits
                </Link>
                <Link
                  to="/cosmetovigilance"
                  className="hover:underline whitespace-nowrap"
                >
                  Cosmétovigilance
                </Link>
              </div>
              <div></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pb-6">
          <div className="flex flex-col gap-4 text-sm  pt-4 border-t border-white/20">
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
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Conseils
              </Link>
              <Link
                to="/medicaments"
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
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
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Notre credo KLC
              </Link>
              <Link
                to="/ingredients"
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ingrédients
              </Link>
              <Link
                to="/routines"
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Routines
              </Link>
              <Link
                to="/produits"
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/cosmetovigilance"
                className="block pl-4 py-1 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cosmétovigilance
              </Link>
            </div>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-[#EAD72A] w-full rounded-[0.5rem] hover:opacity-90 font-bold text-gray-700 px-4 py-2 transition mt-2 cursor-pointer">
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
