import { List, Button } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { useState } from "react";
import { DeleteTaskModal } from "../DeleteTaskModal";
import { TaskFormModal } from "../TaskFormModal";

interface ITask {
  id: string; // UUID
  title: string;
  description: string;
  createdAt: string;
  priority: string;
}

const TASKS: ITask[] = [
  {
    id: "e9bcea01-831a-4e10-8642-501ee70e2e2f",
    title: "Tarefa 1",
    description: "Descrição da Tarefa 1",
    createdAt: "2023-10-14T08:00:00",
    priority: "ALTA",
  },
  {
    id: "bdc6be5f-2d29-4806-91c1-482ce3ee8d87",
    title: "Tarefa 2",
    description: "Descrição da Tarefa 2",
    createdAt: "2023-10-14T10:30:00",
    priority: "MEDIA",
  },
  {
    id: "72c3d6f3-60ec-4f4b-a83e-ec5c4cf9e2d7",
    title: "Tarefa 3",
    description: "Descrição da Tarefa 3",
    createdAt: "2023-10-14T14:15:00",
    priority: "BAIXA",
  },
  {
    id: "ce0467a4-5d5e-4bb1-8ecb-cb226798e5e2",
    title: "Tarefa 4",
    description: "Descrição da Tarefa 4",
    createdAt: "2023-10-15T09:45:00",
    priority: "MEDIA",
  },
  {
    id: "8c2e85e0-91c3-40d9-915d-106dfb9a3aa1",
    title: "Tarefa 5",
    description: "Descrição da Tarefa 5",
    createdAt: "2023-10-15T13:30:00",
    priority: "ALTA",
  },
  {
    id: "77ccf12f-1d86-43f4-a3c1-c6f9c328c66b",
    title: "Tarefa 6",
    description: "Descrição da Tarefa 6",
    createdAt: "2023-10-16T08:30:00",
    priority: "BAIXA",
  },
  {
    id: "e1b5b2dd-1f3e-463e-bc7e-e9298563be4e",
    title: "Tarefa 7",
    description: "Descrição da Tarefa 7",
    createdAt: "2023-10-17T11:00:00",
    priority: "MEDIA",
  },
  {
    id: "abcc8aa2-3e74-4c38-8e38-174d9954c9e3",
    title: "Tarefa 8",
    description: "Descrição da Tarefa 8",
    createdAt: "2023-10-17T15:45:00",
    priority: "ALTA",
  },
];

export function TaskList() {
  const [selectedTaskToUpdate, setSelectedTaskToUpdate] = useState<ITask | null>(null);
  const [selectedTaskToDelete, setSelectedTaskToDelete] = useState<ITask | null>(null);

  return (
    <>
      <List<ITask>
        itemLayout="horizontal"
        dataSource={TASKS}
        renderItem={(task) => (
          <List.Item
            actions={[
              <Button size="small" type="text" onClick={() => setSelectedTaskToUpdate(task)}>
                <EditTwoTone style={{ fontSize: "1.125rem" }} twoToneColor="#faad14" />
              </Button>,
              <Button size="small" type="text" onClick={() => setSelectedTaskToDelete(task)}>
                <DeleteTwoTone style={{ fontSize: "1.125rem" }} twoToneColor="#f5222d" />
              </Button>,
            ]}
          >
            <List.Item.Meta title={<a href="#">{task.title}</a>} description={task.description} />
          </List.Item>
        )}
        style={{ width: "100%" }}
      />

      <TaskFormModal task={selectedTaskToUpdate} onCancel={() => setSelectedTaskToUpdate(null)} />

      <DeleteTaskModal task={selectedTaskToDelete} onCancel={() => setSelectedTaskToDelete(null)} />
    </>
  );
}
