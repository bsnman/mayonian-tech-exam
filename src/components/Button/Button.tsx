import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  style = {},
  type = "button",
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
