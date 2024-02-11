import "./App.module.css";
import styles from "./App.module.css";
import { Confirmation } from "./components/Confirmation/Confirmation";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <>
      <main>
        <Form />
        <Confirmation />
      </main>
    </>
  );
}

export default App;
