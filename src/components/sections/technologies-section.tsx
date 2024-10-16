import React from "react";
import { FaNodeJs, FaReact, FaDocker, FaGit } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAngular, SiDotnet, SiSalesforce, SiHtml5, SiCss3, SiMysql } from "react-icons/si";

export function TechnologiesSection() {
  const technologies = [
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "TypeScript", icon: <SiTypescript size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },
    { name: "Angular", icon: <SiAngular size={50} /> },
    { name: ".NET", icon: <SiDotnet size={50} /> },
    { name: "HTML5", icon: <SiHtml5 size={50} /> },
    { name: "CSS3", icon: <SiCss3 size={50} /> },
    { name: "Docker", icon: <FaDocker size={50} /> },
    { name: "Salesforce", icon: <SiSalesforce size={50} /> },
    { name: "Git", icon: <FaGit size={50} /> },
    { name: "MySQL", icon: <SiMysql size={50} /> },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center h-screen snap-start bg-gray-100 dark:bg-secondary space-y-20"
      id="technologies"
    >
      <h2 className="text-4xl font-semibold mb-10 dark:text-foreground">
        Tecnologias
      </h2>

      <div className="grid grid-cols-4 gap-10">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-gray-700 dark:text-foreground mb-2">
              {tech.icon}
            </div>
            <p className="text-lg font-semibold dark:text-foreground">
              {tech.name}
            </p>
          </div>
        ))} 
      </div>
    </section>
  );
}
