import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useCreateUser } from "../../hooks/api";

export interface ICreateUserForm {
  name?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export function CreateUserForm() {
  const { mutate: handleSubmitForm, isLoading } = useCreateUser();

  return (
    <Form name="createUser" onFinish={handleSubmitForm} layout="vertical" style={{ width: "100%", maxWidth: 420 }}>
      <Form.Item<ICreateUserForm>
        name="name"
        label="Seu nome"
        rules={[{ required: true, message: "Nome é obrigatório!" }]}
        style={{ width: "100%" }}
      >
        <Input />
      </Form.Item>

      <Form.Item<ICreateUserForm>
        name="username"
        label="Login"
        rules={[
          { required: true, message: "Login é obrigatório!" },
          { min: 3, message: "O login deve conter ao menos 3 caracteres" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<ICreateUserForm>
        name="password"
        label="Senha"
        rules={[
          { required: true, message: "Senha é obrigatório!" },
          { min: 3, message: "A senha deve conter ao menos 3 caracteres" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<ICreateUserForm>
        name="confirmPassword"
        label="Confirmar senha"
        rules={[
          { required: true, message: "A confirmação é obrigatório!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("A senha e a confirmação devem ser iguais!"));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Cadastrar
        </Button>
        <Link to="/">
          <Button type="link">Acessar login</Button>
        </Link>
      </Form.Item>
    </Form>
  );
}
