import type { MetaFunction } from "@remix-run/node";
import Counter from "~/components/counter";
import welcomeRef from "~/assets/svelte-welcome.webp";
import welcomeFallbackRef from "~/assets/svelte-welcome.png";

import styles from "./styles.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index = () => (
  <section className={styles.section}>
    <h1 className={styles.heading1}>
      <span className={styles.welcome}>
        <picture>
          <source srcSet={welcomeRef} type="image/webp" />
          <img src={welcomeFallbackRef} alt="Welcome" />
        </picture>
      </span>
      to your new
      <br />
      Remix app
    </h1>

    <h2>
      try editing <strong>src/routes/_index.tsx</strong>
    </h2>

    <Counter />
  </section>
);

export default Index;
