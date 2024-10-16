import React from "react";
import Image from "next/image";
import { Card } from "../ui/card";

export function ExperienceSection() {
  return (
    <section
      className="flex items-center justify-center h-screen snap-start bg-gray-100 dark:bg-secondary"
      id="experience"
    >
      <div className="flex">
        <div className="w-1/2">
          <Image
            src="/my-photo2.png"
            alt="Sua Foto"
            width={700}
            height={800}
            className="rounded-full"
          />
        </div>

        <div className="w-2/3 pr-20">
          <Card className="bg-gray-200 dark:bg-gray-800 rounded-lg p-8 h-full">
            <h2 className="text-4xl font-semibold mb-6 dark:text-foreground">
              Experiência
            </h2>

            <div className="mt-6">
              <p className="font-semibold dark:text-foreground mb-1">
                Minha Jornada
              </p>
              <p className="text-sm text-gray-600 dark:text-muted-foreground mb-1">
                Fev 2023 - Presente
              </p>

              <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                Sou um engenheiro de software de 19 anos e estudante apaixonado
                por Ciências da Computação na Universidade do Vale do Rio dos
                Sinos. Minha jornada na programação começou durante a faculdade,
                e desde o meu primeiro &quot;Hello World&quot;, percebi que essa
                era a carreira que queria seguir. No meu primeiro ano na área, me
                aprofundei no desenvolvimento web Full Stack, aplicando meus
                conhecimentos em diversos projetos pessoais e expandindo minhas
                habilidades.
              </p>

              <div className="flex items-start mb-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-muted-foreground">
                    Levo comigo que quando o aprendizado é movido pela paixão, o
                    esforço deixa de ser um peso e se transforma na própria
                    alegria de evoluir. É a constância que nos mantém avançando,
                    e a persistência que nos leva à excelência.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-semibold dark:text-foreground mb-1">
                Estagiário de Engenharia de Software
              </p>
              <p className="text-sm text-gray-600 dark:text-muted-foreground mb-1">
                Dell Technologies Inc. | Maio 2024 - Presente | Eldorado do Sul,
                RS
              </p>

              <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                A Dell Technologies é uma empresa líder em soluções de
                tecnologia que oferece uma ampla gama de produtos e serviços.
                Como estagiário de Engenharia de Software na Dell, colaboro com
                um grupo internacional como parte da equipe de DTX Tools and
                Automation (Dell Technologies Online Experience).
              </p>

              <div className="flex items-start mb-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-muted-foreground">
                    Atualmente sou Desenvolvedor Salesforce, onde atuo na
                    entrega de novas funcionalidades em uma plataforma de CRM
                    baseada em nuvem, com mais de 16 mil usuários ativos. Na
                    Dell, tenho a oportunidade de trabalhar em um time ágil e
                    internacional, participando de projetos inovadores e
                    contribuindo em todo o Ciclo de Desenvolvimento de Software
                    (SDLC).
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
