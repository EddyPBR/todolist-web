import { Flex } from "antd";

import { CreateTaskButton } from "../../components/CreateTaskButton";
import { TaskList } from "../../components/TaskList";

export function TasksPage() {
  return (
    <Flex vertical gap={24}>
      <Flex justify="flex-end">
        <CreateTaskButton />
      </Flex>
      <TaskList />
    </Flex>
  );
}
