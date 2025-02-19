import { Todo } from '@/types/todo.type';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { TodoContent } from './todo-content';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <Accordion type="multiple" className="border px-4">
      <AccordionItem value={todo.id}>
        <AccordionTrigger className="cursor-pointer">
          {todo.title}
        </AccordionTrigger>
        <AccordionContent>
          <TodoContent todo={todo} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
