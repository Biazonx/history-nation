import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Bubbles } from "@/components/site/Bubbles";
import { figures } from "@/data/figures";
import { Sparkles, ArrowRight, BookOpen, Compass, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "History Nation" },
      {
        name: "description",
        content:
          "A frutiger-aero / Windows Vista style encyclopedia of historical figures. Rich biographies, timelines, and stories.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = figures.slice(0, 6);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        {/* MAIN AERO WINDOW */}
        <div className="aero-pane overflow-hidden p-3 md:p-5">
          {/* HERO TITLEBAR */}
          <section className="aero-frame relative overflow-hidden">
            <div className="aero-titlebar lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[oklch(0.75_0.18_200)]" />
                History Nation — Welcome
              </span>
              <span className="hidden text-xs font-normal text-muted-foreground sm:inline">
                v1.0 — Aero Edition
              </span>
            </div>

            <div className="relative">
              <Bubbles />
              <div className="relative px-6 pt-12 pb-14 text-center md:px-10 md:pt-16 md:pb-20">
                <span className="aero-chip aqua">
                  <Sparkles className="h-3.5 w-3.5" />
                  An archive of remarkable lives
                </span>
                <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                  <span className="text-shine">The people</span>
                  <br />
                  <span className="text-foreground text-glow">who shaped the world.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base text-foreground/80 md:text-lg">
                  Dive into glossy, illustrated biographies of history's most fascinating
                  historical figures.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link to="/figures" className="aero-button">
                    <BookOpen className="h-4 w-4" />
                    Browse all figures
                  </Link>
                  <Link to="/eras" className="aero-button leaf">
                    <Compass className="h-4 w-4" />
                    Travel by era
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* STATS ROW */}
          <section className="mt-5 grid grid-cols-3 gap-3">
            {[
              { n: figures.length.toString(), l: "Figures", Icon: Users },
              { n: "4", l: "Eras", Icon: Clock },
              { n: "∞", l: "Curiosity", Icon: BookOpen },
            ].map(({ n, l, Icon }) => (
              <div key={l} className="aero-frame p-4 text-center">
                <Icon className="mx-auto h-4 w-4 text-[oklch(0.75_0.18_200)]" />
                <div className="mt-1.5 text-2xl font-bold text-shine">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </section>

          {/* FEATURED FIGURES */}
          <section className="aero-frame mt-5 overflow-hidden">
            <div className="aero-titlebar flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[oklch(0.7_0.2_145)]" />
                Featured Figures
              </span>
              <Link
                to="/figures"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.78_0.18_200)] hover:underline"
              >
                See all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((f) => (
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
                      <h3 className="text-lg font-bold text-white text-glow">{f.name}</h3>
                      <p className="text-xs text-white/80">{f.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm text-foreground/80">{f.tagline}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[oklch(0.78_0.18_200)]">
                      Read biography <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA STRIP */}
          <section className="aero-frame mt-5 overflow-hidden">
            <div className="aero-titlebar">A whole world of stories</div>
            <div className="relative grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <Bubbles />
              <div className="relative">
                <h3 className="text-2xl font-bold md:text-3xl">
                  One archive, <span className="text-shine">countless lives.</span>
                </h3>
                <p className="mt-2 max-w-xl text-foreground/75">
                  Every figure has a dedicated page with images, a written biography,
                  and a timeline of the moments that mattered.
                </p>
              </div>
              <Link to="/figures" className="aero-button relative">
                Start exploring <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
