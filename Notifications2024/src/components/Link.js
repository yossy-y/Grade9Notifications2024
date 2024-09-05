import React from "react";
import classes from "./Link.module.css";

export default function Link(props) {
  return (
    <a
      target="_blank"
      href={props.path}
      style={{ backgroundImage: `url(${props.background})` }}
      className={`${classes.link} ${classes.linkImg}`}
    >
      <span className={classes.linkText}>{props.linkName}</span>
    </a>
  );
}
