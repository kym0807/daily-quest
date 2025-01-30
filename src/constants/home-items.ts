export const mockQuests = [
  { id: 1, title: '물 2리터 마시기', isDone: false },
  { id: 2, title: '스트레칭 10분 하기', isDone: true },
  { id: 3, title: '오늘 일정 체크하기', isDone: false },
];

export const mockSchedules = [
  {
    id: 1,
    title: '병원 진료',
    description: '검진',
    startDateTime: new Date(),
    endDateTime: null,
  },
  {
    id: 2,
    title: '점심 약속',
    description: '친구와 식사',
    startDateTime: new Date(),
    endDateTime: null,
  },
];

export const mockTodos = [
  { id: 1, title: '장보기', isDone: false, priority: 2 },
  { id: 2, title: '독서 10페이지', isDone: true, priority: 1 },
];

export const mockQuizData = {
  title: '오늘의 상식 퀴즈',
  isCompleted: false,
  score: 0,
};
