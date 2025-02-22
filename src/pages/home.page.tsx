import { DailyProgress } from '@/components/progress/daily-progress';
import { DailyTodo } from '@/components/todo/daily-todo';

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-2">
      <section className="flex flex-col justify-between lg:flex-row">
        <DailyTodo />
        <DailyProgress />
      </section>
    </main>
  );
};
