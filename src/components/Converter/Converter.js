import styles from "./Converter.module.css";
import { useState } from "react";

export function Converter() {
  const [rub, setRub] = useState(100);
  const [dol, setDol] = useState(1);

  return (
    <form className={styles.converter}>
      <label>
        Сумма в рублях
        <input
          type="number"
          name="rub"
          min="0"
          step="1"
          value={rub}
          onChange={(e) => setRub(e.target.value)}
        />
      </label>
      <label>
        Сумма в долларах
        <input
          type="number"
          name="usd"
          min="0"
          step="1"
          value={dol}
          onChange={(e) => setDol(e.target.value)}
        />
      </label>
    </form>
  );
}
