// switch 조건문 리팩터링
/*
  - 객체 활용하기
  switch 조건문의 경우 case를 전부 순회하며 조건에 해당하는 구문을 실행시킨다.
  하지만, 객체의 경우 key에 해당하는 value를 바로 접근할 수 있기 때문에
  시간, 가독성, 유지 보수 등에 유리하게 더욱 클린한 코드를 작성할 수 있다.
*/

// 전
const initState = { todos: [] };
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.data],
      };
    case 'updateTodo': {
      const updatedTodos = [...state.todos];
      updatedTodos.splice(action.targetIndex, 1, action.data);
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case 'removeTodo': {
      const removedTodos = [...state.todos];
      removedTodos.splice(action.targetIndex, 1);
      return {
        ...state,
        todos: removedTodos,
      };
    }
    default:
      return state;
  }
};

// 후
const reducerMap = {
  addTodo: (state, { data }) => ({
    ...state,
    todos: [...state.todos, data],
  }),
  updateTodo: (state, { targetIndex, data }) => {
    const updatedTodos = [...state.todos];
    updatedTodos.splice(targetIndex, 1, data);
    return {
      ...state,
      todos: updatedTodos,
    };
  },
  removeTodo: (state, { targetIndex }) => {
    const removedTodos = [...state.todos];
    removedTodos.splice(targetIndex, 1);
    return {
      ...state,
      todos: removedTodos,
    };
  },
};

const refactoringReducer = (state = initState, action) =>
  reducerMap[action.type](state, action) || state;

/*
  - 배열 활용하기
  위와 같이 리팩터링 가능하나 key를 연속된 숫자로 표현 가능할 경우
  배열을 활용해서 더욱 클린한 코드를 작성할 수 있다.
*/

/*
  Ex)
  100점 - A
  90 ~ 99점 - B
  80 ~ 89점 - C
  70 ~ 79점 - D
  0 ~ 69점 - F
*/
// 전
const getGrade = (score) => {
  const switchPoint = Math.floor(score / 10);
  switch (switchPoint) {
    case 10:
      return 'A';
    case 9:
      return 'B';
    case 8:
      return 'C';
    case 7:
      return 'D';
    default:
      return 'F';
  }
};

// 후
const gradeMap = ['F', 'D', 'C', 'B', 'A'];

const refactoringGetGrade = (score) => {
  const defaultSwitchPoint = 6;
  const switchPoint =
    Math.max(Math.floor(score / 10), defaultSwitchPoint) - defaultSwitchPoint;
  return gradeMap[switchPoint];
};

console.log(getGrade(100));
console.log(refactoringGetGrade(100));
console.log(getGrade(75));
console.log(refactoringGetGrade(75));
