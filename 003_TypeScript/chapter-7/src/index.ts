// 7장. 에러 처리
// 7.1 null 반환
const myBirth = '1997/11/15a';

const isValid = function (date: Date): boolean {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    !Number.isNaN(date.getTime())
  );
};

const nullReturnHandling = function (birthday: string): Date | null {
  let date = new Date(birthday);
  return isValid(date) ? date : null;
};

let date = nullReturnHandling(myBirth);

console.log(date);

// 7.2 예외 던지기(throw), 잡기(catch)
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

const throwErrorHandling = function (birthday: string): Date {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new InvalidDateFormatError('YYYY/MM/DD 형태의 날짜를 입력하세요.');
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('입력된 날짜가 오늘보다 미래 날짜입니다.');
  }
  return date;
};

try {
  let date = throwErrorHandling(myBirth);
  console.log(date);
} catch (err) {
  if (err instanceof InvalidDateFormatError) {
    console.log(err.message);
  } else if (err instanceof DateIsInTheFutureError) {
    console.log(err.message);
  } else {
    throw err;
  }
}

// 7.3 예외 반환
// 타입스크립트는 throws문을 지원하지 않는다.
// 하지만 유니온 타입을 이용해 비슷하게 흉내낼 수 있다.

const throwsErrorHandling = function (
  birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(myBirth);
  if (!isValid(date)) {
    return new InvalidDateFormatError('YYYY/MM/DD 형태의 날짜를 입력하세요.');
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError(
      '입력된 날짜가 오늘보다 미래 날짜입니다.'
    );
  }
  return date;
};

// 7.4 Option 타입
// 언제든 실패할 수 있는 여러 동장을 연쇄적으로 수행할 때 진가가 발휘된다.
