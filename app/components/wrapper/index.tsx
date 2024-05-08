import type { FunctionComponent, HTMLAttributes } from "react";
import cx from "clsx";

import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLDivElement>;

const Wrapper: FunctionComponent<Props> = ({
  children,
  className,
  ...props
}) => (
  <div className={cx(styles.app, className)} {...props}>
    {children}
  </div>
);

export default Wrapper;
