import { useState, useRef, useEffect } from "react";
import { Heart, Moon } from "lucide-react";

export default function Index() {
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const proposalRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
    // Open WhatsApp message
    const phoneNumber = "27742609170"; // International format
    const message = `Yes! 🌙💕 Luna said YES! She'll be my girlfriend!`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const handleNoHover = () => {
    if (!answered) {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      setNoButtonPosition({ x, y });
    }
  };

  const scrollToProposal = () => {
    proposalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1a1a3e] to-[#0a0e27] overflow-hidden"
    >
      {/* Animated stars background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center px-4 md:px-6">
        {/* Animated Moon */}
        <div className="relative mb-8 md:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-moon-light to-moon rounded-full shadow-2xl animate-float"
            style={{
              boxShadow:
                "0 0 40px rgba(280, 80%, 60%, 0.6), inset -10px -10px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Moon craters */}
            <div className="absolute top-6 left-5 w-3 h-3 bg-gray-400 rounded-full opacity-30" />
            <div className="absolute top-12 left-2 w-2 h-2 bg-gray-400 rounded-full opacity-20" />
            <div className="absolute bottom-8 right-6 w-4 h-4 bg-gray-400 rounded-full opacity-25" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 text-white drop-shadow-lg">
          Hey Luna ✨
        </h1>

        <p className="text-lg md:text-2xl text-center text-purple-200 mb-8 md:mb-12 max-w-2xl drop-shadow-md">
          I've been thinking about you under the moonlight, and I realized
          something beautiful...
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-sm text-moon-light opacity-70 text-center">Scroll to continue</p>
          <div className="animate-scroll-indicator">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Proposal Section */}
      <div
        ref={proposalRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-12"
      >
        <div className="max-w-md w-full">
          {/* Romantic background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl blur-3xl" />

          {/* Main Card */}
          <div className="relative bg-moon-dark/50 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Decorative hearts */}
            <div className="absolute -top-4 -right-4 text-rose text-4xl animate-float">❤️</div>
            <div className="absolute -bottom-4 -left-4 text-rose text-3xl animate-float" style={{ animationDelay: "1s" }}>
              ✨
            </div>

            {answered ? (
              // Success State
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Moon className="w-16 h-16 text-purple-400 animate-glow" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  You Said YES! 🎉
                </h2>
                <p className="text-lg text-purple-200 mb-6">
                  Luna, you've made me the happiest person under the moon. I can't wait to love you more each day. ❤️
                </p>
                <div className="text-5xl text-center mb-4">✨💕🌙</div>
              </div>
            ) : (
              // Question State
              <>
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-6">
                  Will you be my
                  <br />
                  girlfriend?
                </h2>

                <p className="text-center text-purple-200 mb-8 text-sm md:text-base">
                  Boitumelo, every moment with you feels like starlight. Will you let me love you under the moon?
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleYes}
                    className="relative px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
                  >
                    💚 Yes!
                  </button>

                  <button
                    onMouseEnter={handleNoHover}
                    onClick={handleNoHover}
                    className="relative px-8 py-3 md:px-10 md:py-4 border-2 border-purple-400 text-purple-200 font-bold rounded-full hover:border-purple-300 transition-all duration-200 text-base md:text-lg"
                    style={{
                      transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                      transitionDuration: "200ms",
                    }}
                  >
                    No
                  </button>
                </div>

                <p className="text-center text-purple-300 text-xs md:text-sm mt-6 opacity-70">
                  (The "No" button is just being shy 😊)
                </p>
              </>
            )}
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
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute w-2 h-2 rounded-full animate-confetti"
          style={{
            left: "50%",
            top: "50%",
            backgroundColor: [
              "rgb(168, 85, 247)",
              "rgb(236, 72, 153)",
              "rgb(34, 197, 94)",
              "rgb(59, 130, 246)",
            ][i % 4],
            "--tx": `${Math.random() * 400 - 200}px`,
            "--ty": `${Math.random() * 600 - 300}px`,
            animationDelay: `${Math.random() * 0.3}s`,
            animationDuration: `${Math.random() * 1 + 2}s`,
          } as any}
        />
      ))}
    </div>
  );
}

function HeartRain() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-2xl md:text-3xl animate-heart-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-50px",
            "--tx": `${Math.random() * 300 - 150}px`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${Math.random() * 1 + 2}s`,
          } as any}
        >
          {["❤️", "💕", "💖", "💗"][i % 4]}
        </div>
      ))}
    </div>
  );
}
