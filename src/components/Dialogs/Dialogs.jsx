import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <main className={s.dialogs}>
      <div>
        <h1>Dialogs</h1>
        <ul className={s.dialogsItems}>
          <li className={s.dialog + " " + s.active}>Betty</li>
          <li className={s.dialog}>Alex</li>
          <li className={s.dialog}>Katrine</li>
          <li className={s.dialog}>Juan</li>
          <li className={s.dialog}>Valery</li>
        </ul>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How is your day?</div>
        <div className={s.message}>Yo</div>
      </div>
    </main>
  );
};

export default Dialogs;
