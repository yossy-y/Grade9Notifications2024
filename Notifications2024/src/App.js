import classes from "./App.module.css";

// import HeaderImage from "./components/HeaderImage";
import Logo from "./assets/Images/Logo.png";
import HeaderText from "./components/HeaderText";
// import Notifications from "./components/Notifications";
import Link from "./components/Link";

import Letter from "./assets/Images/Letter.jpg";
import SchoolUniform from "./assets/Images/SchoolUniform.jpg";
// import TimeTable from "./assets/Images/TimeTable.jpg";
import RingtoneBoard from "./assets/Images/RingtoneBoard.jpg";
import ClassroomsLocation from "./assets/Images/ClassroomsLocation.jpg";
import BooksList from "./assets/Images/BooksList.jpg";
import LaptopPurchase from "./assets/Images/LaptopPurchase.jpg";
import LockerRental from "./assets/Images/LockerRental.jpg";
// import VacationSchedule from "./assets/Images/VacationSchedule.jpg";

import LetterPDF from "./assets/files/LetterTo9thGradeStudentsAndTheirParents.pdf";
import SchoolLifestylePDF from "./assets/files/SchoolLifestyle.pdf";
import BooksListPDF from "./assets/files/9thGradeBooksList.pdf";
import ClassroomsLocationPDF from "./assets/files/9thGradeLocation.pdf";
import RingtoneBoard2025PDF from "./assets/files/RingtoneBoard2025.pdf";
import LaptopPurchasePDF from "./assets/files/LaptopPurchase.pdf";
import LockerRentalPDF from "./assets/files/LockerRental.pdf";

function App() {
  return (
    <>
      <header className={classes.topHeader}>
        {/* <HeaderImage /> */}
        <img src={Logo} alt="Ohel-Shem log" className={classes.logoImage} />
        <HeaderText />
      </header>
      <main>
        {/* <section className={classes.sectionNotification}>
          <Notifications />
        </section> */}
        <section className={classes.sectionLinks}>
          <Link linkName="אגרת להורים" background={Letter} path={LetterPDF} />
          <Link linkName='אורח חיים' background={SchoolUniform} path={SchoolLifestylePDF} />
          {/* <Link linkName="מערכת שעות" background={TimeTable} /> */}
          <Link
            linkName="לוח צילצולים"
            background={RingtoneBoard}
            path={RingtoneBoard2025PDF}
          />
          <Link
            linkName="מיקומי כיתות"
            background={ClassroomsLocation}
            path={ClassroomsLocationPDF}
          />
          <Link
            linkName="השאלת ספרים"
            background={BooksList}
            path={BooksListPDF}
          />
          <Link
            linkName="קלסוס ספרי לימוד דיגיטלים"
            background={BooksList}
            path={"https://classoos.co.il/?p=45038"}
          />
          <Link
            linkName="רכישת מחשב נייד"
            background={LaptopPurchase}
            path={LaptopPurchasePDF}
          />
          <Link
            linkName="השכרת לוקרים"
            background={LockerRental}
            path={LockerRentalPDF}
          />
          {/* <Link linkName="לוח חופשות" background={VacationSchedule} /> */}
        </section>
      </main>
    </>
  );
}

export default App;
