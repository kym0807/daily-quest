import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TodoItem } from './todo-item';

type TodoListProps = ComponentProps<'div'> & {
  todoTitle: string;
};

export const TodoList = ({ todoTitle, className, ...rest }: TodoListProps) => {
  return (
    <Card className={cn('', className)} {...rest}>
      <CardHeader>
        <CardTitle>{todoTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <TodoItem />
      </CardContent>
    </Card>
  );
};
