import Layout from "./layout/Layout";
import SignInForm from "./components/SignInForm";
import CreateAccount from "./components/CreateAccount";
import PostPage from "./components/PostPage";
import { Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import PostForm from "./components/post/PostForm";

function App() {
  const paths = [
    {
      path: "/",
      component: <SignInForm />,
    },
    {
      path: "/signup",
      component: <CreateAccount />,
    },
    {
      path: "/posts",
      component: <PostPage />,
    },
    {
      path: "/post/:id",
      component: <Post />,
    },
    { path: "/post/create", component: <PostForm /> },
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
