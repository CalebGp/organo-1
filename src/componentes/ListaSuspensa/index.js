import "./lista-suspensa.css";
import { v4 } from "uuid";

const ListaSuspensa = ({
  label,
  items,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className="lista-suspensa" key={label}>
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
      >
        <option />
        {items.map((item) => (
          <option key={v4()}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
