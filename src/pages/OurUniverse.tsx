import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "@/components/StarField";
import PageNav from "@/components/PageNav";

const reasons = [
  "The way you say 'my hubby' and my heart does a backflip 🤸",
  "How you make me want to be a better man every single day",
  "Your strength — even when you don't see it, I do",
  "The 30% madness that keeps life exciting 😂",
  "How deeply you love — it's rare and I treasure it",
  "Your faith in God and in us — it grounds me",
  "The way you cry tears of joy — your heart is so pure",
  "How you fight for what matters to you",
  "Your voice when you're excited about something",
  "The fact that you chose me — that alone is everything",
  "Your honesty, even when it's hard to hear",
  "How you make ordinary moments feel extraordinary",
  "Your prayers for us — they move mountains",
  "The way you love with your whole being, not halfway",
  "Because with you, I finally understand what home feels like",
];

const dreams = [
  { title: "Build our home", icon: "🏡", description: "A space that's ours — filled with love, laughter, and God's presence" },
  { title: "Travel together", icon: "✈️", description: "Explore the world hand in hand, collecting sunsets and stories" },
  { title: "Grow in faith", icon: "🕯️", description: "Pray together, grow together, become unshakeable together" },
  { title: "Create traditions", icon: "🌅", description: "Sunday mornings, date nights, anniversary rituals — all ours" },
  { title: "Support each other's dreams", icon: "⭐", description: "Be each other's biggest cheerleader in every season" },
  { title: "Build a legacy", icon: "🌳", description: "Something beautiful that outlasts us — rooted in love" },
];

const constellationStars = [
  { x: 15, y: 20, label: "Trust", size: 6 },
  { x: 35, y: 12, label: "Faith", size: 8 },
  { x: 55, y: 25, label: "Love", size: 10 },
  { x: 75, y: 15, label: "Loyalty", size: 7 },
  { x: 25, y: 40, label: "Honesty", size: 6 },
  { x: 50, y: 45, label: "Respect", size: 9 },
  { x: 70, y: 38, label: "Growth", size: 7 },
  { x: 40, y: 55, label: "Prayer", size: 8 },
  { x: 60, y: 60, label: "Joy", size: 6 },
  { x: 85, y: 50, label: "Forever", size: 8 },
];

const constellationLines = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [2, 5], [5, 7], [7, 8], [8, 9], [6, 9],
];

const OurUniverse = () => {
  const [revealedCount, setRevealedCount] = useState(1);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const revealNext = () => {
    if (revealedCount < reasons.length) {
      setRevealedCount((c) => c + 1);
    }
  };

  return (
    <div className="bg-background min-h-screen relative">
      <StarField />
      <PageNav />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 3 }}
          className="absolute w-[70vmin] h-[70vmin] rounded-full bg-primary blur-3xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground mb-6"
        >
          Everything we are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-4xl sm:text-5xl md:text-7xl text-center leading-tight mb-4"
        >
          Our Universe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-display italic text-base sm:text-lg text-muted-foreground text-center max-w-md"
        >
          The reasons, the dreams, the constellation of us
        </motion.p>

        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] tracking-celestial uppercase text-muted-foreground select-none">Scroll to explore</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Reasons I Love You - Interactive */}
      <section className="relative z-10 py-20 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground text-center mb-4"
        >
          An ever-growing list
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-center mb-12"
        >
          Reasons I Love You
        </motion.h3>

        <div className="max-w-md mx-auto space-y-4">
          <AnimatePresence>
            {reasons.slice(0, revealedCount).map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="border border-foreground/10 rounded-lg p-4 sm:p-5 bg-card/30 backdrop-blur-sm"
              >
                <span className="text-[10px] tracking-celestial uppercase text-muted-foreground">
                  Reason #{i + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground/85 font-light mt-2 leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {revealedCount < reasons.length && (
            <motion.button
              onClick={revealNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 border border-foreground/15 border-dashed rounded-lg text-xs tracking-celestial uppercase text-muted-foreground hover:bg-foreground/5 hover:border-foreground/25 transition-colors cursor-pointer bg-transparent"
            >
              Reveal reason #{revealedCount + 1} ✨
            </motion.button>
          )}

          {revealedCount >= reasons.length && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              className="text-center text-xs text-muted-foreground font-display italic pt-4"
            >
              …and the list never stops growing 🌙
            </motion.p>
          )}
        </div>
      </section>

      {/* Our Constellation */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-12 h-px bg-foreground/20 mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground text-center mb-4"
        >
          The foundations of us
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-center mb-12"
        >
          Our Constellation
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-lg mx-auto aspect-[4/3] relative"
        >
          {/* SVG constellation lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 70">
            {constellationLines.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={constellationStars[a].x}
                y1={constellationStars[a].y}
                x2={constellationStars[b].x}
                y2={constellationStars[b].y}
                stroke="hsl(var(--foreground))"
                strokeOpacity={0.1}
                strokeWidth={0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
          </svg>

          {/* Stars */}
          {constellationStars.map((star, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="absolute flex flex-col items-center cursor-pointer"
              style={{ left: `${star.x}%`, top: `${star.y}%`, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredStar(i)}
              onMouseLeave={() => setHoveredStar(null)}
              onTouchStart={() => setHoveredStar(i === hoveredStar ? null : i)}
            >
              <motion.div
                animate={{
                  boxShadow: hoveredStar === i
                    ? "0 0 20px rgba(255,255,255,0.6)"
                    : "0 0 8px rgba(255,255,255,0.3)",
                  scale: hoveredStar === i ? 1.5 : 1,
                }}
                className="rounded-full bg-foreground"
                style={{ width: star.size, height: star.size }}
              />
              <AnimatePresence>
                {hoveredStar === i && (
                  <motion.span
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full mt-2 text-[9px] sm:text-[10px] tracking-celestial uppercase text-foreground/70 whitespace-nowrap"
                  >
                    {star.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground font-display italic pt-8"
        >
          Hover over each star to see what holds us together ✨
        </motion.p>
      </section>

      {/* Our Dreams */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-12 h-px bg-foreground/20 mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground text-center mb-4"
        >
          Where we're headed
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-center mb-12"
        >
          Our Dreams Together
        </motion.h3>

        <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dreams.map((dream, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.2)" }}
              className="border border-foreground/10 rounded-lg p-5 sm:p-6 bg-card/30 backdrop-blur-sm"
            >
              <span className="text-2xl mb-3 block">{dream.icon}</span>
              <h4 className="font-display italic text-base sm:text-lg text-foreground mb-2">{dream.title}</h4>
              <p className="text-xs sm:text-sm text-foreground/50 font-light leading-relaxed">{dream.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 py-20 pb-32 flex flex-col items-center gap-6 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-full moon-surface glow-lunar-intense"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          className="font-display italic text-lg sm:text-xl md:text-2xl text-foreground text-center max-w-md leading-relaxed"
        >
          You are my universe, Boitumelo. Every star in it exists because of you.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xs text-muted-foreground font-display italic"
        >
          — Your orbit, forever 🌙
        </motion.p>
      </section>
    </div>
  );
};

export default OurUniverse;
