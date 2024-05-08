import type { FunctionComponent, HTMLAttributes } from "react";
import cx from "clsx";

import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLElement>;

const Main: FunctionComponent<Props> = ({ children, className, ...props }) => (
  <main className={cx(styles.main, className)} {...props}>
    {children}
  </main>
);

export default Main;
