import { useEffect, useState } from "react";
import eduImg from "../images/edu.png";

export default function Education() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="Education"
      className="relative flex flex-col lg:flex-row items-center justify-center w-full mt-40 max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-6 sm:py-10 rounded-2xl shadow-2xl min-h-[400px] md:min-h-[500px] gap-8"
      style={{
        background: "rgba(20, 39, 61, 1)",
        color: "#ccc",
      }}
    >
      {/* Left: Animated Image */}
      <div
        className={`w-[180px] sm:w-64 md:w-80 lg:w-96 mb-8 lg:mb-0 flex-shrink-0 transition-all ${
          loaded ? "slide-in-left" : "opacity-0"
        }`}
      >
        <img
          src={eduImg}
          alt="Education"
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>

      {/* Right: Three Pencil-Shaped Cards for Educational Info */}
      <div
        className={`flex flex-col gap-5 w-full max-w-xl transition-all ${
          loaded ? "slide-in-right" : "opacity-0"
        }`}
      >
        {[
          {
            title: "B.Tech in Information Technology",
            subtitle: (
              <>
                Yeshwantrao Chavan College of Engineering, Nagpur
                <br />
                <i>(Pursuing)</i>
              </>
            ),
          },
          {
            title: "Diploma in Information Technology",
            subtitle: "Government Polytechnic, Nanded",
          },
          {
            title: "SSC",
            subtitle:
              "Shri Chhatrapati Shivaji High School, Sharanagar, Sagroli",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="pencil-card text-gray-100 shadow-lg px-5 py-5 xs:py-6 xs:px-8 sm:py-7 sm:pl-10 md:pl-14 lg:pl-16 rounded-lg"
            style={{ background: "rgba(23, 41, 63, 1)" }}
          >
            <div className="font-bold text-base xs:text-lg sm:text-xl mb-2">
              {item.title}
            </div>
            <div className="text-xs xs:text-sm sm:text-base">
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateY(0);
          }
          20%,
          60% {
            transform: translateY(-10px);
          }
          40%,
          80% {
            transform: translateY(10px);
          }
        }
        .slide-in-left {
          animation: slideInLeft 1.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .slide-in-right {
          animation: slideInRight 1.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-left img {
          animation: shake 4s ease-in-out infinite 1s;
        }
        .pencil-card {
          clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
          box-sizing: border-box;
        }
        @media (max-width: 1024px) {
          .pencil-card {
            border-radius: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
