import { Form, Input, Select, Button, Flex } from "antd";

export type ITaskPriorityEnum = "HIGH" | "MEDIUM" | "LOW";

export interface ITaskForm {
  title: string;
  description: string;
  priority: ITaskPriorityEnum;
}

export interface ITaskFormProps {
  id?: string;
  onCancel?: () => void;
}

const SELECT_OPTIONS = [
  { value: "HIGH", label: "Alta" } as const,
  { value: "MEDIUM", label: "Media" } as const,
  { value: "LOW", label: "Baixa" } as const,
];

export function TaskForm({ id, onCancel }: ITaskFormProps) {
  function handleSubmitForm(formData: ITaskForm) {
    if (id) {
      alert("Chamou a função de atualizar tarefa: " + "\n" + JSON.stringify(formData));
    } else {
      alert("Chamou a função de criar tarefa: " + "\n" + JSON.stringify(formData));
    }
  }

  return (
    <Form name="task" onFinish={handleSubmitForm} layout="vertical" style={{ width: "100%", maxWidth: 480 }}>
      <Form.Item<ITaskForm> name="title" label="Título" rules={[{ required: true, message: "Título é obrigatório" }]}>
        <Input />
      </Form.Item>

      <Form.Item<ITaskForm>
        name="description"
        label="Descrição"
        rules={[{ required: true, message: "Descrição é obrigatório" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<ITaskForm>
        name="priority"
        label="Descrição"
        rules={[{ required: true, message: "Descrição é obrigatório" }]}
        initialValue="MEDIUM"
      >
        <Select<ITaskPriorityEnum> defaultValue="MEDIUM" options={SELECT_OPTIONS} />
      </Form.Item>

      <Form.Item>
        <Flex justify="flex-end" gap={8}>
          <Button onClick={onCancel} htmlType="reset">
            {onCancel ? "Cancelar" : "Limpar"}
          </Button>
          <Button type="primary" htmlType="submit">
            {id ? "Atualizar" : "Criar"}
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
