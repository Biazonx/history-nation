import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Bubbles } from "@/components/site/Bubbles";
import { getFigure, figures } from "@/data/figures";
import type { Figure } from "@/data/figures";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Clock, BookOpen, ListOrdered } from "lucide-react";

export const Route = createFileRoute("/figures/$slug")({
  loader: ({ params }): { figure: Figure } => {
    const figure = getFigure(params.slug);
    if (!figure) throw notFound();
    return { figure };
  },
  head: ({ loaderData }) => {
    const f = loaderData?.figure;
    if (!f) return { meta: [{ title: "History Nation — Figura não encontrada" }] };
    return {
      meta: [
        { title: `History Nation — ${f.name}` },
        { name: "description", content: f.tagline },
        { property: "og:title", content: `History Nation — ${f.name}` },
        { property: "og:description", content: f.tagline },
        { property: "og:image", content: f.image },
      ],
    };
  },
  notFoundComponent: () => (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="aero-pane p-10">
          <h1 className="text-3xl font-bold">Figura não encontrada</h1>
          <p className="mt-3 text-muted-foreground">Não conseguimos encontrar essa figura histórica.</p>
          <Link to="/figures" className="aero-button mt-6 inline-flex">Voltar para todas as figuras</Link>
        </div>
      </main>
      <Footer />
    </>
  ),
  errorComponent: ({ error, reset }) => (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="aero-pane p-10">
          <h1 className="text-3xl font-bold">Algo deu errado</h1>
          <p className="mt-3 text-muted-foreground">{error.message}</p>
          <button onClick={reset} className="aero-button mt-6">Tentar novamente</button>
        </div>
      </main>
      <Footer />
    </>
  ),
  component: FigurePage,
});

function FigurePage() {
  const { figure: f } = Route.useLoaderData() as { figure: Figure };
  const idx = figures.findIndex((x) => x.slug === f.slug);
  const prev = figures[(idx - 1 + figures.length) % figures.length];
  const next = figures[(idx + 1) % figures.length];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <div className="aero-pane p-3 md:p-5">
          <section className="aero-frame overflow-hidden">
            <div className="aero-titlebar lg flex items-center justify-between">
              <span className="flex items-center gap-2 truncate">
                <BookOpen className="h-4 w-4 text-[oklch(0.75_0.18_200)]" />
                <span className="truncate">Biografia · {f.name}</span>
              </span>
              <Link
                to="/figures"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.78_0.18_200)] hover:underline"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Todas as figuras
              </Link>
            </div>

            <div className="relative">
              <Bubbles />
              <div className="relative grid items-center gap-6 p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
                <div>
                  <span className="aero-chip leaf">{f.era}</span>
                  <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] md:text-5xl">
                    <span className="text-shine">{f.name}</span>
                  </h1>
                  <p className="mt-1 text-lg text-foreground/85">{f.title}</p>
                  <p className="mt-4 max-w-xl text-base text-foreground/75 md:text-lg">
                    {f.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="aero-chip"><Calendar className="h-3.5 w-3.5" /> {f.lifespan}</span>
                    <span className="aero-chip"><MapPin className="h-3.5 w-3.5" /> {f.origin}</span>
                    <span className="aero-chip"><Clock className="h-3.5 w-3.5" /> {f.era}</span>
                  </div>
                </div>

                <div className="figure-card overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    width={768}
                    height={896}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5 grid gap-5 md:grid-cols-[1.6fr_1fr]">
            <article className="aero-frame overflow-hidden">
              <div className="aero-titlebar flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[oklch(0.75_0.18_200)]" />
                Biografia
              </div>
              <div className="space-y-5 p-6 text-[1.02rem] leading-relaxed text-foreground/85">
                {f.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>

            <aside className="aero-frame overflow-hidden self-start md:sticky md:top-24">
              <div className="aero-titlebar flex items-center gap-2">
                <ListOrdered className="h-4 w-4 text-[oklch(0.7_0.2_145)]" />
                Momentos-chave
              </div>
              <ol className="space-y-4 p-5">
                {f.highlights.map((h) => (
                  <li key={h.year} className="flex gap-3">
                    <span
                      className="mt-0.5 inline-flex h-7 shrink-0 items-center rounded-full px-3 text-xs font-bold text-white"
                      style={{
                        background: "var(--gradient-aqua-btn)",
                        boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.55)",
                        textShadow: "0 1px 1px oklch(0 0 0 / 0.55)",
                      }}
                    >
                      {h.year}
                    </span>
                    <span className="text-sm text-foreground/85">{h.event}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </section>

          <section className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              to="/figures/$slug"
              params={{ slug: prev.slug }}
              className="aero-frame flex items-center gap-3 p-4 transition-transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-5 w-5 text-[oklch(0.78_0.18_200)]" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Anterior</div>
                <div className="font-semibold">{prev.name}</div>
              </div>
            </Link>
            <Link
              to="/figures/$slug"
              params={{ slug: next.slug }}
              className="aero-frame flex items-center justify-end gap-3 p-4 text-right transition-transform hover:-translate-y-0.5"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Próxima</div>
                <div className="font-semibold">{next.name}</div>
              </div>
              <ArrowRight className="h-5 w-5 text-[oklch(0.78_0.18_200)]" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
