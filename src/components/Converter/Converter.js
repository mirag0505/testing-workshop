import styles from "./Converter.module.css";

export function Converter() {
  return (
    <form className={styles.converter}>
      <label>
        Сумма в рублях
        <input type="number" name="rub" min="0" step="1" />
      </label>
      <label>
        Сумма в рублях
        <input type="number" name="usd" min="0" step="1" />
      </label>
    </form>
  );
}
