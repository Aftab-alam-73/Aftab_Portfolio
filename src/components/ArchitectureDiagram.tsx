// Simplified architecture diagram for the Gamerge backend.
// Drawn as inline SVG so it scales, needs no image file, and matches the site theme.
// Edit the labels below if your real architecture differs.
export const ArchitectureDiagram = ({ className }: { className?: string }) => {
  const box = "rgba(255,255,255,0.06)";
  const line = "rgba(255,255,255,0.35)";
  const accent = "#6ee7b7"; // emerald-300
  const sky = "#38bdf8"; // sky-400
  const text = "rgba(255,255,255,0.9)";
  const muted = "rgba(255,255,255,0.55)";

  const cols = [8, 112, 216]; // x positions of the three columns (each 96 wide)
  const services = [
    { title: "Matchmaking", lines: ["bot fallback", "after 10s"] },
    { title: "Wallet", lines: ["transaction-", "safe"] },
    { title: "Game &", lines: ["tournament", "services"] },
  ];

  return (
    <svg
      viewBox="0 0 320 460"
      role="img"
      aria-label="Simplified Gamerge backend architecture: players connect to Socket.IO servers synced through Redis pub/sub, which talk to matchmaking, wallet and game services backed by MongoDB."
      className={className}
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={line} />
        </marker>
      </defs>

      {/* Players */}
      <rect x="70" y="8" width="180" height="40" rx="10" fill={box} stroke={line} />
      <text x="160" y="33" textAnchor="middle" fontSize="13" fill={text}>Players (web / mobile)</text>
      <line x1="160" y1="48" x2="160" y2="78" stroke={line} markerEnd="url(#arrow)" />

      {/* Socket.IO servers */}
      {cols.map((x) => (
        <g key={`io-${x}`}>
          <rect x={x} y="80" width="96" height="52" rx="10" fill={box} stroke={accent} />
          <text x={x + 48} y="103" textAnchor="middle" fontSize="13" fill={text}>Socket.IO</text>
          <text x={x + 48} y="120" textAnchor="middle" fontSize="10.5" fill={muted}>server instance</text>
          <line x1={x + 48} y1="132" x2={x + 48} y2="160" stroke={line} />
        </g>
      ))}

      {/* Redis bar */}
      <rect x="8" y="160" width="304" height="42" rx="10" fill="rgba(56,189,248,0.12)" stroke={sky} />
      <text x="160" y="178" textAnchor="middle" fontSize="13" fill={text}>Redis pub/sub</text>
      <text x="160" y="194" textAnchor="middle" fontSize="10.5" fill={muted}>Socket.IO adapter</text>

      {/* Services */}
      {services.map((s, i) => {
        const x = cols[i];
        return (
          <g key={s.title}>
            <line x1={x + 48} y1="202" x2={x + 48} y2="236" stroke={line} markerEnd="url(#arrow)" />
            <rect x={x} y="238" width="96" height="78" rx="10" fill={box} stroke={line} />
            <text x={x + 48} y="262" textAnchor="middle" fontSize="13" fill={text}>{s.title}</text>
            {s.lines.map((l, j) => (
              <text key={l} x={x + 48} y={280 + j * 15} textAnchor="middle" fontSize="10.5" fill={muted}>{l}</text>
            ))}
            <line x1={x + 48} y1="316" x2={x + 48} y2="346" stroke={line} />
          </g>
        );
      })}

      {/* MongoDB */}
      <rect x="8" y="346" width="304" height="42" rx="10" fill="rgba(110,231,183,0.10)" stroke={accent} />
      <text x="160" y="372" textAnchor="middle" fontSize="13" fill={text}>MongoDB</text>

      <text x="160" y="418" textAnchor="middle" fontSize="10.5" fill={muted}>Simplified architecture</text>
      <text x="160" y="434" textAnchor="middle" fontSize="10.5" fill={muted}>Deployed on AWS</text>
    </svg>
  );
};
