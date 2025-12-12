"use client"
import { motion } from "framer-motion";
import { Code, Layout, MousePointerClick, Palette } from "lucide-react";


const skills = [
  {
    id: 0,
    label: "HTML",
    color: "cyan"
  },
  {
    id: 1,
    label: "CSS",
    color: "blue"
  },
  {
    id: 2,
    label: "SASS/SCSS/LESS",
    color: "sky"
  },
  {
    id: 3,
    label: "JavaScript",
    color: "indigo"
  },
  {
    id: 4,
    label: "TypeScript",
    color: "violet"
  },
  {
    id: 5,
    label: "React",
    color: "purple"
  },
  {
    id: 6,
    label: "Next.js",
    color: "fuchsia"
  },
  {
    id: 7,
    label: "Vite",
    color: "rose"
  },

  {
    id: 8,
    label: "Node.js",
    color: "teal"
  },
  {
    id: 9,
    label: "REST API",
    color: "emerald"
  },
  {
    id: 10,
    label: "Strapi CMS",
    color: "green"
  },
  {
    id: 11,
    label: "Directus CMS",
    color: "lime"
  },
  {
    id: 12,
    label: "Git",
    color: "orange"
  },
  {
    id: 13,
    label: "Responsive Web Development",
    color: "amber"
  },
  {
    id: 14,
    label: "HTML Email Templates",
    color: "yellow"
  },
  {
    id: 15,
    label: "Tailwind CSS",
    color: "teal"
  },
  {
    id: 16,
    label: "PrimeReact",
    color: "cyan"
  },
  {
    id: 17,
    label: "Bootstrap",
    color: "blue"
  },
  {
    id: 18,
    label: "Material UI",
    color: "indigo"
  },
  {
    id: 19,
    label: "Figma",
    color: "pink"
  },
  {
    id: 20,
    label: "Business Analysis",
    color: "emerald"
  },
  {
    id: 21,
    label: "User Experiences (UX)",
    color: "rose"
  },


];

function Skills() {
  return (
    <section className='skills-section'>
      <div className='skills-container'>
        <h2>Skills</h2>
        <div className="grid-view">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`skills-card`}
            >
              {skill.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills