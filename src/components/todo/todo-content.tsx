import { Todo } from '@/types/todo.type';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';

type TodoContentProps = {
  todo: Todo;
};

export const TodoContent = ({ todo }: TodoContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>{todo.description}</h2>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {todo.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span>미완료</span>
          <Switch className="cursor-pointer" />
          <span>완료</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2.5">
        <Textarea className="h-12 w-full" value={todo.detail} />
        <Button type="submit" className="h-14 cursor-pointer">
          저장
        </Button>
      </div>
    </div>
  );
};
