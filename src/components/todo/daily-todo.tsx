import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { todos as sampleData } from '@/constants/data';
import { TodoType } from '@/types/todo.type';
import { TodoContent } from './todo-content';

export const DailyTodo = () => {
  const [todos, setTodos] = useState<TodoType[]>(sampleData);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-bold">오늘의 할 일</h2>
        <Button variant="outline" size="sm">
          + 추가
        </Button>
      </header>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>할 일 목록</CardTitle>
          <div className="text-muted-foreground text-sm">
            {todos.filter((todo) => !todo.completed).length}개 남음
          </div>
        </CardHeader>
        <CardContent>
          <TodoContent todos={todos} toggleTodo={toggleTodo} />
        </CardContent>
      </Card>
    </section>
  );
};
