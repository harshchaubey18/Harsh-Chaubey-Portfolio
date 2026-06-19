import { useScrollReveal } from "./useScrollReveal";

const EXPERIENCES = [
  {
    company: "TechnoBren Infotech Pvt. Ltd.",
    role: "Software Developer",
    period: "September 2025 – Present",
    location: "Jaunpur, India",
    type: "Full-time",
    color: "#ff2d20",

    projects: [
      {
        name: "Shift Fitness — Laravel Backend System",

        tags: [
          "PHP",
          "Laravel",
          "REST APIs",
          "MySQL",
          "PostgreSQL",
          "Laravel Passport",
          "Sanctum",
          "Spatie",
          "Postman",
        ],

        bullets: [
          "Developed backend modules for gym member management, trainer onboarding, and subscription handling using PHP and Laravel.",
  "Built RESTful APIs for workout plan generation, progress tracking, and personalized fitness recommendations.",
  "Integrated AI-powered chat system to assist users with workout guidance, fitness queries, and personalized suggestions.",
  "Implemented real-time chat functionality between gym members and trainers for consultation and workout support.",
  "Designed and optimized database schemas for user profiles, workout history, diet plans, and fitness progress tracking using MySQL/PostgreSQL.",
  "Developed secure authentication and role-based access control for admins, trainers, and gym members using Laravel Sanctum and Passport.",
  "Implemented scheduling APIs for trainer sessions, workout bookings, and class management.",
  "Tested and debugged APIs using Postman while collaborating with frontend teams for smooth integration and deployment."
        ],
      },
    ],
  },

  {
    company: "Techpile Technology Pvt Ltd.",

    role: "Software Developer Intern",

    period: "July 2024 – September 2024",

    location: "Lucknow, India",

    type: "Summer Training",

    color: "#2563eb",

    projects: [
      {
        name: "College Management System",

        tags: [
          "Django",
          "Python",
          "SQLite",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Tailwind CSS",
        ],

        bullets: [
           "Developed a College Management System using Django to streamline student, faculty, and course management processes.",
  "Implemented modules for student registration, attendance tracking, timetable management, and examination records.",
  "Built authentication and role-based access for admins, teachers, and students to ensure secure access control.",
  "Designed responsive dashboards and user interfaces using HTML, CSS, Bootstrap, and Tailwind CSS for better usability.",
  "Managed backend logic and database operations using SQLite for storing student records, course details, and academic data.",
  "Integrated features for assignment submission, result publishing, and academic progress tracking.",
  "Implemented CRUD functionalities for managing departments, courses, faculty details, and student profiles.",
  "Collaborated on debugging, UI enhancements, and performance optimization to improve system efficiency."
        ],
      },
    ],
  },
];

const Experience = () => {
  useScrollReveal();

  return (
    <section
      id="experience"
      className="py-24 relative"
      style={{ background: "var(--bg)" }}
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
            Work Experience
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
            Where I've
            <br />
            <span className="grad-text font-display italic">Contributed</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className={`sr-hidden sr-d${
                (i % 2) + 1
              } card overflow-hidden flex flex-col`}
              style={{
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Company Header */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 mb-0"
                style={{
                  background: exp.color,
                  border: "var(--border)",
                  boxShadow: "var(--shadow-md)",
                  borderBottom: "none",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              >
                <div>
                  <h3 className="font-bold text-xl text-white">
                    {exp.company}
                  </h3>

                  <p className="font-mono-custom text-xs mt-1 text-white opacity-80">
                    {exp.role}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 mt-2 sm:mt-0">
                  <span className="font-mono-custom text-xs text-white opacity-80">
                    {exp.period}
                  </span>

                  <span
                    className="font-mono-custom text-xs px-3 py-1 w-fit"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      borderRadius: "4px",
                    }}
                  >
                    {exp.type} · {exp.location}
                  </span>
                </div>
              </div>

              {/* Project Section */}
              <div
                style={{
                  border: "var(--border)",
                  borderTop: "none",
                  boxShadow: "var(--shadow-md)",
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius: "4px",
                  overflow: "hidden",
                }}
              >
                {exp.projects.map((proj, pi) => (
                  <div
                    key={pi}
                    className="p-6"
                    style={{
                      borderBottom:
                        pi < exp.projects.length - 1 ? "var(--border)" : "none",

                      background: "var(--bg-card)",
                    }}
                  >
                    {/* Project Name */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h4
                        className="font-bold text-sm"
                        style={{
                          color: "var(--text-primary)",
                        }}
                      >
                        {proj.name}
                      </h4>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.tags.map((t, ti) => (
                        <span
                          key={ti}
                          className="tag"
                          style={{
                            borderRadius: "4px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-3">
                      {proj.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-3 text-sm"
                          style={{
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span
                            className="mt-1.5 w-2 h-2  flex-shrink-0"
                            style={{
                              background: exp.color,
                            }}
                          />

                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
