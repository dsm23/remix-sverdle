import { useState } from "react";
import { flushSync } from "react-dom";
import { transitionHelper } from "~/utils/transitionHelper";

import styles from "./styles.module.css";
import "./viewTransition.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    transitionHelper({
      updateDOM() {
        flushSync(() => {
          setCount((prevCount) => prevCount - 1);
        });
      },
    });
  };

  const increment = () => {
    transitionHelper({
      updateDOM() {
        flushSync(() => {
          setCount(count + 1);
        });
      },
    });
  };

  return (
    <div className={styles.counter}>
      <button
        className="david"
        onClick={decrement}
        aria-label="Decrease the counter by one"
      >
        <svg className={styles.svg} aria-hidden="true" viewBox="0 0 1 1">
          <path className={styles.path} d="M0,0.5 L1,0.5" />
        </svg>
      </button>

      <div className={styles.counterViewport}>
        <div className={styles.counterDigits}>
          <strong className={styles.count}>{count}</strong>
        </div>
      </div>

      <button onClick={increment} aria-label="Increase the counter by one">
        <svg className={styles.svg} aria-hidden="true" viewBox="0 0 1 1">
          <path className={styles.path} d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
