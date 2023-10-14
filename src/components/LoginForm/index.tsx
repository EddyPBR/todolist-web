import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

export interface ILoginForm {
  username?: string;
  password?: string;
}

export function LoginForm() {
  function handleSubmitForm(formData: ILoginForm) {
    alert("Necessário integrar com a API" + "\n" + JSON.stringify(formData));
  }

  return (
    <Form name="createUser" onFinish={handleSubmitForm} layout="vertical" style={{ width: "100%", maxWidth: 420 }}>
      <Form.Item<ILoginForm>
        name="username"
        label="Login"
        rules={[
          { required: true, message: "Login é obrigatório!" },
          { min: 3, message: "O login deve conter ao menos 3 caracteres" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<ILoginForm>
        name="password"
        label="Senha"
        rules={[
          { required: true, message: "Senha é obrigatório!" },
          { min: 3, message: "A senha deve conter ao menos 3 caracteres" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Link to="/cadastro">
          <Button type="link">Cadastre-se</Button>
        </Link>
      </Form.Item>
    </Form>
  );
}
