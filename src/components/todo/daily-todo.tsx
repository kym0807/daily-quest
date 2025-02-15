import { TodoList } from './todo-list';

export const DailyTodo = () => {
  return (
    <section className="flex flex-col gap-4 p-4">
      <TodoList todoTitle="일일 TODO" />
    </section>
  );
};
