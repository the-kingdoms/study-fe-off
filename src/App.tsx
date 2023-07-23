import Layout from "./layout/Layout";
import SignInForm from "./components/SignInForm";
import CreateAccount from "./components/CreateAccount";
import PostPage from "./components/PostPage";
import { Route, Routes } from "react-router-dom";

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
      path: "/3",
      component: <PostPage />,
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
