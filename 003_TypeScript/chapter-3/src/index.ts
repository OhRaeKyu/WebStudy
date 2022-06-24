// 어노테이션
function squareOf(n: number) {
  return n * n;
}

console.log(squareOf(2));

// console.log(squareOf('z'));
// 타입에러
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
