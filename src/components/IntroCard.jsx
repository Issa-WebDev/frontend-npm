export default function IntroCard() {
  const members = [
    {
      name: "Dr TRAORE Adama",
      role: "CEO | Pharmacien titulaire",
      image: "/ceo-profil.webp",
      description:
        "Dr TRAORE Adama, PharmD - PhD Dermo-cosmétologie est un ancien Interne des Hôpitaux. Le choix de l’industrie l’a amené à travailler durant 23 ans à Paris pour les leaders de la cosmétique tels que Chanel, l'Oréal, LVMH, Seppic, J&J, Galderma.",
      color: "#1d375e",
    },
    {
      name: "CONSEILS",
      role: "",
      image: "/conseil.jpg",
      description:
        "Sous la responsabilité de Dr TRAORE, le VISA KLC ambitionne d'encadrer la formation des parapharmaciens en passant par la recommandation de programmes de soins et/ou des routines adéquates.",
      color: "#396dba",
    },
    {
      name: "PARA-PHARMACIE",
      role: "",
      image: "/para.jpg",
      description:
        "Sous la responsabilité de Dr TRAORE, le VISA KLC ambitionne d'encadrer la formation des parapharmaciens en passant par la recommandation de programmes de soins et/ou des routines adéquates.",
      color: "#395e97",
    },
  ];

  return (
    <section className="px-4 md:w-[80%] w-[90%]  ">
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="px-4 lg:py-8 py-4 flex flex-col items-center text-white text-left md:text-center"
            style={{ background: member.color }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold pb-2">{member.name}</h3>
            <span className="text-md px-10 pb-4">{member.role}</span>
            <p className="text-sm px-2 md:px-10 pb-4">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
