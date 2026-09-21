export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <style>{`
        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.35;
          will-change: transform;
        }

        .bg-orb-1 {
          width: 420px;
          height: 420px;
          top: -10%;
          left: -8%;
          background: var(--accent, #7c3aed);
          animation: drift1 26s ease-in-out infinite;
        }

        .bg-orb-2 {
          width: 380px;
          height: 380px;
          bottom: -12%;
          right: -6%;
          background: #0284c7;
          animation: drift2 32s ease-in-out infinite;
        }

        .bg-orb-3 {
          width: 300px;
          height: 300px;
          top: 40%;
          left: 60%;
          background: #db2777;
          animation: drift3 22s ease-in-out infinite;
        }

        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 80px) scale(1.1); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-70px, -50px) scale(1.15); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 60px) scale(0.9); }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-orb-1, .bg-orb-2, .bg-orb-3 {
            animation: none;
          }
        }

        @media (max-width: 600px) {
          .bg-orb-3 { display: none; }
        }
      `}</style>
    </div>
  );
}