import { Link } from "@tanstack/react-router";
import { Globe2, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-6xl px-4 pb-10">
        <div className="aero-pane body p-7 md:p-9">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-9 w-9 place-items-center rounded-md"
                  style={{
                    background: "var(--gradient-aqua-btn)",
                    boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.6), 0 0 14px oklch(0.7 0.2 200 / 0.5)",
                  }}
                  aria-hidden
                >
                  <Globe2 className="h-5 w-5 text-white" />
                </span>
                <span className="text-base font-bold text-shine">History Nation</span>
              </div>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                A living encyclopedia of the people who shaped human history, wrapped
                in a glossy Aero-glass interface for the curious.
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-shine">Explore</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/figures" className="hover:text-primary">All figures</Link></li>
                <li><Link to="/eras" className="hover:text-primary">By era</Link></li>
                <li><Link to="/about" className="hover:text-primary">About the project</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold text-shine">Follow</h4>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Biazonx"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-md text-foreground/90 transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(180deg, oklch(0.55 0.18 260), oklch(0.55 0.18 260))",
                    border: "1px solid oklch(0 0 0 / 0.55)",
                    boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.22)",
                  }}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-white text-glow">
          © {new Date().getFullYear()} History Nation — made for the curious.
        </p>
      </div>
    </footer>
  );
}
