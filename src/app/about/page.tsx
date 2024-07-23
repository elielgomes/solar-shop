import React from "react";
import Image from "next/image";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center mt-16 md:mt-28">
      <div className="w-full">
        <div className="h-[400px] rounded-md bg-[url('/assets/about/about-banner.jpg')] bg-center bg-no-repeat bg-cover">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white uppercase">Sobre</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 md:py-28 bg-background">
        <div className="container flex flex-col gap-12 lg:flex-row">
          <div className="basis-1/2 text-base">
            <p className="uppercase text-primary text-xs tracking-widest font-bold lg:mb-2">
              Quem somos?
            </p>
            <h2 className="text-foreground font-bold text-3xl lg:text-5xl">
              Solar Shop
            </h2>
            <div className="space-y-4 mt-4">
              <p>
                Na Solar Shop, estamos dedicados a fornecer soluções de energia
                solar de alta qualidade que capacitam nossos clientes a
                construir um futuro mais sustentável. Com uma vasta gama de
                produtos, incluindo painéis solares, transformadores, cabos e
                inversores, oferecemos tudo o que você precisa para implementar
                projetos de energia renovável eficientes e econômicos.
              </p>
              <p>
                Nossa equipe de especialistas está aqui para ajudar em cada
                etapa do seu projeto, garantindo que você receba o suporte e os
                recursos necessários para alcançar seus objetivos energéticos.
                Junte-se a nós na missão de promover a sustentabilidade e a
                inovação, transformando a maneira como o mundo consome energia.
              </p>
              <ul className="gap-2 flex flex-col text-muted-foreground">
                <li className="flex gap-2 before:content-['✔']">
                  Somos revendedores autorizados de marcas líderes do setor
                </li>
                <li className="flex gap-2 before:content-['✔']">
                  Trabalhamos com produtos de excelente qualidade
                </li>
                <li className="flex gap-2 before:content-['✔']">
                  Nos preocupamos com a satisfação de nossos clientes
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/2 flex gap-4">
            <div className="basis-1/2 mt-20">
              <Image
                src="/assets/about/about-2.jpg"
                alt="About"
                width={350}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div className="basis-1/2">
              <Image
                src="/assets/about/about-1.jpg"
                alt="About"
                width={350}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
