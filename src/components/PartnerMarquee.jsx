
const partners = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo10.png",
  "/logo11.png",
  "/logo12.png",
  "/logo13.png",
  "/logo14.png",
  "/logo15.png",
  "/logo16.webp",
  "/logo17.png",
  "/logo18.png",
  "/logo19.webp",
  "/logo20.png",
  "/logo21.png",
  "/logo22.jpeg",
  "/logo23.jpeg",
  "/logo24.png",
  "/logo25.png",
//   "/logo23.png",
];

export default function PartnerMarquee() {
  return (
    <section className="bg-[#f4f4f4] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-6">
          NOS PARTENAIRES ASSURANCE
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-marquee hover:[animation-play-state:paused]">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="min-w-[150px] h-[100px] bg-white rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt={`Partenaire ${index + 1}`}
                  className="max-h-[60%] max-w-[80%] object-contain"
                />
              </div>
            ))}
            {/* Double pour effet loop */}
            {partners.map((logo, index) => (
              <div
                key={`loop-${index}`}
                className="min-w-[150px] h-[100px] bg-white rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo}
                  alt={`Partenaire ${index + 1}`}
                  className="max-h-[60%] max-w-[80%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
