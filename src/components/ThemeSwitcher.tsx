"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMoonFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const buttonLabel = "theme switcher";

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }
  const iconSize = 30;
  return (
    <AnimatePresence mode={"popLayout"}>
      <button
        aria-label={buttonLabel}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        {theme == "dark" ? (
          <motion.b
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MdSunny color="#fcd34d" size={iconSize} />
          </motion.b>
        ) : (
          <motion.b
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PiMoonFill color="#083344" size={iconSize} />
          </motion.b>
        )}
      </button>
    </AnimatePresence>
  );
};
