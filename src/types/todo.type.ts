type TodoPriority = 'high' | 'medium' | 'low';
export type TodoType = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: TodoPriority;
  tags: string[];
};
