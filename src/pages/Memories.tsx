import { motion } from "framer-motion";
import StarField from "@/components/StarField";
import PageNav from "@/components/PageNav";
import { Camera, Heart, Plus } from "lucide-react";

const timelineEvents = [
  {
    date: "The day we met",
    title: "Where it all began",
    description: "The universe conspired to bring us together. A moment that changed everything.",
    icon: "✨",
  },
  {
    date: "First conversation",
    title: "Words became worlds",
    description: "What started as words turned into something neither of us expected.",
    icon: "💬",
  },
  {
    date: "First 'I love you'",
    title: "Three words, infinite meaning",
    description: "The moment my heart finally said what it had been screaming all along.",
    icon: "❤️",
  },
  {
    date: "Our first fight",
    title: "The storm that made us stronger",
    description: "We learned that real love doesn't run — it stays and fights for what matters.",
    icon: "⛈️",
  },
  {
    date: "The day I knew",
    title: "Certainty found me",
    description: "The moment I stopped wondering and started knowing — you are my person.",
    icon: "🌙",
  },
  {
    date: "Today & beyond",
    title: "Still writing our story",
    description: "Every day with you is a new page in the most beautiful story ever told.",
    icon: "📖",
  },
];

const emptySlots = Array.from({ length: 6 }, (_, i) => i);

const Memories = () => {
  return (
    <div className="bg-background min-h-screen relative">
      <StarField />
      <PageNav />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="absolute w-[50vmin] h-[50vmin] rounded-full bg-accent/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground" strokeWidth={1} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground mb-6"
        >
          Our journey together
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-4xl sm:text-5xl md:text-7xl text-center leading-tight mb-4"
        >
          Our Memories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-display italic text-base sm:text-lg text-muted-foreground text-center max-w-sm"
        >
          Moments we'll fill together, one heartbeat at a time
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

      {/* Timeline */}
      <section className="relative z-10 py-20 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground text-center mb-16"
        >
          Our Timeline
        </motion.h2>

        <div className="max-w-lg mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-foreground/10 sm:-translate-x-px" />

          {timelineEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-12 sm:pl-0 mb-16 sm:w-[45%] ${
                i % 2 === 0 ? "sm:mr-auto sm:pr-8 sm:text-right" : "sm:ml-auto sm:pl-8 sm:text-left"
              }`}
            >
              {/* Dot on timeline */}
              <div className={`absolute top-1 left-2.5 sm:left-auto w-3 h-3 rounded-full bg-foreground/20 border border-foreground/30 ${
                i % 2 === 0 ? "sm:right-[-7.5%] sm:translate-x-1/2" : "sm:left-[-7.5%] sm:-translate-x-1/2"
              }`} />

              <span className="text-2xl mb-2 block">{event.icon}</span>
              <p className="text-[10px] tracking-celestial uppercase text-muted-foreground mb-2">{event.date}</p>
              <h3 className="font-display italic text-lg sm:text-xl text-foreground mb-2">{event.title}</h3>
              <p className="text-sm text-foreground/60 font-light leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo Gallery - Empty slots */}
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
          Photo Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          className="font-display italic text-base sm:text-lg text-muted-foreground text-center max-w-sm mx-auto mb-12"
        >
          Empty frames waiting for our moments
        </motion.p>

        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {emptySlots.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="aspect-square rounded-lg border border-foreground/10 bg-card/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3 group hover:border-foreground/20 transition-colors"
            >
              <Plus className="w-6 h-6 text-foreground/15 group-hover:text-foreground/30 transition-colors" />
              <p className="text-[9px] tracking-celestial uppercase text-foreground/20 group-hover:text-foreground/30 transition-colors">
                {["First date", "Our spot", "Sunset together", "Laughing together", "Adventures", "Forever"][i]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground font-display italic pt-12"
        >
          Every empty frame is a promise of memories to come 🌙
        </motion.p>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-20 pb-32 flex flex-col items-center gap-6 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full moon-surface glow-lunar"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          className="font-display italic text-lg sm:text-xl text-foreground/80 text-center max-w-sm"
        >
          We have a lifetime to fill these pages together
        </motion.p>
        <Heart className="w-4 h-4 text-muted-foreground animate-pulse-glow" />
      </section>
    </div>
  );
};

export default Memories;
