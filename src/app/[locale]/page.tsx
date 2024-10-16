"use client";

import { EmailIcon } from "@/components/icons/email-icon";
import { LocalSwitcher } from "@/components/local-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import TypeWritingTitle from "@/components/type-writing-title";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Home Section */}
      <section
        className="relative flex flex-col items-center justify-center h-screen snap-start text-center"
        id="home"
      >
        <div className="absolute top-0 left-0 flex justify-between w-full p-4">
          <ModeToggle />
          <LocalSwitcher />
        </div>

        <h1 className="text-5xl font-bold mb-4">Arthur Kellermann</h1>
        <TypeWritingTitle />

        <button
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <a href="#experience">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </a>
          </svg>
        </button>
      </section>

      <ExperienceSection />

      <ProjectsSection />

      <TechnologiesSection />
    </main>
  );
}
