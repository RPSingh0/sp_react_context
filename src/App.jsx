import "./App.css";
import { FormProvider } from "./contexts/FormContext";
import Form from "./components/Form.jsx";

export default function App() {
  return (
    <main>
      <FormProvider>
        <Form />
      </FormProvider>
    </main>
  );
}
