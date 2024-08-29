import React from "react";
import classes from "./Notifications.module.css";

export default function Notifications() {
  return (
    <ul className={classes.bulletList}>
      <li>הודעה 1.</li>
      <li>הודעה 2.</li>
      <li>הודעה 3.</li>
    </ul>
  );
}
