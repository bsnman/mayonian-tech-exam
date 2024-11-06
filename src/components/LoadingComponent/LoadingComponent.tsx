import React from "react";
import styles from "./LoadingComponent.module.scss";

interface LoadingComponentProps {
  message?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  message = "Loading...",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p>{message}</p>
    </div>
  );
};

export default LoadingComponent;
