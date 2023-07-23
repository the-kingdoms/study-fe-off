import React from "react";
import SignInForm from "./components/SignInForm";
import CreateAccount from "./components/CreateAccount";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/2" element={<CreateAccount />} />
    </Routes>
  );
}

export default App;
