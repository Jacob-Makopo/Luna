import { useState, useRef } from "react";
import { Moon, Heart, Sparkles } from "lucide-react";

export default function Index() {
  const [started, setStarted] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const storyRef = useRef<HTMLDivElement>(null);
  const romanceRef = useRef<HTMLDivElement>(null);
  const proposalRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setStarted(true);
  };

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
    // Open WhatsApp message
    const phoneNumber = "27742609170"; // International format
    const message = `Yes! 🌙💕 Luna said YES! She'll be my girlfriend!`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Refresh page after 3 seconds
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 500);
  };

  const handleNoHover = () => {
    if (!answered) {
      const x = Math.random() * 240 - 120;
      const y = Math.random() * 240 - 120;
      setNoButtonPosition({ x, y });
    }
  };

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRomance = () => {
    romanceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProposal = () => {
    proposalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Splash/Intro Screen
  if (!started) {
    return (
      <div 
        className="fixed inset-0 bg-black overflow-hidden cursor-pointer z-50"
        onClick={handleStart}
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950" />
          
          {/* Animated orbs/glows */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen flex flex-col items-center justify-center px-4 sm:px-6">
          {/* Glowing moon */}
          <div className="relative mb-8 sm:mb-12">
            {/* Outer glow layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse w-28 h-28 sm:w-48 sm:h-48 -inset-4 sm:-inset-8" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse w-28 h-28 sm:w-48 sm:h-48 -inset-2 sm:-inset-4 delay-100" />
            
            {/* Main moon */}
            <div 
              className="relative w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 rounded-full shadow-2xl animate-float"
              style={{
                boxShadow: `
                  0 0 40px rgba(168, 85, 247, 0.8),
                  0 0 60px rgba(236, 72, 153, 0.4),
                  inset -10px -10px 20px rgba(0, 0, 0, 0.2),
                  inset 6px 6px 15px rgba(255, 255, 255, 0.3)
                `,
              }}
            >
              {/* Moon details */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-5 sm:h-5 bg-gray-300 rounded-full opacity-40 blur-sm" />
              <div className="absolute bottom-1/4 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full opacity-35 blur-sm" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-2 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hey Boitumelo
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-purple-300">also known as Luna</p>
            <p className="text-sm sm:text-base md:text-lg text-purple-200/80 max-w-sm leading-relaxed font-light mt-4 sm:mt-6">
              I have something special to show you
            </p>
          </div>

          {/* Tap Indicator */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm text-purple-300/70 font-light tracking-widest uppercase">
              Tap to continue
            </p>
            <div className="animate-scroll-indicator">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Content
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background with gradient and glow */}
      <div className="fixed inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950" />
        
        {/* Animated orbs/glows */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-96 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-0">
        {/* Animated glowing moon */}
        <div className="relative mb-6 sm:mb-12">
          {/* Outer glow layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse w-32 h-32 sm:w-64 sm:h-64 -inset-6 sm:-inset-8" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-20 animate-pulse w-32 h-32 sm:w-64 sm:h-64 -inset-3 sm:-inset-4 delay-100" />
          
          {/* Main moon */}
          <div 
            className="relative w-28 h-28 sm:w-48 sm:h-48 bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 rounded-full shadow-2xl animate-float"
            style={{
              boxShadow: `
                0 0 60px rgba(168, 85, 247, 0.8),
                0 0 100px rgba(236, 72, 153, 0.4),
                inset -15px -15px 30px rgba(0, 0, 0, 0.2),
                inset 10px 10px 20px rgba(255, 255, 255, 0.3)
              `,
            }}
          >
            {/* Moon craters with depth */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full opacity-40 blur-sm" />
            <div className="absolute top-1/3 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full opacity-30 blur-sm" />
            <div className="absolute bottom-1/4 right-1/4 w-5 h-5 sm:w-8 sm:h-8 bg-gray-300 rounded-full opacity-35 blur-sm" />
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full opacity-25 blur-sm" />
            
            {/* Shine overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-2 sm:mb-4 text-white tracking-tight">
          Hey
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Boitumelo
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-purple-300/80 mb-6 sm:mb-8">Luna, my moonlight</p>

        {/* Subtitle with elegant styling */}
        <p className="text-sm sm:text-base md:text-lg text-center text-purple-200/90 mb-8 sm:mb-16 max-w-xl sm:max-w-2xl leading-relaxed font-light px-2">
          I've been thinking about you under the moonlight, and I realized something beautiful...
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 cursor-pointer active:scale-95 transition-transform" onClick={scrollToStory}>
          <p className="text-xs sm:text-sm text-purple-300/70 font-light tracking-widest uppercase">Scroll to read our story</p>
          <div className="animate-scroll-indicator">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Love Story Section */}
      <div
        ref={storyRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="max-w-2xl w-full">
          {/* Story Card */}
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-1000 animate-pulse" />
            
            {/* Card background */}
            <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-rose-500/20 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-bl-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-tr-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-4">
                  <div className="flex justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl">
                    <span className="animate-float">💕</span>
                    <span className="animate-float" style={{ animationDelay: "0.5s" }}>✨</span>
                    <span className="animate-float" style={{ animationDelay: "1s" }}>🌙</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Our Love Story
                  </h2>
                  <p className="text-xs sm:text-sm text-rose-400">How it all started in one magical day</p>
                </div>

                {/* Story Content */}
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-purple-200/90">
                  <p>
                    <span className="text-rose-400 font-semibold">The moment I saw you,</span> everything changed. It wasn't just a meeting—it was like the universe aligned. In that first day, I felt something I've never felt before. You weren't just beautiful on the outside, but your soul, your kindness, and the way you light up the room... that's when I knew.
                  </p>

                  <p>
                    <span className="text-rose-400 font-semibold">Within hours,</span> we were talking like we'd known each other forever. Every conversation felt like we were writing our own story. Your laugh became my favorite sound, your smile my favorite view. The day felt magical—like time stood still and it was just us under the stars.
                  </p>

                  <p>
                    <span className="text-rose-400 font-semibold">I realized something</span> that first day that took me breath away: I didn't just like you, I saw a future with you. Not just today, not just tomorrow, but forever. You make me want to be better, to love deeper, to cherish every moment we share.
                  </p>

                  <p>
                    <span className="text-rose-400 font-semibold">So here I am,</span> under the same moon that watched us fall in love that magical first day, asking you the question my heart has been screaming since I met you. Will you let me spend forever loving you, Luna?
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 py-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
                  <Heart className="w-5 h-5 text-rose-400" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-purple-300/70 text-xs sm:text-sm font-light mb-4 sm:mb-6">
                    But wait, there's more to our galaxy...
                  </p>
                  <button
                    onClick={scrollToRomance}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-rose-600/20 to-pink-600/20 border border-rose-500/40 hover:border-rose-500/80 text-rose-300 hover:text-rose-200 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 text-sm sm:text-base font-semibold"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Romance/Galaxy Section */}
      <div
        ref={romanceRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
      >
        {/* Animated star field background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(150)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle-star ${Math.random() * 4 + 2}s ease-in-out infinite`,
              }}
            />
          ))}
          <style>{`
            @keyframes twinkle-star {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 1; }
            }
          `}</style>
        </div>

        <div className="max-w-2xl w-full relative z-10">
          {/* Galaxy Card */}
          <div className="relative group">
            {/* Animated glowing border with galaxy colors */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-1000 animate-pulse" />

            {/* Card background */}
            <div className="relative bg-gradient-to-br from-indigo-950/80 via-purple-950/85 to-slate-950/90 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
              {/* Galaxy corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-bl-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-transparent rounded-tr-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Header with cosmic theme */}
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="flex justify-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl">
                    <span className="animate-float">🌌</span>
                    <span className="animate-float" style={{ animationDelay: "0.5s" }}>✨</span>
                    <span className="animate-float" style={{ animationDelay: "1s" }}>🌙</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Lost in Your Galaxy
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-400/80">A moment of pure connection</p>
                </div>

                {/* Romantic content */}
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-purple-200/95">
                  <p>
                    <span className="text-pink-400 font-semibold">There's something</span> about the way you look at me that makes the entire universe fade away. When our eyes meet, it's like two stars colliding, creating something new and beautiful.
                  </p>

                  <p>
                    <span className="text-blue-400 font-semibold">Your touch</span> sends shivers through me—like electricity dancing across the cosmos. Every time you're close, my heart races like a meteor shower, fast and uncontrollable. You make me feel alive in ways I never thought possible.
                  </p>

                  <p>
                    <span className="text-purple-400 font-semibold">I want to know</span> every part of you—not just the surface, but the depths of your soul. I want to explore the galaxies within you, discover the constellations of your dreams, feel the warmth of your heart against mine.
                  </p>

                  <p>
                    <span className="text-pink-400 font-semibold">The way you move,</span> the way you laugh, the way you make me feel wanted... it's intoxicating. You're the most beautiful thing I've ever seen, and I can't stop thinking about holding you close, making you feel how much you matter to me.
                  </p>

                  <p>
                    <span className="text-blue-400 font-semibold">Luna,</span> you're not just my love—you're my obsession, my desire, my deepest passion. Every heartbeat is for you. Every breath I take is because of you. I want to show you pleasure like you've never experienced, make you feel treasured and desired every single moment.
                  </p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 py-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                  <Moon className="w-5 h-5 text-blue-400" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-blue-300/70 text-xs sm:text-sm font-light mb-4 sm:mb-6">
                    Ready for the final moment?
                  </p>
                  <button
                    onClick={scrollToProposal}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/50 hover:border-blue-400/80 text-blue-300 hover:text-blue-200 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 text-sm sm:text-base font-semibold"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    The Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proposal Section */}
      <div
        ref={proposalRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24"
      >
        <div className="max-w-lg w-full">
          {/* Proposal Card */}
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-1000 animate-pulse" />
            
            {/* Card background with enhanced styling */}
            <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
              {/* Subtle corner accents */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-bl-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-tr-3xl pointer-events-none" />

              <div className="relative z-10">
                {answered ? (
                  // Success State
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50 animate-pulse" />
                        <Moon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-200 relative animate-float" />
                      </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                      You Said YES!
                    </h2>
                    
                    <p className="text-sm sm:text-base md:text-lg text-purple-200/90 leading-relaxed px-2">
                      Boitumelo, you've made me the happiest person under the moon. I can't wait to love you more each day, every day, forever.
                    </p>
                    
                    <div className="flex justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl pt-4">
                      <span className="animate-float">✨</span>
                      <span className="animate-float" style={{ animationDelay: "0.5s" }}>💕</span>
                      <span className="animate-float" style={{ animationDelay: "1s" }}>🌙</span>
                    </div>
                  </div>
                ) : (
                  // Question State
                  <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-3 sm:space-y-4">
                      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center leading-tight">
                        Will you be my
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          girlfriend?
                        </span>
                      </h2>

                      <p className="text-center text-purple-200/80 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                        Boitumelo, every moment with you feels like starlight. Will you let me love you under the moon, today and always?
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
                      <button
                        onClick={handleYes}
                        className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg overflow-hidden min-h-12 sm:min-h-14"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center justify-center gap-2">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                          Yes!
                        </span>
                      </button>

                      <button
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                        onClick={handleNoHover}
                        className="relative px-6 sm:px-10 py-3 sm:py-4 border-2 border-purple-400/50 hover:border-purple-400/80 text-purple-200 hover:text-white font-semibold rounded-full transition-all duration-200 text-sm sm:text-base md:text-lg hover:bg-purple-500/10 active:scale-95 min-h-12 sm:min-h-14"
                        style={{
                          transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                          transitionDuration: "200ms",
                        }}
                      >
                        No
                      </button>
                    </div>

                    <p className="text-center text-purple-300/60 text-xs sm:text-sm font-light tracking-wide px-2">
                      (The "No" button is just being shy)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confetti and Heart Rain Animation */}
      {showConfetti && <ConfettiExplosion />}
      {showConfetti && <HeartRain />}
    </div>
  );
}

function ConfettiExplosion() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(60)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute rounded-full animate-confetti"
          style={{
            left: "50%",
            top: "50%",
            width: Math.random() * 8 + 4 + "px",
            height: Math.random() * 8 + 4 + "px",
            backgroundColor: [
              "rgb(168, 85, 247)",
              "rgb(236, 72, 153)",
              "rgb(251, 146, 60)",
              "rgb(34, 197, 94)",
              "rgb(59, 130, 246)",
              "rgb(168, 85, 247)",
            ][i % 6],
            "--tx": `${Math.random() * 500 - 250}px`,
            "--ty": `${Math.random() * 600 - 300}px`,
            animationDelay: `${Math.random() * 0.4}s`,
            animationDuration: `${Math.random() * 0.8 + 2.2}s`,
          } as any}
        />
      ))}
    </div>
  );
}

function HeartRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(40)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute font-bold text-xl sm:text-2xl md:text-4xl animate-heart-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-60px",
            "--tx": `${Math.random() * 400 - 200}px`,
            animationDelay: `${Math.random() * 0.6}s`,
            animationDuration: `${Math.random() * 1 + 2.5}s`,
          } as any}
        >
          {["❤️", "💕", "💖", "💗"][i % 4]}
        </div>
      ))}
    </div>
  );
}
