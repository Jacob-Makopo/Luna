import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/her-words", label: "Her Words" },
  { to: "/my-love", label: "My Love" },
  { to: "/memories", label: "Memories" },
  { to: "/our-universe", label: "Universe" },
];

const PageNav = () => {
  const { pathname } = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-2 sm:gap-4 py-4 px-4"
    >
      {links.map((link) => {
        const isActive = pathname === link.to;
        return (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] tracking-celestial uppercase rounded-full backdrop-blur-md transition-colors ${
              isActive
                ? "text-foreground/80 border border-foreground/20 bg-foreground/5"
                : "text-muted-foreground border border-foreground/10 bg-background/40 hover:bg-foreground/10"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default PageNav;
