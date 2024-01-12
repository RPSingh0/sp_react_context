import {memo} from "react";

const PasswordInput = memo(function PasswordInput({name, value, onChange}) {

    function handleChange(event) {
        onChange({type: "SET_PASSWORD", payload: event.target.value})
    }

    return (
        <input
            type="text"
            id={name}
            placeholder="Confirm Password"
            value={value}
            onChange={handleChange}/>
    );
})

export default PasswordInput;