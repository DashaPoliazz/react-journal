import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "@/components/Header";
import { Roboto } from "next/font/google";
import { Paper, Typography } from "@mui/material";
import Post from "@/components/Post";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Live Journal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="wrapper">
        <div className="leftSide">
          <SideNav />
        </div>
        <div className="content">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="rightSide"></div>
      </div>
    </div>
  );
}
