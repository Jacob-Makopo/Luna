import { useMemo } from "react";
import { motion } from "framer-motion";

const MoonParticles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 60 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 300;
      const size = Math.random() * 6 + 2;
      const isMoon = Math.random() > 0.5;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - (Math.random() * 200),
        size,
        delay: Math.random() * 0.8,
        duration: 2 + Math.random() * 2,
        isMoon,
        rotation: Math.random() * 360,
      };
    }), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex items-center justify-center overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.5],
            rotate: p.rotation,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
          className="absolute"
        >
          {p.isMoon ? (
            <span style={{ fontSize: p.size * 3 }}>🌙</span>
          ) : (
            <div
              className="rounded-full moon-surface"
              style={{
                width: p.size,
                height: p.size,
                boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.4)`,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Central burst ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-20 h-20 rounded-full border-2 border-foreground/30"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 6, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        className="absolute w-16 h-16 rounded-full border border-foreground/20"
      />
    </div>
  );
};

export default MoonParticles;
