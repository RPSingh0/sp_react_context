// creating a context here ...
import {createContext, useContext, useReducer} from "react";

const FormContext = createContext();

// the initial state, no need to memoize this part ;)
const initialFormState = {
    nameInput: "",
    emailInput: "",
    passwordInput: "",
};

/**
 A reducer to handle all the events like:
 * SET_NAME, SET_EMAIL, SET_PASSWORD, SET_CONFIRM_PASSWORD
 */
function reducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return {...state, nameInput: action.payload};
        case "SET_EMAIL":
            return {...state, emailInput: action.payload};
        case "SET_PASSWORD":
            return {...state, passwordInput: action.payload};
        default:
            throw new Error("Action not recognised");
    }
}

// the context provider component
function FormProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialFormState);

    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    );
}

// custom hook to use context throughout the app
function useForm() {
    const context = useContext(FormContext);

    if (context === undefined) {
        // just for the dev to know that the context is not available
        throw new Error("Form context is used outside of context provider...");
    }

    return context;
}

export {FormProvider, useForm};
