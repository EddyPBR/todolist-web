import { Flex } from "antd";
import { LoginForm } from "../../components/LoginForm";

export function HomePage() {
  return (
    <Flex justify="center" align="center" style={{ height: "calc(100vh - 20px)" }}>
      <LoginForm />
    </Flex>
  );
}
