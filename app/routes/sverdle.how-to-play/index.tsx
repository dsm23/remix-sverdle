import cx from "clsx";
import type { MetaFunction } from "@remix-run/node";

import styles from "./styles.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "How to play Sverdle" },
    { name: "description", content: "How to play Sverdle" },
  ];
};

const HowToPlay = () => (
  <div className="text-column">
    <h1>How to play Sverdle</h1>

    <p>
      Sverdle is a clone of{" "}
      <a href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>, the
      word guessing game. To play, enter a five-letter English word. For
      example:
    </p>

    <div className={styles.example}>
      <span className={cx(styles.span, styles.close)}>r</span>
      <span className={cx(styles.span, styles.missing)}>i</span>
      <span className={cx(styles.span, styles.close)}>t</span>
      <span className={cx(styles.span, styles.missing)}>z</span>
      <span className={cx(styles.span, styles.exact)}>y</span>
    </div>

    <p>
      The <span className={cx(styles.span, styles.exact)}>y</span> is in the
      right place. <span className={cx(styles.span, styles.close)}>r</span> and
      <span className={cx(styles.span, styles.close)}>t</span>
      are the right letters, but in the wrong place. The other letters are
      wrong, and can be discarded. Let{"'"}s make another guess:
    </p>

    <div className={styles.example}>
      <span className={cx(styles.span, styles.exact)}>p</span>
      <span className={cx(styles.span, styles.exact)}>a</span>
      <span className={cx(styles.span, styles.exact)}>r</span>
      <span className={cx(styles.span, styles.exact)}>t</span>
      <span className={cx(styles.span, styles.exact)}>y</span>
    </div>

    <p>
      This time we guessed right! You have <strong>six</strong> guesses to get
      the word.
    </p>

    <p>
      Unlike the original Wordle, Sverdle runs on the server instead of in the
      browser, making it impossible to cheat. It uses <code>&lt;form&gt;</code>{" "}
      and cookies to submit data, meaning you can even play with JavaScript
      disabled!
    </p>
  </div>
);

export default HowToPlay;
