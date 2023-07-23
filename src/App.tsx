import Layout from "./layout/Layout";
import SignInForm from "./components/SignInForm";
import CreateAccount from "./components/CreateAccount";
import { Route, Routes } from "react-router-dom";
import Post from "./components/Post";

function App() {
  const paths = [
    {
      path: "/",
      component: <SignInForm />,
    },
    {
      path: "/2",
      component: <CreateAccount />,
    },
    {
      path: "/4",
      component: <Post />,
    },
  ];

  return (
    <Routes>
      {paths.map((path) => (
        <Route path={path.path} element={<Layout>{path.component}</Layout>} />
      ))}
    </Routes>
  );
}

export default App;
