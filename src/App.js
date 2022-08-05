import React from "react";
import NavBar from "./components/NavBar";
import TransactionList from "./components/TransactionList";
import {GlobalProvider} from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <NavBar/>
        <TransactionList/>
      </div>
    </GlobalProvider>
  );
};

export default App;