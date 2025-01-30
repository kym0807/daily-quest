import { mockSchedules } from '@/constants/home-items';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';

export const ScheduleCard = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center space-x-2">
            <Calendar size={20} />
            <span>오늘의 일정</span>
          </div>
        </CardTitle>
        <CardDescription className="text-sm">
          중요한 일정을 놓치지 마세요
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between">
        {mockSchedules.length === 0 ? (
          <p className="text-sm text-gray-500">일정이 없습니다.</p>
        ) : (
          <ul className="space-y-3">
            {mockSchedules.map((schedule) => (
              <li key={schedule.id}>
                <h4 className="font-medium">{schedule.title}</h4>
                {schedule.description && (
                  <p className="text-sm text-gray-500">
                    {schedule.description}
                  </p>
                )}
                <p className="text-xs text-gray-400">
                  {/* 날짜/시간 포맷팅은 라이브러리(dayjs 등) 권장 */}
                  {schedule.startDateTime.toLocaleTimeString()} 시작
                </p>
              </li>
            ))}
          </ul>
        )}
        <Button variant="outline" className="mt-3 w-full">
          일정 추가하기
        </Button>
      </CardContent>
    </Card>
  );
};
