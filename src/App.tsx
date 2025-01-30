import { QuizCard } from './components/card/quiz-card';
import { ScheduleCard } from './components/card/schedule-card';
import { TodoCard } from './components/card/todo-card';
import { HomeHeader } from './components/home/home-header';
import { HomeQuest } from './components/home/home-quest';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-4">
      <HomeHeader />
      <HomeQuest />
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ScheduleCard />
        <TodoCard />
        <QuizCard />
      </div>
    </div>
  );
};

export default App;
