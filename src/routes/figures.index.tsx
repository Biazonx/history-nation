import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { figures } from "@/data/figures";
import { ArrowRight, Users } from "lucide-react";

export const Route = createFileRoute("/figures/")({
  head: () => ({
    meta: [
      { title: "History Nation — Todas as Figuras" },
      {
        name: "description",
        content: "Veja todas as figuras históricas do History Nation, da Antiguidade à era Moderna.",
      },
    ],
  }),
  component: FiguresIndex,
});

function FiguresIndex() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <div className="aero-pane p-3 md:p-5">
          <section className="aero-frame overflow-hidden">
            <div className="aero-titlebar lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[oklch(0.7_0.2_145)]" />
                Todas as Figuras
              </span>
              <span className="aero-chip">{figures.length} entradas</span>
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold md:text-4xl">
                O elenco completo <span className="text-shine">da história</span>
              </h1>
              <p className="mt-2 max-w-xl text-foreground/75">
                {figures.length} vidas — e contando. Escolha uma e mergulhe.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {figures.map((f) => (
                  <Link
                    key={f.slug}
                    to="/figures/$slug"
                    params={{ slug: f.slug }}
                    className="figure-card group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-t-[calc(var(--radius-xl)-1px)]">
                      <img
                        src={f.image}
                        alt={f.name}
                        loading="lazy"
                        width={768}
                        height={896}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute left-3 top-3 z-10">
                        <span className="aero-chip leaf">{f.era}</span>
                      </div>
                      <div className="absolute inset-x-3 bottom-3 z-10">
                        <h2 className="text-lg font-bold text-white text-glow">{f.name}</h2>
                        <p className="text-xs text-white/80">{f.title}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm text-foreground/80">{f.tagline}</p>
                      <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[oklch(0.78_0.18_200)]">
                        Ler biografia <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
