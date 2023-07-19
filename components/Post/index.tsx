import React from "react";
import Image from "next/image";
import styles from "./Post.module.scss";
import { Paper, Typography } from "@mui/material";

export default function Post() {
  return (
    <Paper elevation={0} className="p-20">
      <Typography variant="h5" className={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut
        autem iure deleniti eum perspiciatis nemo quibusdam officia corrupti
        deserunt.
      </Typography>
      <Typography className="mt-15 mb-15">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        voluptas sequi error similique. Quibusdam vel vero provident sunt,
        molestiae officia aliquam nihil quo commodi blanditiis, labore est
        delectus deleniti similique.
      </Typography>
      <Image
        src={
          "https://static01.nyt.com/images/2023/06/21/multimedia/00nat-affirmative-action-future-01-klvq/00nat-affirmative-action-future-01-klvq-superJumbo.jpg?quality=75&auto=webp"
        }
        width={600}
        height={400}
        alt="Title image"
      />
    </Paper>
  );
}
