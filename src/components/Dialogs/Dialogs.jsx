import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  return (
    <main className={s.dialogs}>
      <div>
        <h1>Dialogs</h1>
        <ul className={s.dialogsItems}>
          <DialogItem name="Betty" id="1" />
          <DialogItem name="Alex" id="2" />
          <DialogItem name="Katrine" id="3" />
          <DialogItem name="Juan" id="4" />
          <DialogItem name="Valery" id="5" />
        </ul>
      </div>
      <div className={s.messages}>
        <Message message="Hi!" />
        <Message message="How is your day?!" />
        <Message message="Yo" />
      </div>
    </main>
  );
};

export default Dialogs;
