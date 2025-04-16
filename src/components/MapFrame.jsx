export default function MapFrame() {
  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#1d2f4c] mb-6 text-center">
          OU NOUS TROUVEZ ?
        </h2>
        <div className="w-full h-[400px] overflow-hidden shadow-lg">
          <iframe
            title="Localisation de la nouvelle Pharmacie Mpouto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.578593231668!2d-3.951582225256716!3d5.32822759465029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ed23864fbf61%3A0x5b938905a7c0c472!2sNOUVELLE%20PHARMACIE%20M&#39;POUTO!5e0!3m2!1sfr!2sci!4v1744798914534!5m2!1sfr!2sci"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

