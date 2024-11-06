import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
