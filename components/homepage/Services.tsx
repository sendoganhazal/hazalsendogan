"use client"
import { motion } from "framer-motion";
import { Search, Globe, Smartphone, FolderKanban, FileText, Palette } from "lucide-react";
const services = [
    {
        title: "SEO Optimization",
        icon: Search,
        desc: "Improving visibility and rankings across major search engines.",
    },
    {
        title: "Web Development",
        icon: Globe,
        desc: "Building responsive, scalable and modern web applications.",
    },
    {
        title: "Web Design",
        icon: Palette,
        desc: "Crafting clean, user‑focused and visually appealing designs.",
    },
    {
        title: "App Development",
        icon: Smartphone,
        desc: "Developing fast and intuitive applications with modern stacks.",
    },
    {
        title: "Project Management",
        icon: FolderKanban,
        desc: "Planning, coordination and delivering efficient digital solutions.",
    },
    {
        title: "Enterprise CMS",
        icon: FileText,
        desc: "Managing and structuring content using enterprise‑level CMS systems.",
    },
];


export function Services() {
    return (
        <section className="services-section">
            <div className="container">
                <h2>Services</h2>


                <div className="grid-view">
                    {services.map(({ title, icon: Icon, desc }) => (
                        <motion.div
                            key={title}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="services-card"
                        >
                            <div className="card-header">
                                <Icon className="w-6 h-6" />
                                <h3 className="title">{title}</h3>
                            </div>
                            <p className="text">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;