import React from "react";
import styles from "./HomeBottomBar.module.scss";

import SportsIcon from "src/assets/SPORTS.svg?react";
import FavoritesIcon from "src/assets/FAVE.svg?react";
import InviteIcon from "src/assets/INVITE.svg?react";
import LiveIcon from "src/assets/LIVE.svg?react";
import CashierIcon from "src/assets/CASHIER.svg?react";
import Button from "src/components/Button";

const HomeBottomBar: React.FC = () => {
  const links = [
    {
      text: "SPORTS",
      icon: <SportsIcon />,
    },
    {
      text: "FAVORITES",
      icon: <FavoritesIcon />,
    },
    {
      text: "INVITE",
      icon: <InviteIcon />,
    },
    {
      text: "CASINO LIVE",
      icon: <LiveIcon />,
    },
    {
      text: "CASHIER",
      icon: <CashierIcon />,
    },
  ];

  return (
    <div className={styles.bottomBar}>
      {links.map((link, index) => (
        <Button className={`${styles.button}`} key={index}>
          {link.icon}
          {link.text}
        </Button>
      ))}
    </div>
  );
};

export default HomeBottomBar;
