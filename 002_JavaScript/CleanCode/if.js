// if-else 조건문 리팩터링
const condition_1 = true;
const condition_2 = false;
const condition_3 = true;
/* 
  - else 문 제거하기
  if 문에서 return 되는 조건문의 경우 else 문을 사용하지 않아도
  기능에는 영향 없이 더욱 클린한 코드를 작성할 수 있다.
*/

// 전
const testFunction_1 = () => {
  if (condition_1) {
    return true;
  } else {
    return false;
  }
};

// 후
const refactoringTestFunction_1 = () => {
  if (condition_1) {
    return true;
  }
  return false;
};

console.log(testFunction_1());
console.log(refactoringTestFunction_1());

/*
  - else 문 Early Return하기
  if-else 조건문은 if, else if 문의 조건을 전부 순회한 후 true 조건이 없을 경우 else 문을 실행한다.
  하지만 순서를 역전하여 else 문을 if 문으로 조건문의 상단에 뺄 경우
  기능에는 영향 없이 더욱 클린한 코드를 작성할 수 있다.
*/

// 전
const testFunction_2 = () => {
  if (condition_1) {
    if (condition_2) {
      if (condition_3) {
        return 'condition_3 : true';
      } else {
        return 'condition_3 : false';
      }
    } else {
      return 'condition_2 : false';
    }
  }
};

// 후
const refactoringTestFunction_2 = () => {
  if (!condition_1) return;

  if (!condition_2) {
    return 'condition_2 : false';
  }

  if (condition_3) {
    return 'condition_3 : true';
  }

  return 'condition_3 : false';
};

console.log(testFunction_2());
console.log(refactoringTestFunction_2());
