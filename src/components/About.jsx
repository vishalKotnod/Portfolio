import { useEffect, useState } from "react";
import profileImg from "../images/profile.jpeg";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const infoBgColor = "rgba(20, 39, 61, 1)";
  const photoBorderColor = "rgba(30, 48, 71, 1)";

  const hoverInfo = (
    <div className="flex flex-col gap-2">
      <div>
        <strong>Name:</strong>
        <br /> Vishal Kotnod
      </div>
      <div>
        <strong>Age:</strong>
        <br /> 20
      </div>
      <div>
        <strong>Address:</strong>
        <br /> Post: Sagroli
        <br /> Taluka: Biloli
        <br /> District: Nanded
      </div>
      <div>
        <strong>Email:</strong>
        <br /> vkotnod@gmail.com
      </div>
      <div>
        <strong>Phone:</strong>
        <br /> 8788611037
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className={`relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 rounded-2xl transition-all duration-300 mt-38 shadow-2xl ${
        loaded ? "animate-move-section" : ""
      }`}
      style={{
        background: infoBgColor,
        boxShadow: `
          0 8px 32px 0 rgba(66, 61, 100, 0.14),
          0 24px 80px 0 rgba(50, 50, 80, 0.21),
          0 1.5px 3px rgba(34,53,75,0.22)
        `,
        position: "relative",
        overflow: "visible",
        minHeight: "500px",
      }}
    >
      {/* Card yellow border */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          right: "14px",
          bottom: "14px",
          borderRadius: "1rem",
          pointerEvents: "none",
          zIndex: 25,
        }}
      />

      {/* Profile Image and Tooltip */}
      <div className="flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0 md:-ml-8 z-20 relative group">
        <div
          className="rounded-full"
          style={{
            background: infoBgColor,
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 32px 0 rgba(34, 53, 75, 0.24)",
            border: `3px solid ${photoBorderColor}`,
          }}
        >
          <img
            src={profileImg}
            alt="Vishal Kotnod"
            className="object-cover rounded-full w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 transition-opacity duration-1000 opacity-100"
            style={{
              boxShadow:
                "0 16px 48px 0 rgba(34, 53, 75, 1), 0 4px 16px 0 rgba(158, 147, 228, 0.13)",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        {/* Tooltip appears RIGHT of the image, vertical layout */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 sm:ml-6 px-4 sm:px-7 py-4 sm:py-5 flex flex-col gap-3 rounded-lg bg-gray-900/95 border-2 border-yellow-400 text-gray-100 text-xs sm:text-base shadow-2xl pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-900 z-30 max-w-xs min-w-[145px] sm:min-w-[210px] whitespace-normal">
          <span className="absolute left-[-14px] sm:left-[-18px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-yellow-400"></span>
          <span className="absolute left-[-9px] sm:left-[-13px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-b-[14px] border-r-[14px] border-t-transparent border-b-transparent border-r-gray-900"></span>
          {hoverInfo}
        </div>
      </div>

      {/* Animated Text Content */}
      <div
        className={`flex flex-col justify-center items-center md:items-start md:w-auto md:pl-20 text-center md:text-left rounded-xl p-4 sm:p-8 z-10 w-full max-w-2xl ${
          loaded ? "animate-slide-in-right" : ""
        }`}
        style={{
          fontFamily: "'Nunito', 'Quicksand', Arial, sans-serif",
        }}
      >
        <h2
          className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-100 mb-4 tracking-tight"
          style={{ fontFamily: "'Quicksand', 'Nunito', Arial, sans-serif" }}
        >
          Hey, I'm <span className="text-blue-400">Vishal Kotnod</span>
        </h2>
        <p
          className="text-xs sm:text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed font-medium"
          style={{ fontFamily: "'Nunito', 'Quicksand', Arial, sans-serif" }}
        >
          I'm a passionate technology student at YCCE, Nagpur, with hands-on
          experience in full-stack web development and WordPress through
          internships and personal projects. I have a strong interest in using
          technology to solve real-world problems, and I continuously focus on
          improving my technical and analytical skills. I am currently seeking
          an opportunity to learn, grow, and contribute meaningfully in a
          professional environment.
        </p>
      </div>

      <style jsx>{`
        @keyframes move-section {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-move-section {
          animation: move-section 4s ease-in-out infinite;
        }
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(220px);
          }
          60% {
            opacity: 1;
            transform: translateX(-5px);
          }
          80% {
            transform: translateX(2px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 4s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        /* Responsive adjustment for ultra-small screens */
        @media (max-width: 480px) {
          .rounded-2xl {
            border-radius: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}
