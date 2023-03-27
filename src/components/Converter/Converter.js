import styles from "./Converter.module.css";
import { useConverter as converterHook } from "./useConverter";

export function Converter({ useConverter = converterHook }) {
  const { rub, usd, updateRub, updateUsd } = useConverter();

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
          onChange={(e) => updateRub(e.target.value)}
        />
      </label>
      <label>
        Сумма в долларах
        <input
          type="number"
          name="usd"
          min="0"
          step="1"
          value={usd}
          onChange={(e) => updateUsd(e.target.value)}
        />
      </label>
    </form>
  );
}
