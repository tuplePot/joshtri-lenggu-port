"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Brutalist custom cursor: an outlined square that trails the pointer and
 * grows over interactive elements, with a solid accent dot at the exact point.
 * Uses mix-blend-difference so it stays legible on any background. Only active
 * on fine-pointer (mouse) devices; touch devices keep the native cursor.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 450, damping: 34, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 450, damping: 34, mass: 0.35 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      setHover(Boolean(target?.closest?.("a, button, [data-cursor]")));
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = (hover ? 46 : 28) - (down ? 6 : 0);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ left: sx, top: sy, opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-200"
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 border-2 border-white mix-blend-difference"
          animate={{ width: size, height: size }}
          transition={{ type: "spring", stiffness: 380, damping: 26, mass: 0.4 }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ left: x, top: y, opacity: visible && !hover ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-150"
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-accent" />
      </motion.div>
    </>
  );
}
