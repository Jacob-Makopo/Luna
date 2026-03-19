import { useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import EclipseIntro from "@/components/EclipseIntro";
import LunarNarrative from "@/components/LunarNarrative";
import ProposalSection from "@/components/ProposalSection";
import SuccessScreen from "@/components/SuccessScreen";
import StarField from "@/components/StarField";
import PageNav from "@/components/PageNav";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleStart = useCallback(() => setStarted(true), []);
  const handleYes = useCallback(() => {
    setAccepted(true);
    setTimeout(() => {
      window.open(
        "https://wa.me/27742609170?text=Yes%2C%20a%20thousand%20times%20yes%20%F0%9F%8C%99",
        "_blank"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, 2500);
  }, []);

  if (accepted) {
    return <SuccessScreen />;
  }

  if (!started) {
    return <EclipseIntro onStart={handleStart} />;
  }

  return (
    <div className="bg-background min-h-screen">
      <StarField />
      <PageNav />
      <LunarNarrative />
      <ProposalSection onYes={handleYes} />
    </div>
  );
};

export default Index;
