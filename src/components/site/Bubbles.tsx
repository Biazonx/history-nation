import bubble from "@/assets/bubble.png";

export function Bubbles() {
  const items = [
    { size: 120, top: "10%", left: "6%", cls: "float-slow", op: 0.7 },
    { size: 70, top: "30%", left: "85%", cls: "float-med", op: 0.6 },
    { size: 180, top: "60%", left: "78%", cls: "float-slow", op: 0.5 },
    { size: 90, top: "75%", left: "12%", cls: "float-fast", op: 0.65 },
    { size: 50, top: "20%", left: "55%", cls: "float-med", op: 0.55 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((b, i) => (
        <img
          key={i}
          src={bubble}
          alt=""
          className={`absolute ${b.cls}`}
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            opacity: b.op,
          }}
        />
      ))}
    </div>
  );
}
