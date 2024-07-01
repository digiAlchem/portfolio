import { HTMLProps } from "react";
import styles from "./Terminal.module.scss";

type TerminalProps = Pick<HTMLProps<HTMLDivElement>, "children">;

export const Terminal = ({ children }: TerminalProps) => {
  return (
    <div className={styles.codeTitle}>
      &gt; {children}
      <span className={styles.cursorBlink}>_</span>
    </div>
  );
};