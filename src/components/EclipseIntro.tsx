import { motion } from "framer-motion";

interface EclipseIntroProps {
  onStart: () => void;
}

const EclipseIntro = ({ onStart }: EclipseIntroProps) => {
  return (
    <div
      className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={onStart}
    >
      {/* Faint silver ring */}
      <div className="absolute">
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border border-foreground/10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pulsing outer ring */}
        <motion.div
          className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border border-foreground/5"
          animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      </div>

      {/* Inner glow dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-foreground/30"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tap prompt */}
      <motion.p
        className="absolute bottom-16 sm:bottom-24 font-body text-[10px] sm:text-xs tracking-celestial uppercase text-muted-foreground select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Tap to begin
      </motion.p>
    </div>
  );
};

export default EclipseIntro;
