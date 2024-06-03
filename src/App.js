import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";

import SalaryForm from "./Components/SalaryForm";
import SalaryDisplay from "./Components/SalaryDisplay";
import "./index.scss";
import "@fontsource/roboto";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SalaryForm />
        <SalaryDisplay />
      </div>
    </Provider>
  );
}

export default App;
