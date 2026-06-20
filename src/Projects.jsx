import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { useMediaQuery } from "@mui/material";

const PROJECTS = [
  {
    title: "Hariss International",
    subtitle: "Laravel Backend Management System",

    type: "Professional Project",

    typeColor: "#ff2d20",

    desc: "Contributed to the development of a Laravel-based backend system following MVC architecture and clean coding practices. Worked on authentication systems, RESTful APIs, request validation, role-based access control, and relational database optimization using Eloquent ORM.",

    image: null,

    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Laravel Passport",
      "Laravel Sanctum",
      "Spatie",
      "Eloquent ORM",
      "Postman",
    ],

    highlights: [
      "Developed secure RESTful APIs with validation and centralized exception handling",
      "Implemented authentication using Laravel Passport & Sanctum",
      "Optimized relational database queries using Eloquent ORM and indexing",
    ],

    gradient: "#ff2d20",

    github: "https://github.com/harshchaubey18",

    demo: "https://www.youtube.com/",
  },

  {
    title: "Shift Fitness App",
    subtitle: "Fitness Platform",

    type: "Full Stack Project",

    typeColor: "#2563eb",

    desc: "Shift Fitness is an all-in-one health and fitness app designed to help users achieve their wellness goals through personalized workout plans, activity tracking, nutrition management, progress monitoring, and expert fitness guidance. Stay motivated, track your performance, and transform your lifestyle with Shift Fitness.",

    image: null,

    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "Laravel Passport",
      "Laravel Sanctum",
      "Spatie",
      "Eloquent ORM",
      "Postman",
    ],

    highlights: [
  "Developed scalable backend APIs for fitness tracking and user activity management",
  "Implemented goal-setting and progress monitoring features to improve user engagement",
  "Built secure authentication and authorization systems using Laravel Sanctum",
  "Integrated Redis for OTP verification and high-performance caching",
  "Created and maintained Swagger API documentation for seamless frontend integration",
  "Optimized database queries and application performance for better scalability"
],

    gradient: "#2563eb",

    github: "https://github.com/harshchaubey18",

    demo: "https://shift-frontend-three.vercel.app/",
  },
  {
    title: "Be-Trade App",

    subtitle: "Full Stack Trading Application",

    type: "Full Stack Project",

    typeColor: "#16a34a",

    desc: "Betrade is a trading and investment management platform that enables users to track portfolios, manage transactions, monitor market activities, and access financial insights through a secure and intuitive interface.",

    image: null,

    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "Laravel Passport",
      "Laravel Sanctum",
      "Spatie",
      "Eloquent ORM",
      "Postman",
    ],

    highlights: [
  "Developed secure RESTful APIs for trading and portfolio management",
  "Implemented user authentication and role-based access control",
  "Designed and optimized MySQL database architecture for financial data",
  "Built transaction management and investment tracking modules",
  "Integrated real-time data processing and reporting features",
  "Created comprehensive API documentation using Swagger/OpenAPI",
  "Implemented secure payment and subscription management workflows",
  "Optimized backend performance and scalability for high-volume transactions"
],

    gradient: "#16a34a",

    github: "https://github.com/harshchaubey18",

    demo: "https://be-trade-frontend.vercel.app/",
  },
  {
    title: "Croose Backend System",

    subtitle: "Whatsapp Appointment System",

    type: "Backend Project",

    typeColor: "#7c3aed",

    desc: "Croose is a WhatsApp-powered appointment scheduling platform that enables businesses to automate bookings, reminders, and customer communications.",

    image: null,

    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "Laravel Sanctum",
      "Spatie",
      "Eloquent ORM",
      "Postman",
    ],

    highlights: [
  "Developed appointment booking and scheduling APIs using Laravel",
  "Integrated WhatsApp Business API for automated customer interactions",
  "Implemented appointment creation, rescheduling, and cancellation workflows",
  "Built automated appointment reminders and notification systems",
  "Designed and optimized MySQL database architecture for appointment management",
  "Developed webhook integrations for real-time WhatsApp message processing",
  "Implemented secure authentication and role-based access control",
  "Created Swagger/OpenAPI documentation for seamless frontend integration"
],

    gradient: "#7c3aed",

    github: "https://github.com/harshchaubey18",

    demo: "https://croose.vercel.app/dashboard/",
  },

  {
    title: "SCM Scout",

    subtitle: "Grassroot Football Platform",

    type: "Backend Project",

    typeColor: "#06b6d4",

    desc: "SCM Scout is a football scouting and talent management platform that connects players, coaches, scouts, and clubs to discover and develop emerging football talent.",

    image: null,

    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "Laravel Passport",
      "Laravel Sanctum",
      "Spatie",
      "Eloquent ORM",
      "Postman",
    ],

    highlights: [
      "Developed scalable RESTful APIs using Laravel for player and team management",
      "Implemented role-based access control for players, coaches, scouts, and administrators",
      "Built player profile management and talent showcase features",
      "Developed match, league, and tournament management modules",
      "Implemented advanced filtering and search functionality for talent discovery",
      "Designed and optimized MySQL database architecture for sports management data",
      "Integrated secure authentication and authorization using Laravel Sanctum",
      "Created comprehensive Swagger/OpenAPI documentation for frontend integration",
    ],

    gradient: "#06b6d4",

    github: "https://github.com/harshchaubey18",

    demo: "https://youtu.be/7WKX1LNfKHg",
  },
  {
    title: "Orvell Pulse System",

    subtitle: "Whatsapp Online Order System",

    type: "Full Stack Project",

    typeColor: "#f59e0b",

    desc: "Orvell is a WhatsApp-based online ordering platform that allows businesses to manage customer orders, product catalogs, and order tracking through automated messaging workflows.",

    image: null,

    tags: [
      "PHP",
      "Laravel",
      "REST APIs",
      "MySQL",
      "Laravel Passport",
      "Laravel Sanctum",
      "Spatie",
      "Eloquent ORM",
      "Postman",
    ],

    highlights: [
      "Developed scalable RESTful APIs using Laravel for order and customer management",
      "Integrated WhatsApp Business API for automated ordering and customer communication",
      "Built product catalog, order placement, and order tracking modules",
      "Implemented real-time order status updates and notification workflows",
      "Designed and optimized MySQL database architecture for order management",
      "Developed webhook integrations for processing WhatsApp messages and events",
      "Implemented secure authentication and role-based access control",
      "Created comprehensive Swagger/OpenAPI documentation for seamless frontend integration",
    ],

    gradient: "#f59e0b",

    github: "https://github.com/harshchaubey18",

    demo: "https://orvell-pulse.vercel.app/",
  },
];

const Projects = () => {
  const isMobile = useMediaQuery("(max-width:578px)");

  const TYPES = ["All", ...new Set(PROJECTS.map((p) => p.type))];
  const [filter, setFilter] = useState("All");

  useScrollReveal();

  const visibleProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="sr-hidden sr-d1 mb-2">
          <span
            className="section-label"
            style={{
              borderRadius: "4px",
            }}
          >
            Projects
          </span>
        </div>

        <div className="sr-hidden sr-d2 mb-12">
          <div
            className="accent-stripe"
            style={{
              borderRadius: "4px",
            }}
          />

          <h2
            className="font-display text-4xl sm:text-5xl"
            style={{
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Featured
            <br />
            <span className="grad-text font-display italic">Projects</span>
          </h2>

          <p
            className="text-base mt-4 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Backend systems, APIs, and responsive web applications built using
            Laravel, Django, React.js, and modern development practices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="sr-hidden sr-d2 flex flex-wrap gap-2 mb-8">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="font-mono-custom text-xs px-4 py-2 transition-all duration-150"
              style={
                filter === t
                  ? {
                      background: "var(--accent)",
                      color: "#fff",
                      border: "var(--border)",
                      boxShadow: "2px 2px 0px #1a1a1a",
                      borderRadius: "4px",
                      fontWeight: 700,
                    }
                  : {
                      background: "var(--bg-white)",
                      color: "var(--text-secondary)",
                      border: "var(--border)",
                      boxShadow: "2px 2px 0px rgba(26,26,26,0.25)",
                      borderRadius: "4px",
                      fontWeight: 600,
                    }
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleProjects.map((p, i) => (
            <div
              key={`${filter}-${i}`}
              className="reveal-up card overflow-hidden flex flex-col"
              style={{
                borderRadius: "4px",
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {/* Top Bar */}
              <div
                className="h-2 flex-shrink-0"
                style={{
                  background: p.gradient,
                }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <div
                  className={`flex ${
                    isMobile ? "flex-col" : "flex-row"
                  } items-start justify-between gap-3 mb-1`}
                >
                  <h3
                    className="font-bold text-xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>

                  <span
                    className="font-mono-custom text-xs px-3 py-2 flex-shrink-0 mt-0.5"
                    style={{
                      background: p.typeColor,
                      color: "#fff",
                      border: "var(--border)",
                      boxShadow: "2px 2px 0px #1a1a1a",
                      borderRadius: "4px",
                    }}
                  >
                    {p.type}
                  </span>
                </div>

                {/* Subtitle */}
                <p
                  className={`font-mono-custom text-xs ${
                    isMobile && "mt-2"
                  } mb-4`}
                  style={{ color: "var(--text-muted)" }}
                >
                  {p.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {p.desc}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  {p.highlights.map((h, j) => (
                    <div
                      key={j}
                      className="flex items-start gap-2 text-xs mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span
                        className="flex-shrink-0 font-bold"
                        style={{ color: p.gradient }}
                      >
                        →
                      </span>

                      {h}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="font-mono-custom text-xs px-3 py-2"
                      style={{
                        background: "var(--bg-white)",
                        border: "var(--border)",
                        boxShadow: "2px 2px 0px rgba(26,26,26,0.3)",
                        color: "var(--text-secondary)",
                        fontWeight: 600,
                        borderRadius: "4px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline px-4 py-2 text-xs"
                    style={{
                      borderRadius: "4px",
                    }}
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-xs"
                    style={{
                      borderRadius: "4px",
                    }}
                  >
                    Video Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
