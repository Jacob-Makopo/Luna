import { motion } from "framer-motion";
import StarField from "./StarField";
import MoonParticles from "./MoonParticles";

const SuccessScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">
      <StarField />
      <MoonParticles />

      {/* Expanding moon glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 3, opacity: 0.15 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute w-[30vmin] h-[30vmin] md:w-[40vmin] md:h-[40vmin] rounded-full bg-foreground blur-3xl"
      />

      {/* Moon */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="absolute w-[25vmin] h-[25vmin] md:w-[30vmin] md:h-[30vmin] rounded-full moon-surface glow-lunar-intense"
      />

      {/* Text */}
      <div className="relative z-10 text-center px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-display italic text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 leading-tight"
        >
          The stars have aligned.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xs sm:text-sm tracking-celestial uppercase text-muted-foreground"
        >
          Check your WhatsApp 🌙
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-8 md:mt-12"
        >
          <p className="font-body text-foreground/50 text-xs sm:text-sm font-light">
            — From the one who orbits you
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessScreen;
