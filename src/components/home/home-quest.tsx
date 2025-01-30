import { mockQuests } from '@/constants/home-items';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { CircleProgress } from '../ui/circle-progress';

export const HomeQuest = () => {
  const totalQuests = mockQuests.length;
  const doneQuests = mockQuests.filter((q) => q.isDone).length;
  const progress = (doneQuests / totalQuests) * 100;

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 p-6 text-white shadow-lg">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="mb-4 md:mb-0 md:w-2/3">
          <h2 className="text-2xl font-bold md:text-3xl">오늘의 퀘스트</h2>
          <p className="mt-2 text-sm text-white/90">
            데일리 미션을 완료하고 레벨업하세요!
          </p>
          <ul className="mt-4 space-y-2">
            {mockQuests.slice(0, 2).map((quest) => (
              <li key={quest.id} className="flex items-center space-x-2">
                <CheckCircle
                  size={18}
                  className={quest.isDone ? 'text-white' : 'text-white/50'}
                />
                <span
                  className={
                    quest.isDone ? 'line-through opacity-70' : 'font-medium'
                  }
                >
                  {quest.title}
                </span>
              </li>
            ))}
            {totalQuests > 2 && (
              <li className="text-sm text-white/80">
                외 {totalQuests - 2}개 더...
              </li>
            )}
          </ul>
          <div className="mt-4 flex space-x-2">
            <Button
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => alert('퀘스트 확인')}
            >
              전체 퀘스트 보기
            </Button>
            <Button
              variant="secondary"
              className="border-white/50 bg-secondary text-black hover:bg-white/20"
              onClick={() => alert('새 퀘스트 추가')}
            >
              새 퀘스트 추가
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <CircleProgress size={120} strokeWidth={10} progress={progress} />
          <p className="mt-2 text-sm font-semibold">
            {doneQuests}/{totalQuests} 완료
          </p>
        </div>
      </div>
    </div>
  );
};
