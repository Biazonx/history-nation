import { Link } from "@tanstack/react-router";
import { Globe2, Home, Users, Clock, Info } from "lucide-react";

const NAV = [
  { to: "/" as const, label: "Início", Icon: Home },
  { to: "/figures" as const, label: "Figuras", Icon: Users },
  { to: "/eras" as const, label: "Eras", Icon: Clock },
  { to: "/about" as const, label: "Sobre", Icon: Info },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div
          className="relative flex items-center justify-between rounded-2xl border px-3 py-2"
          style={{
            background: "var(--gradient-titlebar)",
            borderColor: "oklch(0 0 0 / 0.6)",
            boxShadow:
              "inset 0 1px 0 oklch(1 0 0 / 0.22), 0 10px 30px -12px oklch(0 0 0 / 0.7)",
          }}
        >
          <Link to="/" className="flex items-center gap-2.5 pl-1">
            <span
              className="grid h-9 w-9 place-items-center rounded-md"
              style={{
                background: "var(--gradient-aqua-btn)",
                boxShadow:
                  "inset 0 1px 0 oklch(1 0 0 / 0.6), 0 0 14px oklch(0.7 0.2 200 / 0.6)",
              }}
              aria-hidden
            >
              <Globe2 className="h-5 w-5 text-white drop-shadow" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold text-shine">History Nation</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Vidas que moldaram o mundo
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex">
            {NAV.map(({ to, label, Icon }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                activeProps={{ className: "aero-navbtn active text-sm" }}
                inactiveProps={{ className: "aero-navbtn text-sm" }}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <Link to="/figures" className="aero-button text-xs">
            Explorar
          </Link>
        </div>
      </div>
    </header>
  );
}
