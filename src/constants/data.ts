import { TodoType } from '@/types/todo.type';

// TODO: 백엔드 완료시 파일 삭제 필요
export const todos: TodoType[] = [
  {
    id: '1',
    title: '회의 준비',
    description: '프로젝트 회의 자료 준비',
    completed: false,
    priority: 'high',
    tags: ['회의', '중요'],
  },
  {
    id: '2',
    title: '이메일 답변',
    description: '고객 문의 이메일 확인 및 답변',
    completed: true,
    priority: 'medium',
    tags: ['이메일'],
  },
];
