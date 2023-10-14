import { Flex } from "antd";
import { CreateUserForm } from "./components/CreateUserForm";
import { LoginForm } from "./components/LoginForm";
import { TaskList } from "./components/TaskList";

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
    element: <TaskList />,
  },
]);

export function App() {
  return (
    <Flex justify="center" align="center" style={{ height: "calc(100vh - 20px)" }}>
      <RouterProvider router={ROUTER} />
    </Flex>
  );
}
