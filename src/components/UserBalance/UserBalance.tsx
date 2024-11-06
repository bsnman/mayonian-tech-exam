import React from "react";
import styles from "./UserBalance.module.scss";
import WalletIcon from "src/assets/wallet.svg?react";

const UserBalance: React.FC = () => {
  return (
    <div className={styles.userBalance}>
      <WalletIcon />
      <div>$1990.6</div>
    </div>
  );
};

export default UserBalance;
