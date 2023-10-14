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
  isOpen: boolean;
  task: ITask | null;
  onCancel: () => void;
}

export function TaskFormModal({ isOpen, task, onCancel }: ITaskFormModalProps) {
  return (
    <Modal title={task ? "Atualizar tarefa" : "Criar tarefa"} open={isOpen} onCancel={onCancel} footer={null}>
      <TaskForm id={task?.id} onCancel={onCancel} />
    </Modal>
  );
}
