import React, { useState } from 'react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogTitle,
  } from "@/components/ui/dialog"; 
import { Button } from '../ui/button';
import { Card } from '../ui/card';

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
        'Este projeto é uma aplicação Full Stack desenvolvida para o meu time de trabalho, com o objetivo de gerenciar lanches, cafés feitos e trazidos por cada membro. O frontend foi implementado utilizando Next.js com TypeScript, garantindo uma interface reativa e otimizada. No backend, utilizei Node.js e TypeScript, com Prisma para ORM e SQLite como banco de dados. Toda a aplicação foi conteinerizada utilizando Docker para garantir consistência nos ambientes de desenvolvimento e produção, e o deploy foi realizado na AWS.',
      subtitle:
        "Aplicação Full Stack para gerenciamento de lanches e cafés, utilizando tecnologias modernas e arquitetura escalável.",
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
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
    setCurrentImageIndex(0);
  };

  return (
    <>
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
                style={{ height: '450px', maxWidth: '450px' }}
              >
                <Image
                  src={project.images[0]}
                  alt={`Imagem do ${project.title}`}
                  width={600}
                  height={200}
                  className="rounded-lg mb-4"
                  style={{ objectFit: 'cover', height: '200px', width: '100%' }}
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

      {/* Project Dialog */}
      {selectedProject && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogOverlay />
          <DialogContent
            className="p-4"
            style={{ minWidth: '1000px', minHeight: 'auto' }}
          >
            <DialogTitle className="text-3xl font-semibold">
              {selectedProject.title}
            </DialogTitle>
            <DialogDescription>
              <div className="relative mb-4" style={{ padding: '16px' }}>
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={`Imagem do ${selectedProject.title}`}
                  width={1000}
                  height={300}
                  className="rounded-lg"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <p>{selectedProject.description}</p>
            </DialogDescription>

            {/* Image Carousel */}
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
    </>
  );
}
