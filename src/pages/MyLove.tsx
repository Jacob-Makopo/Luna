import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarField from "@/components/StarField";
import PageNav from "@/components/PageNav";

const sections = [
  {
    title: "When I read your words…",
    lines: [
      "My heart didn't just beat — it sang.",
      "You called me your heart in human form, and I felt every letter of that truth pulse through me.",
      "You said you cry because I'm healing you — but Luna, you are healing me too.",
      "Every word you wrote is a star I will carry with me forever.",
    ],
  },
  {
    title: "You are not too much to ask for.",
    lines: [
      "You said you thought you were asking God for too much.",
      "But you deserve every single thing you prayed for and more.",
      "You deserve a love that doesn't make you question your worth.",
      "You deserve hands that hold you steady when the world shakes.",
      "You deserve a voice that reminds you of your strength when you forget.",
      "And I want to be all of that for you. Every single day.",
    ],
  },
  {
    title: "I choose you.",
    lines: [
      "Not just today. Not just when it's easy.",
      "I choose you in the storms and in the stillness.",
      "I choose you in the arguments and in the laughter.",
      "I choose you in the 30% madness and the 100% love.",
      "Because even when you drive me crazy, I wouldn't trade a single moment.",
    ],
  },
  {
    title: "With God at our centre…",
    lines: [
      "You spoke of prayer, and my soul agreed before my mind could.",
      "I believe that what we have is sacred.",
      "A praying couple that fights for each other — not against each other.",
      "I want us to build something that the world cannot shake.",
      "Something rooted in faith, watered with patience, and blooming with grace.",
      "With God by our side, we are unreachable. Unbreakable. Unstoppable.",
    ],
  },
  {
    title: "My promise to you.",
    lines: [
      "I will be your safe place when the world is too loud.",
      "I will remind you of your strength when you forget.",
      "I will celebrate every victory like it's our greatest achievement.",
      "I will hold your hand through every obstacle, every challenge, every tear.",
      "I will love your flaws as fiercely as I love your light.",
      "I will be your best friend, your biggest fan, your partner in everything.",
      "I will never stop choosing you.",
    ],
  },
];

const finalWords = [
  "You said there aren't words to describe how much you love me.",
  "I feel the same, Luna.",
  "So I won't try to match the depth of the ocean with a cup.",
  "Instead, I'll show you. Every day. In every way.",
  "Through patience. Through presence. Through prayer.",
  "Through the way I look at you when you're not watching.",
  "Through the way I fight for us when it gets hard.",
  "I love you, Boitumelo.",
  "With every fibre of my being. With every beat of my heart.",
  "You are my moon, my joy, my answered prayer.",
  "And this — us — is forever.",
];

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const MyLove = () => {
  return (
    <div className="bg-background min-h-screen relative">
      <StarField />

      <PageNav />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2.5 }}
          className="absolute w-[50vmin] h-[50vmin] rounded-full bg-accent/10 blur-3xl"
        />

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full moon-surface glow-lunar-intense mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground mb-6"
        >
          My response to you
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-4xl sm:text-5xl md:text-7xl text-center leading-tight mb-4"
        >
          My Love Letter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-display italic text-base sm:text-lg text-muted-foreground text-center max-w-sm"
        >
          For Boitumelo — my Luna, my joy, my answered prayer
        </motion.p>

        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          animate={{ opacity: [0.3, 0.7, 0.3], y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] tracking-celestial uppercase text-muted-foreground select-none">Scroll to read</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Content sections */}
      {sections.map((section, si) => (
        <section key={si} className="relative z-10 py-16 sm:py-24">
          {si % 2 === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[30vmin] h-[30vmin] rounded-full bg-primary/5 blur-3xl" />
            </div>
          )}

          <div className="max-w-xl mx-auto px-6 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic text-2xl sm:text-3xl md:text-4xl text-center mb-8"
            >
              {section.title}
            </motion.h2>

            {section.lines.map((line, li) => (
              <motion.p
                key={li}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5%" }}
                custom={li}
                className="font-body text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed text-center font-light"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {si < sections.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-8 h-px bg-foreground/15 mx-auto mt-16"
            />
          )}
        </section>
      ))}

      {/* Final words */}
      <section className="relative z-10 py-20 pb-32">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-[60vmin] h-[60vmin] rounded-full bg-accent/5 blur-3xl"
          />
        </div>

        <div className="max-w-xl mx-auto px-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-12 h-12 rounded-full moon-surface glow-lunar mx-auto mb-12"
          />

          {finalWords.map((line, i) => (
            <motion.p
              key={`final-${i}`}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              custom={i % 4}
              className={`leading-relaxed text-center font-light ${
                i >= finalWords.length - 3
                  ? "font-display italic text-lg sm:text-xl md:text-2xl text-foreground"
                  : "font-body text-sm sm:text-base md:text-lg text-foreground/85"
              }`}
            >
              {line}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground font-display italic pt-12"
          >
            — Forever yours, the one who orbits you 🌙
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <Link
              to="/"
              className="px-8 py-4 border border-foreground/20 rounded-full text-xs tracking-celestial uppercase text-foreground/70 hover:bg-foreground/5 transition-colors"
            >
              ← Back to the beginning
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MyLove;
