import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarField from "@/components/StarField";
import PageNav from "@/components/PageNav";

const paragraphs = [
  "Good morning my love, my heart in human form, my pookie boo, my honey bun ❤️",
  "I care so deeply about you and I appreciate you so deeply too",
  "Even though you make me mad 30% of the time 😂😂",
  "My feelings for you never change and will never change ❤️",
  "I want to give all of me to you — Mind, body and soul",
  "You have my heart and I fall deeper and deeper for you each day. And I love it.",
  "I just want to be committed, loyal, honest, trustworthy and respectful to you and honour and cherish you and love all your flaws and imperfections and support you and be your best friend and be there for all your accomplishments and more because I am your biggest cheerleader ❤️",
  "I just hope you also want the same things 🥺",
  "Because I am in love with you and I want to be with you and see things through with you and do this life thing with you and only you my hubby 🤍🕯️",
  "I pray we place God at the centre of our relationship, pray together and strengthen ourselves for each other each day",
  "A praying couple stays together and it shall not be broken by anything or anyone 🤍",
  "I pray and ask God to protect our relationship, and for blessings in our union because I truly believe and have faith in us 🤍🕯️",
];

const emotionalParagraphs = [
  "This beautiful message you sent me teared me up so much",
  "I cried tears of joy, excitement, happiness, peace, love and understanding 🤍",
  "When you said you'll remind me of my strength when I forget, I felt that through my heart because that's all I have needed",
  "I would ask God to grant me someone like you and I thought I was asking for too much but I just wanted to be loved and return the same love ❤️",
  "I am crying because you have no idea how much you're healing me",
  "I am crying because you have no idea how much I wanted to be loved genuinely. I never thought I deserved a love that is genuine. I thought my love life will always be in shambles 🥺😭",
  "Until you came along and you reminded me how truly happiness felt like, how love truly felt like, how compassion felt like, how peace felt like 🤍",
  "I don't think there's words that would describe how much I love you and how much I need you",
  "I meant every word I have said to you",
];

const closingParagraphs = [
  "And I promise you my love — We will continue to grow, elevate ourselves, love each other, support each other and be there for each other",
  "We need to hold on, on each other and fight for each other",
  "There will be obstacles and challenges but I believe we will be able to overcome them ❤️",
  "With God by our side we are unreachable and unbreakable ❤️",
  "I love you with every fiber of my being ❤️",
];

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const HerWords = () => {
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
          className="absolute w-[60vmin] h-[60vmin] rounded-full bg-primary blur-3xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="text-[10px] tracking-celestial uppercase text-muted-foreground mb-6"
        >
          Words from my moon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display italic text-4xl sm:text-5xl md:text-7xl text-center leading-tight mb-4"
        >
          Her Words
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-display italic text-lg sm:text-xl text-muted-foreground text-center max-w-md"
        >
          The message that made me fall even deeper
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

      {/* Main message */}
      <section className="relative z-10 max-w-xl mx-auto px-6 py-20 space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-12 h-px bg-foreground/20 mx-auto mb-12"
        />

        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            custom={i % 3}
            className="font-body text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed text-center font-light"
          >
            {text}
          </motion.p>
        ))}
      </section>

      {/* Emotional section */}
      <section className="relative z-10 py-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[40vmin] h-[40vmin] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="max-w-xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full moon-surface glow-lunar mx-auto mb-12"
          />

          {emotionalParagraphs.map((text, i) => (
            <motion.p
              key={`emo-${i}`}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              custom={i % 3}
              className={`font-body text-sm sm:text-base md:text-lg leading-relaxed text-center font-light ${
                i === emotionalParagraphs.length - 1
                  ? "font-display italic text-lg sm:text-xl md:text-2xl text-foreground"
                  : "text-foreground/85"
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Closing promises */}
      <section className="relative z-10 py-20 pb-32">
        <div className="max-w-xl mx-auto px-6 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-12 h-px bg-foreground/20 mx-auto mb-12"
          />

          {closingParagraphs.map((text, i) => (
            <motion.p
              key={`close-${i}`}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              custom={i % 3}
              className={`font-body text-sm sm:text-base md:text-lg leading-relaxed text-center font-light ${
                i === closingParagraphs.length - 1
                  ? "font-display italic text-xl sm:text-2xl md:text-3xl text-foreground pt-4"
                  : "text-foreground/85"
              }`}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground font-display italic pt-8"
          >
            — Boitumelo, my Luna 🌙
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center pt-8"
          >
            <Link
              to="/my-love"
              className="px-8 py-4 border border-foreground/20 rounded-full text-xs tracking-celestial uppercase text-foreground/70 hover:bg-foreground/5 transition-colors"
            >
              Read my response →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HerWords;
