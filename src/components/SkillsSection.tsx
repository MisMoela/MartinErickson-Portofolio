import { useState } from "react";
import { cn } from "../lib/utils";

// Import all icons from assets
import ArduinoIcon from "@/assets/arduino_icon.png";
import AzureIcon from "@/assets/azure_icon.png";
import CIcon from "@/assets/c_icon.png";
import CiscoIcon from "@/assets/cisco_icon.png";
import CssIcon from "@/assets/css_icon.png";
import FigmaIcon from "@/assets/figma_icon.png";
import GithubIcon from "@/assets/github_icon.png";
import HtmlIcon from "@/assets/html_icon.png";
import JavaIcon from "@/assets/java_icon.png";
import JavaFXIcon from "@/assets/javafx_icon.png";
import JsIcon from "@/assets/javascript_icon.png";
import MongoDBIcon from "@/assets/mongodb_icon.png";
import MySQLIcon from "@/assets/mysql_icon.png";
import NodeJSIcon from "@/assets/nodejs_icon.png";
import NotionIcon from "@/assets/notion_icon.png";
import PythonIcon from "@/assets/python_icon.png";
import ReactIcon from "@/assets/reactjs_icon.png";
import RStudioIcon from "@/assets/rstudio_icon.png";
import SQLIcon from "@/assets/sql_icon.png";
import TailwindIcon from "@/assets/tailwind_icon.png";
import TSIcon from "@/assets/typescript_icon.png";
import VSCodeIcon from "@/assets/visualstudiocode_icon.png";
import ViteIcon from "@/assets/vite_icon.png";

// Define skills with local icons
const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: HtmlIcon },
  { name: "CSS", category: "frontend", icon: CssIcon },
  { name: "JavaScript", category: "frontend", icon: JsIcon },
  { name: "TypeScript", category: "frontend", icon: TSIcon },
  { name: "JavaFX", category: "frontend", icon: JavaFXIcon },
  { name: "ReactJS", category: "frontend", icon: ReactIcon },
  { name: "Vite", category: "frontend", icon: ViteIcon },
  { name: "Tailwind CSS", category: "frontend", icon: TailwindIcon },

  // Backend
  { name: "C", category: "backend", icon: CIcon },
  { name: "Arduino", category: "backend", icon: ArduinoIcon },
  { name: "Python", category: "backend", icon: PythonIcon },
  { name: "Java", category: "backend", icon: JavaIcon },
  { name: "SQL", category: "backend", icon: SQLIcon },
  { name: "MySQL", category: "backend", icon: MySQLIcon },
  { name: "MongoDB", category: "backend", icon: MongoDBIcon },
  { name: "NodeJS", category: "backend", icon: NodeJSIcon },
  { name: "RStudio", category: "backend", icon: RStudioIcon },

  // Tools
  { name: "Figma", category: "tools", icon: FigmaIcon },
  { name: "Cisco Packet Tracer", category: "tools", icon: CiscoIcon },
  { name: "Notion", category: "tools", icon: NotionIcon },
  { name: "VS Code", category: "tools", icon: VSCodeIcon },
  { name: "GitHub", category: "tools", icon: GithubIcon },
  { name: "Azure", category: "tools", icon: AzureIcon },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            All of my skills, which I have acquired through both college coursework and external projects, reflect the diverse experiences that have shaped my growth.
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="card card-hover flex items-center gap-4 p-6 shadow-xs"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
