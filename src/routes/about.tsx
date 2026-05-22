import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Bubbles } from "@/components/site/Bubbles";
import { Info } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "History Nation — Sobre" },
      {
        name: "description",
        content: "Sobre o History Nation — uma enciclopédia frutiger-aero para fãs de história.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-6 pb-4">
        <div className="aero-pane p-3 md:p-5">
          <section className="aero-frame relative overflow-hidden">
            <div className="aero-titlebar lg flex items-center gap-2">
              <Info className="h-4 w-4 text-[oklch(0.75_0.18_200)]" />
              Sobre o History Nation
            </div>
            <Bubbles />
            <div className="relative space-y-4 p-6 text-foreground/85">
              <h1 className="text-3xl font-bold md:text-4xl">
                Um lar nostálgico e brilhante <span className="text-shine">para a história</span>
              </h1>
              <p>
                History Nation é um projeto de paixão para quem ama histórias
                sobre o passado — as vidas, os acidentes, as ideias e as decisões que
                empurraram o mundo até se tornar o que é hoje.
              </p>
              <p>
                Revestimos essas histórias com a linguagem visual do
                "Frutiger Aero" do meio dos anos 2000 — vidro brilhante, clima de
                Windows Vista, grama verde e bolhas flutuando. Otimista, nostálgico
                e feito para navegar sem pressa numa tarde de domingo.
              </p>
              <p>
                Cada figura tem uma página dedicada com imagens, uma biografia escrita
                e uma linha do tempo com momentos-chave. Novas figuras são adicionadas regularmente.
              </p>
              <div className="pt-2">
                <Link to="/figures" className="aero-button">Ver as figuras</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
