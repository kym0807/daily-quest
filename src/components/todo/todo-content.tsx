import { TodoType } from '@/types/todo.type';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

export const TodoContent = ({
  todos,
  toggleTodo,
}: {
  todos: TodoType[];
  toggleTodo: (id: string) => void;
}) => {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between rounded border p-2"
        >
          <div className="flex items-center gap-3">
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              className="z-20"
            />
            <div>
              <p
                className={`font-medium ${
                  todo.completed ? 'text-muted-foreground line-through' : ''
                }`}
              >
                {todo.title}
              </p>
              {todo.description && (
                <p className="text-muted-foreground text-sm">
                  {todo.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`rounded px-2 py-1 text-xs ${
                todo.priority === 'high'
                  ? 'bg-red-500 text-white'
                  : todo.priority === 'medium'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-green-500 text-white'
              }`}
            >
              {todo.priority.toUpperCase()}
            </span>
            <Button variant="ghost" size="sm">
              보기
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
