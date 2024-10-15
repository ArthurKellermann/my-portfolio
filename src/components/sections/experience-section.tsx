import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/card';

export function ExperienceSection() {
  return (
    <section
      className="flex items-center justify-center h-screen snap-start bg-gray-100 dark:bg-secondary"
      id="experience"
    >
      <div className="flex items-center w-full">
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
                Sou um Engenheiro de Software de 19 anos e estudante apaixonado de Ciências da Computação na Universidade do Vale do Rio dos Sinos. Minha jornada na programação começou na faculdade, e desde o meu primeiro &quot;Hello World&quot;, soube que essa era a carreira que eu queria seguir. Durante meu primeiro ano na área, me aprofundei no estudo de Desenvolvimento Web Full Stack, onde pude aplicar meus conhecimentos em diversos projetos pessoais.
              </p>

              <div className="flex items-start mb-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-muted-foreground">
                    Levo comigo que a vontade de aprender aliada à paixão pela área de atuação transforma qualquer trabalho ou estudo em algo leve e divertido, e gostar do que faz é a maior skill que alguém pode ter.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-semibold dark:text-foreground mb-1">
                Estagiário de Engenharia de Software
              </p>
              <p className="text-sm text-gray-600 dark:text-muted-foreground mb-1">
                Dell Technologies Inc. | Maio 2024 - Presente | Eldorado do Sul, RS
              </p>

              <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
                A Dell Technologies é uma empresa líder em soluções de tecnologia que oferece uma ampla gama de produtos e serviços. Como estagiário de Engenharia de Software, tenho a oportunidade de contribuir para soluções inovadoras em um time ágil e internacional.
              </p>

              <div className="flex items-start mb-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-muted-foreground">
                    Atualmente sou desenvolvedor, onde atuo na entrega de novas funcionalidades em uma plataforma de CRM baseada em nuvem, com mais de 16 mil usuários ativos.
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
