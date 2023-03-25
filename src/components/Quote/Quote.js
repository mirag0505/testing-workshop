import { quotes } from "./quotes";
import styles from "./Quote.module.css";
import { selectRandomQuote } from "./selectRandomQuote";

const defaultQuote = selectRandomQuote(quotes);

export function Quote({ quote = defaultQuote }) {
  const { text, author } = quote;

  return (
    <footer className={styles.quote}>
      <blockquote className={styles.blockquote}>{text}</blockquote>
      <cite className={styles.author}>-- {author}</cite>
    </footer>
  );
}
