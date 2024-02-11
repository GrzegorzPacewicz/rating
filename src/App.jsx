import { useState } from "react";
import "./App.module.css";
import { Confirmation } from "./components/Confirmation/Confirmation";
import { Form } from "./components/Form/Form";

function App() {
  const [formData, setFormData] = useState({
    formValue: 0,
    formSubmitted: false,
  });

  function handleChange(event) {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      formValue: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormData({ ...formData, formSubmitted: true });
  }

  return (
    <>
      <main>
        {!formData.formSubmitted ? (
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Confirmation selectedValue={formData.formValue} />
        )}
      </main>
    </>
  );
}

export default App;
