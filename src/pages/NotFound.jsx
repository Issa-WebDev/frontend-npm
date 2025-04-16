// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <img
        src="404-Error-Animation-4.gif"
        alt="Alien Lost"
        className="w-72 h-72 mb-6"
      />
      <p className="text-2xl mt-4 mb-6">Oups... Cette page n'existe pas 😥</p>
      <Link
        to="/"
        className="bg-[#00B583] text-white font-bold px-6 py-2 rounded-[0.5rem] hover:opacity-90 transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
