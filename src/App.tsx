import Layout from "./layout/Layout";
import SignInForm from "./components/SignInForm";
import CreateAccount from "./components/CreateAccount";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Layout>
        <Route path="/" element={<SignInForm />} />
        <Route path="/2" element={<CreateAccount />} />
      </Layout>
    </Routes>
  );
}

export default App;
