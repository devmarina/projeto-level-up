import "./ProgressBar.css";

export default function ProgressBar({ porcentagem, cor = "#20adcd" }) {
  return (
    <div className="progress-bg">
      <div
        className="progress-fill"
        style={{ width: `${porcentagem}%`, backgroundColor: cor }}
      ></div>
    </div>
  );
}
