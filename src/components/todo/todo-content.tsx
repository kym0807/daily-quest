import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

export const TodoContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>자세한 내용</h2>
        <span>여기는 서브 TODO들 프로그래스바</span>
      </div>
      <div className="flex items-center justify-between">
        <span>여기는 태그들</span>
        <span>여기 체크박스?</span>
      </div>
      <div className="flex items-center justify-between gap-2.5">
        <Textarea className="h-12 w-full" />
        <Button type="submit" className="h-14 cursor-pointer">
          저장
        </Button>
      </div>
    </div>
  );
};
