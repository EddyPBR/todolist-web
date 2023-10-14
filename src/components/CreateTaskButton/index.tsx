import { Button } from "antd";
import { TaskFormModal } from "../TaskFormModal";
import { useState } from "react";

export function CreateTaskButton() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Criar tarefa
      </Button>

      <TaskFormModal isOpen={isModalOpen} onCancel={() => setIsModalOpen(false)} task={null} />
    </>
  );
}
