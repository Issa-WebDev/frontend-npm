import Hero from "../components/Hero";
import Contact from "../components/Contact";
// import VideoDemo from "../components/VideoDemo";
import { motion } from "framer-motion";
import CareHeart from "../components/CareHeart";
import Serment from "../components/Serment";
import EquipesComponent from "../components/EquipesComponent";


export default function Home() {
  return (
    <div>
      <Hero />
      <CareHeart />
      <Serment />
      <EquipesComponent />

      {/* Le reste de la Home */}
      {/* <VideoDemo /> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
