import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Betty" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Katrine" },
    { id: 4, name: "Juan" },
    { id: 5, name: "Valery" },
  ];
  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How is your day?!" },
    { id: 3, message: "Yo" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <main className={s.dialogs}>
      <div>
        <h1>Dialogs</h1>
        <ul className={s.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </main>
  );
};

export default Dialogs;
