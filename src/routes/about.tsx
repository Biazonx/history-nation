import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Bubbles } from "@/components/site/Bubbles";
import { Info } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "History Nation — About" },
      { name: "description", content: "About History Nation — a frutiger-aero encyclopedia for history fans." },
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
              About History Nation
            </div>
            <Bubbles />
            <div className="relative space-y-4 p-6 text-foreground/85">
              <h1 className="text-3xl font-bold md:text-4xl">
                A glossy, nostalgic <span className="text-shine">home for history</span>
              </h1>
              <p>
                History Nation is a passion project for people who love stories about
                the past — the lives, accidents, ideas, and decisions that nudged the
                world toward what it is today.
              </p>
              <p>
                We wrap those stories in the visual language of mid-2000s
                "Frutiger Aero" — Windows Vista chrome, glossy glass, green grass,
                and floating bubbles. Optimistic, nostalgic, and made for clicking
                around on a Sunday afternoon.
              </p>
              <p>
                Every figure has a dedicated page with images, a written biography,
                and a timeline of key moments. New figures are added regularly.
              </p>
              <div className="pt-2">
                <Link to="/figures" className="aero-button">Browse the figures</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
