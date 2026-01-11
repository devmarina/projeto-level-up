import Button from "./Button";
import "./ContainerQuestao.css";

export default function ContainerQuestao({
  pergunta,
  alternativas,
  selecionada,
  onSelect,
  onConfirm,
}) {
  const getLetter = (index) => String.fromCharCode(65 + index);

  return (
    <div className="questao-box">
      <h2 className="questao-enunciado">{pergunta}</h2>

      <div className="alternativas-list">
        {alternativas.map((alt, index) => {
          const isSelected = selecionada === index;

          return (
            <div
              key={index}
              className={`alternativa-item ${isSelected ? "selected" : ""}`}
              onClick={() => onSelect(index)}
            >
              <div className="alternativa-circle">{getLetter(index)}</div>
              <span className="alternativa-texto">{alt}</span>
            </div>
          );
        })}
      </div>

      <div className="questao-footer">
        <Button
          variant="primary"
          size="medium"
          onClick={onConfirm}
          disabled={selecionada === null}
          style={{ padding: "12px 30px", fontSize: "16px" }}
        >
          Confirmar
        </Button>
      </div>
    </div>
  );
}
