import {memo} from "react";

const EmailInput = memo(function EmailInput({name, value, onChange}) {

    function handleChange(event) {
        onChange({type: "SET_EMAIL", payload: event.target.value})
    }

    return (
        <input
            type="text"
            id={name}
            placeholder="Email"
            value={value}
            onChange={handleChange}/>
    );
})

export default EmailInput;