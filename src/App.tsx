import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cadastro",
    element: <RegisterPage />,
  },
  {
    path: "/tarefas",
    element: <TasksPage />,
  },
]);

export function App() {
  return <RouterProvider router={ROUTER} />;
}
