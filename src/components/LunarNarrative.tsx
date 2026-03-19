import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const narrativeLines = [
  { text: "The world calls you Boitumelo…", delay: 0 },
  { text: "A name that means joy.", delay: 0.2 },
  { text: "But to me, you are the moon.", delay: 0.4 },
  { text: "Luna.", isTitle: true, delay: 0.3 },
  { text: "They named you for joy,", delay: 0 },
  { text: "but I call you Luna because you are", delay: 0.15 },
  { text: "the light in my darkest hours.", delay: 0.3 },
  { text: "Every phase, every cycle,", delay: 0 },
  { text: "I want to be there.", delay: 0.2 },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const LunarNarrative = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const moonScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1.2]);
  const moonBlur = useTransform(scrollYProgress, [0, 0.4, 0.7], [20, 2, 0]);
  const moonOpacity = useTransform(scrollYProgress, [0, 0.3], [0.2, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.4]);
  const moonFilter = useTransform(moonBlur, (v) => `blur(${v}px)`);

  return (
    <section ref={containerRef} className="relative h-[400vh] z-10">
      {/* Sticky moon + text container */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Moon */}
        <motion.div
          style={{
            scale: moonScale,
            filter: moonFilter,
            opacity: moonOpacity,
          }}
          className="absolute w-[40vmin] h-[40vmin] sm:w-[50vmin] sm:h-[50vmin] rounded-full moon-surface glow-lunar"
        />

        {/* Ambient glow behind moon */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute w-[70vmin] h-[70vmin] sm:w-[80vmin] sm:h-[80vmin] rounded-full bg-primary/5 blur-3xl"
        />

        {/* Narrative text */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-[90vw] sm:max-w-xl">
          {narrativeLines.map((line, i) => (
            <motion.div
              key={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              custom={line.delay}
              className={
                line.isTitle
                  ? "font-display italic text-5xl sm:text-6xl md:text-8xl tracking-tight my-6 sm:my-8"
                  : "font-body text-base sm:text-lg md:text-xl font-light text-foreground/80 leading-relaxed"
              }
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] sm:text-xs tracking-celestial uppercase text-muted-foreground select-none">
            Scroll down
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default LunarNarrative;
