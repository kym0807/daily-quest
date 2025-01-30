import { mockQuizData } from '@/constants/home-items';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';

export const QuizCard = () => {
  return (
    <Card className="flex flex-col md:col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle>오늘의 퀴즈</CardTitle>
        <CardDescription className="text-sm">
          지식도 쌓고 경험치도 쌓으세요!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between">
        <h3 className="mb-2 text-lg font-semibold">{mockQuizData.title}</h3>
        {mockQuizData.isCompleted ? (
          <p className="text-sm text-green-600">
            이미 완료한 퀴즈입니다. 점수: {mockQuizData.score}점
          </p>
        ) : (
          <div className="space-y-2 text-sm">
            <p>아직 퀴즈를 풀지 않았습니다. 지금 도전해보세요!</p>
            <Button onClick={() => alert('퀴즈 풀러가기')}>
              퀴즈 시작하기
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
