import { Modal, Typography } from "antd";

export interface ITask {
  id: string; // UUID
  title: string;
  description: string;
  createdAt: string;
  priority: string;
}

export interface IDeleteTaskModalProps {
  task: ITask | null;
  onCancel: () => void;
}

export function DeleteTaskModal({ task, onCancel }: IDeleteTaskModalProps) {
  function handleDeleteTask() {
    alert("Remover tarefa");
  }

  return (
    <Modal
      title="Remover tarefa"
      open={!!task}
      onCancel={onCancel}
      onOk={handleDeleteTask}
      okType="danger"
      okText="Apagar"
      cancelText="Cancelar"
      okButtonProps={{
        type: "primary",
      }}
    >
      <Typography.Title level={5}>Atenção!</Typography.Title>
      <Typography.Text type="secondary">
        Você tem certeza que deseja apagar a tarefa? - A tarefa não poderá ser recuperada
      </Typography.Text>
    </Modal>
  );
}
