import "./ProgressBar.css";

export default function ProgressBar({ porcentagem = 0, cor = "#20adcd" }) {
  const pct = Number(porcentagem) || 0;
  const clamped = Math.min(100, Math.max(0, pct));

  return (
    <div
      className="progress-bg"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
    >
      <div
        className="progress-fill"
        style={{ width: `${clamped}%`, backgroundColor: cor }}
      ></div>
    </div>
  );
}
