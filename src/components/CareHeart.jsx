import React from "react";

const CareHeart = () => {
  return (
    <div className="bg-[#224170] mb-10 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Logo ou image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/careheart.jpg"
            alt="Care Heart"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Texte de description */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            PRENEZ SOIN DE SON COEUR
          </h2>
          <p className="text-sm  text-gray-100 text-justify leading-7">
            Depuis près de 25 ans, des milliers de médecins dans tout l’état de
            l’Utah ont dirigé les patients vers notre centre de médicaments
            composés. Cela est dû à la combinaison de notre service
            exceptionnel, nos prix abordables et notre qualité irréprochable. À
            Medicine Center, la qualité est primordiale. Nous utilisons une
            technologie de pointe, des équipements modernes et des bases
            novatrices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareHeart;
