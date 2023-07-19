import React from "react";
import styles from "./SideNav.module.scss";
import { Button } from "@mui/material";
import FireIcon from "@mui/icons-material/Whatshot";
import MessageIcon from "@mui/icons-material/Message";
import Rating from "@mui/icons-material/TrendingUp";
import ListIcon from "@mui/icons-material/List";

export default function SideNav() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon color="action" />
            Feed
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon color="action" />
            Messages
          </Button>
        </li>
        <li>
          <Button>
            <Rating color="action" />
            Trending
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon color="action" />
            Subscribes
          </Button>
        </li>
      </ul>
    </div>
  );
}
