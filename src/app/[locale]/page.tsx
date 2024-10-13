import { LocalSwitcher } from "@/components/local-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex justify-between w-full p-4">
        <ModeToggle />
        <LocalSwitcher />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen snap-start text-center ">
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
          <div className="w-1/2 pr-8">
            <h2 className="text-4xl font-semibold mb-6 dark:text-foreground">
              Minha Experiência
            </h2>
            <p className="text-lg text-gray-700 dark:text-muted-foreground mb-4">
              Detalhes sobre suas experiências profissionais, projetos e
              habilidades.
            </p>
            <p className="text-lg text-gray-700 dark:text-muted-foreground">
              Exemplo: Desenvolvi aplicações escaláveis usando React, Next.js e
              Salesforce.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/public/img/my-photo.jpg"
              alt="Sua Foto"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-center justify-center h-screen snap-start bg-white dark:bg-primary">
        <h2 className="text-4xl font-semibold mb-8 dark:text-primary-foreground">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://github.com/seu-projeto1" className="card-project">
            <div className="p-6 bg-card dark:bg-card rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 dark:text-foreground">
                Projeto 1
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                Descrição curta do projeto 1.
              </p>
            </div>
          </a>
          <a href="https://github.com/seu-projeto2" className="card-project">
            <div className="p-6 bg-card dark:bg-card rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 dark:text-foreground">
                Projeto 2
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                Descrição curta do projeto 2.
              </p>
            </div>
          </a>
          <a href="https://github.com/seu-projeto3" className="card-project">
            <div className="p-6 bg-card dark:bg-card rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 dark:text-foreground">
                Projeto 3
              </h3>
              <p className="text-gray-700 dark:text-muted-foreground">
                Descrição curta do projeto 3.
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
