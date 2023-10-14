import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { TasksPage } from "./pages/TasksPage";
import { AppLayout } from "./Layout/AppLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/tarefas" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
