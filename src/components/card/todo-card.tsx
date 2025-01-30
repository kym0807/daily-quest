import { mockTodos } from '@/constants/home-items';
import { Edit3 } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';

export const TodoCard = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center space-x-2">
            <Edit3 size={20} />
            <span>할 일 (Todo)</span>
          </div>
        </CardTitle>
        <CardDescription className="text-sm">
          우선순위를 확인하고 빠르게 처리해요
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between">
        {mockTodos.length === 0 ? (
          <p className="text-sm text-gray-500">할 일이 없습니다.</p>
        ) : (
          <ul className="space-y-3">
            {mockTodos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between text-sm"
              >
                <div>
                  <p
                    className={`${
                      todo.isDone ? 'text-gray-400 line-through' : ''
                    }`}
                  >
                    {todo.title}
                  </p>
                  {todo.priority && (
                    <span className="text-xs text-gray-500">
                      우선순위: {todo.priority}
                    </span>
                  )}
                </div>
                <Button
                  variant={todo.isDone ? 'secondary' : 'default'}
                  size="sm"
                  onClick={() =>
                    alert(`[${todo.title}] Todo 완료 상태 토글하기`)
                  }
                >
                  {todo.isDone ? '완료됨' : '완료하기'}
                </Button>
              </li>
            ))}
          </ul>
        )}
        <Button variant="outline" className="mt-3 w-full">
          할 일 추가하기
        </Button>
      </CardContent>
    </Card>
  );
};
