import React from "react";
import classes from "./HeaderText.module.css";

export default function HeaderText() {
  return (
    <div className={classes.textContent}>
      <h1 className={classes.caption}>ברוכים הבאים לקהילת "אהל-שם"</h1>
      <p className={classes.textParagraph}>שמחים לברך אתכם עם עלייתכם לכיתה ט'.</p>
      <p className={classes.textParagraph}>שימו לב!!!</p>
      <p className={classes.textParagraph}>
        דף זה יתעדכן מדי פעם וירכז את כל ההודעות לשכבת ט' תשפ"ה 
        <br/>
        (חוזר מעודכן
        נהלי פתיחת שנה, קישור להרשמה לקורסים, קישור רכישת מחשבים, נושאים למבחני
        מיון ועבודות קיץ)
      </p>
    </div>
  );
}
