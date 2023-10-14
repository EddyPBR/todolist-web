import { Flex } from "antd";
import { CreateUserForm } from "./components/CreateUserForm";
import { LoginForm } from "./components/LoginForm";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/cadastro",
    element: <CreateUserForm />,
  },
  {
    path: "/tarefas",
    element: <h1>Minhas tarefas</h1>
  }
]);

export function App() {
  return (
    <Flex justify="center" align="center" style={{ height: "calc(100vh - 20px)" }}>
      <RouterProvider router={ROUTER} />
    </Flex>
  );
}
