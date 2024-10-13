"use client";

import { LocalSwitcher } from "@/components/local-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  subtitle: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Nomads Coffee",
    description:
      "O Nomads Coffee conecta amantes de café, proporcionando uma maneira interativa e divertida de compartilhar e gerenciar os cafés e lanches trazidos pelo seu time.",
    subtitle:
      "Aplicação Full Stack desenvolvida no intuito de facilitar o gerenciamento de cafés e lanches trazidos pelo meu time no trabalho.",
    images: ["/nomads1.png", "/nomads2.png", "/nomads3.png", "/nomads4.jpg"],
  },
  {
    title: "To Do List",
    description:
      "Descrição do projeto 2, incluindo tecnologias usadas e objetivo.",
    subtitle:
      "Aplicação de Todo List desenvolvida em Angular, permitindo aos usuários criar, editar e excluir tarefas de forma intuitiva.",
    images: ["/angular-todolist.png"],
  },
  {
    title: "Serviço de Aluguel de Carros",
    description:
      "Backend system that offers all the necessary features for a car rental system, like adding new cars, managing users, setting specifications for cars, and processing rentals. Technologies: Node.js with Express.js, Prisma with PostgreSQL, AWS S3, Docker and Swagger.",
    subtitle:
      "Serviço backend que oferece todas as funcionalidades para um sistema de aluguel de carros.",
    images: [
      "/car-rental1.png",
      "/car-rental2.png",
      "/car-rental3.png",
      "/car-rental4.png",
    ],
  },
];

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex justify-between w-full p-4">
        <ModeToggle />
        <LocalSwitcher />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen snap-start text-center">
        <h1 className="text-5xl font-bold mb-4">Arthur Kellermann</h1>
        <p className="text-2xl mb-8">Software Engineer</p>
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

      {/* Experience Section */}
      <section
        className="flex items-center justify-center h-screen snap-start bg-gray-100 dark:bg-secondary"
        id="experience"
      >
        <div className="flex items-center w-full max-w-6xl px-4">
          <div className="w-1/2">
            <Image
              src="/my-photo2.png"
              alt="Sua Foto"
              width={800}
              height={800}
              className="rounded-full"
            />
          </div>

          <div className="border-l-2 border-blue-500 h-full mx-4"></div>
          <div className="w-1/2 pr-8">
            <Card className="bg-gray-200 dark:bg-gray-800 rounded-lg p-8 h-full">
              <h2 className="text-4xl font-semibold mb-6 dark:text-foreground">
                Minha Experiência
              </h2>
              <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                Aqui estão algumas das experiências profissionais que acumulei
                ao longo dos anos:
              </p>
              <div className="flex items-start mb-4">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mb-4"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full mb-4"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                    * Desenvolvi aplicações escaláveis usando React, Next.js e
                    Salesforce.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                    * Colaborei em projetos de integração de sistemas e
                    automação de processos.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                    * Participei ativamente de revisões de código e melhoria
                    contínua de processos.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:text-foreground">
                  Habilidades
                </h3>
                <ul className="list-disc list-inside mt-2">
                  <li className="text-lg text-gray-700 dark:text-muted-foreground">
                    React
                  </li>
                  <li className="text-lg text-gray-700 dark:text-muted-foreground">
                    Next.js
                  </li>
                  <li className="text-lg text-gray-700 dark:text-muted-foreground">
                    Salesforce
                  </li>
                  <li className="text-lg text-gray-700 dark:text-muted-foreground">
                    JavaScript
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-center justify-center h-screen snap-start bg-white dark:bg-primary">
        <h2 className="text-4xl font-semibold mb-8 dark:text-primary-foreground">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div key={index} className="card-project">
              <Card
                className="p-6 bg-card dark:bg-card rounded-lg shadow-lg"
                style={{ height: "450px", maxWidth: "450px" }}
              >
                <Image
                  src={project.images[0]}
                  alt={`Imagem do ${project.title}`}
                  width={600}
                  height={200}
                  className="rounded-lg mb-4"
                  style={{ objectFit: "cover", height: "200px", width: "100%" }}
                />
                <h3 className="text-2xl font-semibold mb-2 dark:text-foreground">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-muted-foreground mb-4">
                  {project.subtitle}
                </p>
                <div className="flex items-center">
                  <Button
                    variant="secondary"
                    onClick={() => openDialog(project)}
                    className="flex items-center justify-center"
                  >
                    Ver mais
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Dialog para detalhes do projeto */}
      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogOverlay />
          <DialogContent
            className="p-4"
            style={{ minWidth: "1000px", minHeight: "auto" }}
          >
            <DialogTitle className="text-3xl font-semibold">
              {selectedProject.title}
            </DialogTitle>
            <DialogDescription>
              <div className="relative mb-4" style={{ padding: "16px" }}>
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Imagem do ${selectedProject.title}`}
                  width={1000}
                  height={300}
                  className="rounded-lg"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p>{selectedProject.description}</p>
            </DialogDescription>

            {/* Carrossel de Imagens */}
            <div className="flex space-x-2 mt-4">
              {selectedProject.images.map((image, index) => (
                <button
                  key={index}
                  className="p-2 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`Imagem do ${selectedProject.title}`}
                    width={100}
                    height={60}
                    className="rounded-md"
                  />
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
}
