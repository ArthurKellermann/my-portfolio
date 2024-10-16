import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ContactCard } from "../contact-card";

export function ContactSection() {
  return (
    <section
      className="flex items-center justify-center h-[25vh] snap-start bg-gray-900 dark:bg-primary"
      id="contact"
    >
      <div className="grid grid-cols-3 gap-8">
        <ContactCard
          icon={<FaEnvelope size={40} className="text-white" />}
          link="mailto:arthur.kellermann956@gmail.com"
        />
        <ContactCard
          icon={<FaGithub size={40} className="text-white" />}
          link="https://github.com/ArthurKellermann"
        />
        <ContactCard
          icon={<FaLinkedin size={40} className="text-white" />}
          link="https://www.linkedin.com/in/arthur-kellermann/"
        />
      </div>
    </section>
  );
}

