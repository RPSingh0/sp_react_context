import NameInput from "./NameInput.jsx";
import EmailInput from "./EmailInput.jsx";
import PasswordInput from "./PasswordInput.jsx";
import React from "react";
import {useForm} from "../contexts/FormContext.jsx";

export default function Form() {

    const {state, dispatch} = useForm();

    return (
        <form>
            <NameInput name={"name"} value={state.nameInput} onChange={dispatch}/>
            <EmailInput name={"email"} value={state.emailInput} onChange={dispatch}/>
            <PasswordInput name={"password"} value={state.passwordInput} onChange={dispatch}/>
        </form>
    );
}
