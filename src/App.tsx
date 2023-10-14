import { Flex } from "antd";
import { CreateUserForm } from "./components/CreateUserForm";

export function App() {
  return (
    <Flex justify="center" align="center" style={{ height: "calc(100vh - 20px)" }}>
      <CreateUserForm />
    </Flex>
  );
}
