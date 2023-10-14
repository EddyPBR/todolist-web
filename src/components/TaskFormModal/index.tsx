import { Modal } from "antd";
import { TaskForm } from "../TaskForm";

export interface ITask {
  id: string; // UUID
  title: string;
  description: string;
  createdAt: string;
  priority: string;
}

export interface ITaskFormModalProps {
  task: ITask | null;
  onCancel: () => void;
}

export function TaskFormModal({ task, onCancel }: ITaskFormModalProps) {
  return (
    <Modal title="Alterar tarefa" open={!!task} onCancel={onCancel} footer={null}>
      <TaskForm id={task?.id} onCancel={onCancel} />
    </Modal>
  );
}
