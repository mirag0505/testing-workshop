import styles from "./App.module.css";
import { Converter } from "./components/Converter";
import { Quote } from "./components/Quote";

export function App() {
  return (
    <main className={styles.main}>
      <Converter />
      <Quote />
    </main>
  );
}
