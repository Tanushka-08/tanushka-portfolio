import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Only enable on devices with a real mouse (not touch)
    const isFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFineHover);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .btn, input, textarea, [role='button']")) {
        setHovering(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .btn, input, textarea, [role='button']")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent, #7c3aed)",
          pointerEvents: "none",
          zIndex: 10000,
          transition: "opacity 0.2s ease",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          borderRadius: "50%",
          border: "1px solid var(--accent, #7c3aed)",
          background: hovering ? "rgba(124,58,237,0.08)" : "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease",
        }}
      />
    </>
  );
}