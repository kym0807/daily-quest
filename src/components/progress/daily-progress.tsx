import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export const DailyProgress = () => {
  return (
    <div className="space-y-6">
      {/* 1. 전체 진행률 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>오늘의 진행 상황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <p className="text-sm font-medium">전체 진행률: 40%</p>
            <Progress value={40} className="h-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              할 일 완료: <strong>5/12</strong>
            </div>
            <Badge variant="outline">우선순위: 보통</Badge>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* 2. 오늘 요약과 내일 할 일 미리보기 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>오늘 요약</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">완료된 할 일: 5개</p>
            <p className="text-sm">미완료 할 일: 7개</p>
            <div className="flex gap-2">
              <Badge variant="secondary">긴급</Badge>
              <Badge variant="secondary">중요</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>내일 할 일 미리보기</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">예정된 할 일: 4개</p>
            <p className="text-sm">중요 항목: 2개</p>
            <Button variant="outline" size="sm">
              자세히 보기
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* 3. 시간별 일정 */}
      <Card>
        <CardHeader>
          <CardTitle>시간별 일정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>09:00</span>
            <span>팀 미팅</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>11:00</span>
            <span>프로젝트 점검</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>14:00</span>
            <span>클라이언트 콜</span>
          </div>
        </CardContent>
      </Card>

      {/* 4. 격려 메시지 카드 */}
      <Card className="bg-accent text-accent-foreground">
        <CardHeader>
          <CardTitle>오늘의 한마디</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">"오늘도 멋진 하루입니다!"</p>
        </CardContent>
      </Card>
    </div>
  );
};
