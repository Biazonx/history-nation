import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { figures } from "@/data/figures";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/eras")({
  head: () => ({
    meta: [
      { title: "History Nation — Browse by Era" },
      { name: "description", content: "Travel through history era by era — ancient world, Renaissance, modern era, and more." },
    ],
  }),
  component: ErasPage,
});

function ErasPage() {
  const grouped = figures.reduce<Record<string, typeof figures>>((acc, f) => {
    (acc[f.era] ||= []).push(f);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <div className="aero-pane p-3 md:p-5">
          <section className="aero-frame overflow-hidden">
            <div className="aero-titlebar lg flex items-center gap-2">
              <Clock className="h-4 w-4 text-[oklch(0.7_0.2_145)]" />
              Browse by Era
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold md:text-4xl">
                Travel through <span className="text-shine">time</span>
              </h1>
              <p className="mt-2 max-w-xl text-foreground/75">
                Pick an era and meet the people who defined it.
              </p>

              <div className="mt-7 space-y-5">
                {Object.entries(grouped).map(([era, list]) => (
                  <section key={era} className="aero-frame overflow-hidden">
                    <div className="aero-titlebar flex items-center justify-between">
                      <span>{era}</span>
                      <span className="aero-chip">{list.length} figures</span>
                    </div>
                    <ul className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
                      {list.map((f) => (
                        <li key={f.slug}>
                          <Link
                            to="/figures/$slug"
                            params={{ slug: f.slug }}
                            className="flex items-center gap-3 rounded-lg p-2 transition-transform hover:-translate-y-0.5"
                            style={{
                              background: "linear-gradient(180deg, oklch(0.3 0.012 240), oklch(0.18 0.01 240))",
                              border: "1px solid oklch(0 0 0 / 0.55)",
                              boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.18)",
                            }}
                          >
                            <img
                              src={f.image}
                              alt={f.name}
                              loading="lazy"
                              width={56}
                              height={56}
                              className="h-14 w-14 rounded-md object-cover"
                              style={{ boxShadow: "0 0 0 1px oklch(0 0 0 / 0.6)" }}
                            />
                            <div>
                              <div className="font-semibold">{f.name}</div>
                              <div className="text-xs text-muted-foreground">{f.lifespan}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
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
