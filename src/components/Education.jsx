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
      className="relative flex items-center justify-center w-full mt-40 max-w-7xl mx-auto px-6 py-12 rounded-2xl shadow-2xl min-h-[500px] gap-12"
      style={{
        background: "rgba(20, 39, 61, 1)",
        color: "#ccc",
      }}
    >
      {/* Left: Animated Image */}
      <div
        className={`flex-shrink-0 w-64 md:w-96 transition-all ${
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
        className={`flex flex-col gap-6 max-w-lg w-full md:w-auto transition-all ${
          loaded ? "slide-in-right" : "opacity-0"
        }`}
      >
        <div
          className="pencil-card text-gray-100 shadow-lg p-6 pl-16"
          style={{ background: "rgba(23, 41, 63, 1)" }}
        >
          <div className="font-bold text-lg mb-2">
            B.Tech in Information Technology
          </div>
          <div>
            Yeshwantrao Chavan College of Engineering, Nagpur
            <br />
            <i>(Pursuing)</i>
          </div>
        </div>
        <div
          className="pencil-card text-gray-100 shadow-lg p-6 pl-16"
          style={{ background: "rgba(23, 41, 63, 1)" }}
        >
          <div className="font-bold text-lg mb-2">
            Diploma in Information Technology
          </div>
          <div>Government Polytechnic, Nanded</div>
        </div>
        <div
          className="pencil-card text-gray-100 shadow-lg p-6 pl-16"
          style={{ background: "rgba(23, 41, 63, 1)" }}
        >
          <div className="font-bold text-lg mb-2">SSC</div>
          <div>Shri Chhatrapati Shivaji High School, Sharanagar, Sagroli</div>
        </div>
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
          animation: slideInLeft 3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .slide-in-right {
          animation: slideInRight 3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .slide-in-left img {
          animation: shake 5s ease-in-out infinite 1s;
        }
        /* Pencil shape: pointed (left) tip using clip-path */
        .pencil-card {
          clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
        }
      `}</style>
    </section>
  );
}
