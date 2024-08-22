import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <main className={s.dialogs}>
      <div>
        <h1>Dialogs</h1>
        <ul className={s.dialogsItems}>{dialogsElements}</ul>
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </main>
  );
};

const AddMessageForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLengthCreator(50)]}
        name="newMessageBody"
        placeholder="Enter your message.."
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogsAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
