import React from "react";
import javaLogo from "../images/javalogo.png";
import htmlLogo from "../images/htmllogo.jpg";
import cssLogo from "../images/csslogo.jpg";
import jsLogo from "../images/javascriptlogo.jpg";
import nodejsLogo from "../images/nodejslogo.png";
import reactLogo from "../images/reactlogo.png";
import mysqlLogo from "../images/sql.png";
import mongodbLogo from "../images/mongodb.jpg";
import gitLogo from "../images/git.png";
import githubLogo from "../images/github.png";

const skills = [
  {
    logo: javaLogo,
    label: "Java",
    info: (
      <>
        <strong>Java</strong> is a versatile, object-oriented language widely
        used for enterprise, Android, and backend solutions.
        <br />
        Features strong memory management and platform independence via JVM.
      </>
    ),
  },
  {
    logo: htmlLogo,
    label: "HTML",
    info: (
      <>
        <strong>HTML</strong> structures web content and forms the core of every
        website.
        <br />
        Helps browsers render headings, images, and layouts for all users.
      </>
    ),
  },
  {
    logo: cssLogo,
    label: "CSS",
    info: (
      <>
        <strong>CSS</strong> styles web pages with layouts, colors, fonts, and
        animation.
        <br />
        Enables responsive, visually appealing sites and modern UI design.
      </>
    ),
  },
  {
    logo: jsLogo,
    label: "JavaScript",
    info: (
      <>
        <strong>JavaScript</strong> brings interactivity and logic to websites.
        <br />
        Drives client-side actions, dynamic UI, and powers Node.js server-side
        apps.
      </>
    ),
  },
  {
    logo: nodejsLogo,
    label: "Node.js",
    info: (
      <>
        <strong>Node.js</strong> runs JavaScript on the server for scalable
        APIs.
        <br />
        Built on event-driven architecture, it's ideal for high-performance
        apps.
      </>
    ),
  },
  {
    logo: reactLogo,
    label: "ReactJS",
    info: (
      <>
        <strong>ReactJS</strong> is a leading frontend library for user
        interfaces.
        <br />
        Uses components and hooks to efficiently build fast, responsive web
        apps.
      </>
    ),
  },
  {
    logo: mysqlLogo,
    label: "MySQL",
    info: (
      <>
        <strong>MySQL</strong> is a popular relational database for structured
        data.
        <br />
        Supports complex queries and powers many web and business applications.
      </>
    ),
  },
  {
    logo: mongodbLogo,
    label: "MongoDB",
    info: (
      <>
        <strong>MongoDB</strong> is a flexible NoSQL document database.
        <br />
        Excels at storing dynamic, scalable data for modern applications.
      </>
    ),
  },
  {
    logo: gitLogo,
    label: "Git",
    info: (
      <>
        <strong>Git</strong> is the standard distributed version control system.
        <br />
        Enables teams to track changes, collaborate, and manage code history.
      </>
    ),
  },
  {
    logo: githubLogo,
    label: "GitHub",
    info: (
      <>
        <strong>GitHub</strong> is the world’s leading code hosting platform.
        <br />
        Streamlines collaboration, code review, and open source software.
      </>
    ),
  },
];

export default function Skills() {
  return (
    <section
      className="max-w-4xl mx-auto mt-40 px-6 py-12 rounded-2xl shadow-xl animate-skills-slidein"
      style={{ background: "rgba(20, 39, 61, 1)" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10 text-center tracking-tight">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7">
        {skills.map((skill, idx) => (
          <div
            key={skill.label}
            className="flex flex-col items-center group relative"
          >
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-700 shadow-lg flex items-center justify-center skill-bounce"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <img
                src={skill.logo}
                alt={skill.label}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-gray-100 text-sm md:text-base font-semibold mt-2">
              {skill.label}
            </span>
            {/* Tooltip just below the circle with slower fade animation */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-5 min-w-[240px] max-w-[300px] px-6 py-4 rounded-lg bg-gray-900/95 border-2 border-yellow-400 text-gray-100 text-[0.97rem] shadow-2xl pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-900 z-30">
              {/* Arrow pointing up to the skill circle */}
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400"></span>
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-[14px] border-r-[14px] border-b-[14px] border-l-transparent border-r-transparent border-b-gray-900"></span>
              {skill.info}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        /* Main slide-in-from-bottom animation for the section */
        .animate-skills-slidein {
          animation: skills-slidein 3s cubic-bezier(0.25,0.9,0.5,1) both;
        }
        @keyframes skills-slidein {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }
          80% {
            opacity: .93;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .skill-bounce {
          animation: bounceSkill 2.15s cubic-bezier(0.35, 1.65, 0.7, 1) infinite alternate;
        }
        @keyframes bounceSkill {
          0%   { transform: translateY(0);}
          25%  { transform: translateY(-6px);}
          60%  { transform: translateY(3px);}
          100% { transform: translateY(0);}
        }
      `}</style>
    </section>
  );
}
