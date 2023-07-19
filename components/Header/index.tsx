import { Paper, Button, IconButton, Avatar } from "@mui/material";
import React, { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import MessageIcon from "@mui/icons-material/InsertComment";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <Paper
      classes={{
        root: styles.root,
      }}
      elevation={0}
    >
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <svg
          className={styles.logo}
          width="267"
          height="302"
          viewBox="0 0 267 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path d="M70 181H125V245.5L70 301V181Z" fill="black" />
            <path
              d="M153.362 170.045L212.289 168.825L258.932 300.842L202.404 302.013L153.362 170.045Z"
              fill="black"
            />
            <rect
              y="301"
              width="72"
              height="70"
              transform="rotate(-90 0 301)"
              fill="#E8A427"
            />
            <path d="M70 301L56 229L70 229L70 301Z" fill="#C58C21" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M167.5 1.00001L70 1.00001L70 181L265 181L265 91L265 1.00001L167.5 1.00001ZM203 61L130 61L130 121L203 121L203 61Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="264.609"
                height="300.953"
                fill="white"
                transform="translate(1.58582) rotate(0.227153)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <Button
          className={styles.penButton}
          variant="contained"
          style={{
            backgroundColor: "white",
          }}
        >
          <EditIcon color="action" />
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://placekitten.com/200/140"
        />
        <ArrowDownIcon />
      </div>
    </Paper>
  );
};
