import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface ProposalSectionProps {
  onYes: () => void;
}

const ProposalSection = ({ onYes }: ProposalSectionProps) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const noMessages = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again…",
    "You can't escape this 🌙",
    "The moon says yes",
    "Try again 😏",
    "Nope, not an option",
  ];

  const moveNoButton = useCallback(() => {
    // Smaller range on mobile
    const range = window.innerWidth < 640 ? 120 : 250;
    const rangeY = window.innerWidth < 640 ? 100 : 200;
    const x = (Math.random() - 0.5) * range;
    const y = (Math.random() - 0.5) * rangeY;
    setNoPosition({ x, y });
    setNoAttempts((prev) => prev + 1);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[50vmin] h-[50vmin] sm:w-[60vmin] sm:h-[60vmin] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div ref={containerRef} className="relative flex flex-col items-center gap-8 sm:gap-12 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-display italic text-2xl sm:text-3xl md:text-5xl text-center leading-snug max-w-[85vw] sm:max-w-lg"
        >
          Boitumelo, will you make it official and be my girlfriend?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[10px] sm:text-xs tracking-celestial uppercase text-muted-foreground"
        >
          The stars await your answer
        </motion.p>

        <div className="flex flex-col items-center gap-6 sm:gap-8 mt-6 sm:mt-8 relative min-h-[140px] sm:min-h-[120px] min-w-[250px] sm:min-w-[300px] justify-center">
          {/* Yes button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="px-10 sm:px-14 py-4 sm:py-5 bg-foreground text-background rounded-full font-display text-lg sm:text-xl italic yes-button-glow animate-pulse-glow cursor-pointer border-none"
          >
            Yes, I will.
          </motion.button>

          {/* Elusive No button */}
          <motion.button
            onHoverStart={moveNoButton}
            onTouchStart={moveNoButton}
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="px-6 sm:px-8 py-3 sm:py-4 border border-foreground/20 rounded-full text-xs sm:text-sm text-muted-foreground cursor-pointer bg-transparent hover:opacity-30"
          >
            {noMessages[noAttempts % noMessages.length]}
          </motion.button>
        </div>

        {noAttempts > 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-[10px] sm:text-xs text-muted-foreground italic font-display"
          >
            The moon cannot be denied…
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ProposalSection;
