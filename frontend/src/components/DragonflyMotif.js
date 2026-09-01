const palettes = {
  "01": ["#00A896", "#EDE6F7"],
  "02": ["#FFB703", "#00A896"],
  "03": ["#EDE6F7", "#00A896"],
  "04": ["#00A896", "#FFB703"],
  "05": ["#FFB703", "#EDE6F7"],
  "06": ["#00A896", "#EDE6F7"],
};

function DragonflyMotif({ variant = "01", testId }) {
  const [topWing, lowerWing] = palettes[variant] || palettes["01"];

  return (
    <svg
      className="dragonfly-motif"
      viewBox="0 0 80 80"
      role="img"
      aria-label="Libélula decorativa"
      data-testid={testId}
    >
      <g className="dragonfly-wings" stroke="#0C2366" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M38 31C28 8 9 8 8 18c1 12 16 18 30 19Z" fill={topWing} />
        <path d="M42 31C52 8 71 8 72 18c-1 12-16 18-30 19Z" fill={topWing} />
        <path d="M38 40C25 31 10 34 12 46c3 10 16 11 28 0Z" fill={lowerWing} />
        <path d="M42 40C55 31 70 34 68 46c-3 10-16 11-28 0Z" fill={lowerWing} />
      </g>
      <path d="M40 25c-4 7-4 23 0 35 4-12 4-28 0-35Z" fill="#FFB703" stroke="#0C2366" strokeWidth="1.8" />
      <circle cx="40" cy="22" r="5.2" fill="#FFB703" stroke="#0C2366" strokeWidth="1.8" />
      <path d="M37 18c-5-7-8-7-11-5M43 18c5-7 8-7 11-5" fill="none" stroke="#0C2366" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default DragonflyMotif;
