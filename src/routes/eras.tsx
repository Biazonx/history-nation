import { createFileRoute, Link } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { figures } from "@/data/figures";
import { Clock, KeyRound, Lock, UnlockKeyhole } from "lucide-react";

const lockedEra = {
  name: "Era Perdida",
  accessCode: "SANTOS",
  description:
    "Uma coleção especial, reservada para quem conhece o código.",
};

export const Route = createFileRoute("/eras")({
  head: () => ({
    meta: [
      { title: "History Nation - Navegar por Era" },
      {
        name: "description",
        content: "Viaje pela história era por era: mundo antigo, medieval, era moderna e muito mais.",
      },
    ],
  }),
  component: ErasPage,
});

function ErasPage() {
  const [code, setCode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const lockedFigures = figures.filter((figure) => figure.era === lockedEra.name);
  const publicFigures = figures.filter((figure) => figure.era !== lockedEra.name);

  const grouped = publicFigures.reduce<Record<string, typeof figures>>((acc, f) => {
    (acc[f.era] ||= []).push(f);
    return acc;
  }, {});

  function unlockEra(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code.trim().toUpperCase() === lockedEra.accessCode) {
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Codigo incorreto. Tente novamente.");
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-6 pb-4">
        <div className="aero-pane p-3 md:p-5">
          <section className="aero-frame overflow-hidden">
            <div className="aero-titlebar lg flex items-center gap-2">
              <Clock className="h-4 w-4 text-[oklch(0.7_0.2_145)]" />
              Navegar por Era
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold md:text-4xl">
                Viaje pelo <span className="text-shine">tempo</span>
              </h1>
              <p className="mt-2 max-w-xl text-foreground/75">
                Escolha uma era e conheça as pessoas que a definiram.
              </p>

              <div className="mt-7 space-y-5">
                {Object.entries(grouped).map(([era, list]) => (
                  <section key={era} className="aero-frame overflow-hidden">
                    <div className="aero-titlebar flex items-center justify-between">
                      <span>{era}</span>
                      <span className="aero-chip">{list.length} figuras</span>
                    </div>
                    <ul className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
                      {list.map((f) => (
                        <li key={f.slug}>
                          <Link
                            to="/figures/$slug"
                            params={{ slug: f.slug }}
                            className="flex items-center gap-3 rounded-lg p-2 transition-transform hover:-translate-y-0.5"
                            style={{
                              background: "linear-gradient(180deg, oklch(0.55 0.18 260), oklch(0.55 0.18 260))",
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
                              <div className="font-semibold">{f.lifespan}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

                <section className="aero-frame overflow-hidden">
                  <div className="aero-titlebar flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {isUnlocked ? (
                        <UnlockKeyhole className="h-4 w-4 text-[oklch(0.7_0.2_145)]" />
                      ) : (
                        <Lock className="h-4 w-4 text-[oklch(0.82_0.12_85)]" />
                      )}
                      {lockedEra.name}
                    </span>
                    <span className="aero-chip">
                      {isUnlocked ? `${lockedFigures.length} figuras` : "bloqueada"}
                    </span>
                  </div>

                  {isUnlocked ? (
                    lockedFigures.length > 0 ? (
                      <ul className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
                        {lockedFigures.map((f) => (
                          <li key={f.slug}>
                            <Link
                              to="/figures/$slug"
                              params={{ slug: f.slug }}
                              className="flex items-center gap-3 rounded-lg p-2 transition-transform hover:-translate-y-0.5"
                              style={{
                                background:
                                  "linear-gradient(180deg, oklch(0.55 0.18 260), oklch(0.55 0.18 260))",
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
                                <div className="font-semibold">{f.lifespan}</div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-4">
                        <p className="text-sm text-foreground/75">
                          Nenhuma figura esta marcada como {lockedEra.name} ainda. Para adicionar
                          uma, mude o campo era dela em figures.ts para "{lockedEra.name}".
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="grid gap-4 p-4 md:grid-cols-[1fr_auto] md:items-end">
                      <div>
                        <p className="max-w-xl text-sm text-foreground/75">
                          {lockedEra.description}
                        </p>
                        {error ? (
                          <p className="mt-2 text-sm font-semibold text-destructive">{error}</p>
                        ) : null}
                      </div>

                      <form onSubmit={unlockEra} className="flex flex-col gap-2 sm:flex-row">
                        <label className="sr-only" htmlFor="locked-era-code">
                          Codigo da era perdida
                        </label>
                        <input
                          id="locked-era-code"
                          value={code}
                          onChange={(event) => setCode(event.target.value)}
                          placeholder="Digite o codigo"
                          className="h-10 min-w-0 rounded border border-[#7e9bc2] bg-white px-3 text-sm text-foreground shadow-[inset_0_1px_2px_rgba(0,0,0,0.18)] outline-none focus:border-[#1f6dd6] focus:ring-2 focus:ring-[#9cc8ff]"
                        />
                        <button type="submit" className="aero-button leaf h-10 whitespace-nowrap">
                          <KeyRound className="h-4 w-4" />
                          Acessar
                        </button>
                      </form>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
