import {memo} from "react";

const NameInput = memo(function NameInput({name, value, onChange}) {

    function handleChange(event) {
        onChange({type: "SET_NAME", payload: event.target.value})
    }

    return (
        <input
            type="text"
            id={name}
            placeholder="Name"
            value={value}
            onChange={handleChange}/>
    );
})

export default NameInput;