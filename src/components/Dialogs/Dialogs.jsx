import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = props.state.newMessageBody;
  let onSendMessageClick = (e) => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <main className={s.dialogs}>
      <div>
        <h1>Dialogs</h1>
        <ul className={s.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div className={s.messages}>
        {messagesElements}
        <form className={s.form} onClick={(e) => e.preventDefault()}>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            name="newmessage"
            id="newpost"
            cols="100"
            rows="2"
            placeholder="Enter your message.."
            required
          ></textarea>
          <input type="submit" value="Send" onClick={onSendMessageClick} />
        </form>
      </div>
    </main>
  );
};

export default Dialogs;
