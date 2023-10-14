import { Button, Form, Input } from "antd";

export interface ICreateUserForm {
  name?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export function CreateUserForm() {
  function handleSubmitForm(formData: ICreateUserForm) {
    alert("Necessário integrar com a API" + "\n" + JSON.stringify(formData));
  }

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
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
