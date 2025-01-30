import { Progress } from '../ui/progress';

export const HomeHeader = () => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold md:text-2xl">
          안녕하세요, <span className="text-primary">김영민</span>님!
        </h1>
        <p className="text-sm text-gray-500">
          오늘도 화이팅입니다. 퀘스트를 완수해 봅시다!
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">
          Lv. <span className="text-primary">12</span>
        </p>
        <Progress value={60} className="mt-1 w-28" />
        <p className="mt-1 text-xs text-gray-400">경험치 60%</p>
      </div>
    </header>
  );
};
