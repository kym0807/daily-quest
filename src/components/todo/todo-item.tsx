import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { TodoContent } from './todo-content';

export const TodoItem = () => {
  return (
    <Accordion type="multiple" className="border px-4">
      <AccordionItem value="todo-1">
        <AccordionTrigger className="cursor-pointer">
          Todo Sample
        </AccordionTrigger>
        <AccordionContent>
          <TodoContent />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
