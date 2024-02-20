import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = props.state.newMessageBody;
  let onSendMessageClick = (e) => {
    e.preventDefault();
    props.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <main className={s.dialogs}>
      <div>
        <h1>Dialogs</h1>
        <ul className={s.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div className={s.messages}>
        {messagesElements}
        <form className={s.form}>
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
