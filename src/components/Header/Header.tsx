import React from "react";
import styles from "./Header.module.scss";
import appLogo from "src/assets/F1M5_Logo.webp";
import BarIcon from "src/assets/3BAR.svg?react";
import UserHeadIcon from "src/assets/userhead.svg?react";
import Button from "src/components/Button";
import UserBalanace from "src/components/UserBalance";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Button>
              <BarIcon title="Menu" />
            </Button>
            <img src={appLogo} />
          </div>
        </div>
        <div className={styles.right}>
          <UserBalanace />
          <div className={styles.divider} />
          <Button>
            <UserHeadIcon title="Profile" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
