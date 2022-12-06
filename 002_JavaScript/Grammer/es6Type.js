/*
  - Symbol
  다른 값과 중복되지 않는 유일무이한 값.
  중복된 이름의 프로퍼티 키로 인한 충돌 방지를 위해 주로 사용된다.
*/
const key = Symbol('key');
console.log(typeof key);

const obj = {};
obj[key] = 'value';
console.log(obj[key]);

/*
  - Set
  중복되지 않는 유일한 값들의 집합.
  배열과 유사하지만
  1. 중복되는 값을 포함할 수 없다.
  2. 값들의 순서에 의미가 없다.
  3. 인덱스로 요소에 접근할 수 없다.
  
  이러한 특징을 갖는 Set 객체는 수학적 집합을 구현하기 위한 자료구조이다.
*/

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

// 교집합
Set.prototype.intersection = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

console.log(set1.intersection(set2));

// 합집합
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

console.log(set1.union(set2));

// 차집합
Set.prototype.difference = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

console.log(set1.difference(set2));
console.log(set2.difference(set1));

/*
  - Map
  키와 값의 쌍으로 이루어진 컬렉션.
  객체와 유사하지만
  1. 객체를 포함한 모든 값을 Key로 사용 가능하다.
  2. 이터러블 객체이다.
  3. 요소 개수를 반환하는 내장 메서드가 있다. (map.size)
*/

const map = new Map();
const obj = {
  objKey: 'objValue',
};

map.set('key1', 'value1').set('key2', 'value2').set(obj, 'value3'); // 요소 추가
console.log(map.get(obj)); // 요소 접근
console.log(map.has(obj)); // 요소 존재 여부 확인
map.delete(obj); // 요소 삭제
console.log(map);

// 이터러블 객체
for (const entry of map) {
  console.log(entry);
}

// 어터러블한 MapIterator 객체를 반환하는 메서드
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
