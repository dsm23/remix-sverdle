import type { FunctionComponent, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

const Main: FunctionComponent<Props> = ({ children, ...props }) => (
  <main {...props}>{children}</main>
);

export default Main;
