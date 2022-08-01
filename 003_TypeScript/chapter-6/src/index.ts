// 6장 고급 타입
// 타입 넓히기
let a = 'x'; // string
let b = 3; // number
const aa = 'x'; // "x"
const bb = 3; // 3

// 타입 넓히기 방지
// 타입 명시
let aaa: 'x' = 'x';
let bbb: 3 = 3;
// const 타입
let aaaa = 3 as const;
let bbbb = { x: 3 } as const;

// 종합성
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekday | 'Sat' | 'Sun';

const getNextDay = function (w: Weekday): Day | undefined {
  switch (w) {
    case 'Mon':
      return 'Tue';
  }
};

// 6.3 고급 객체 타입
// 객체 타입의 타입 연산자
// (1). key-in 연산자
type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};

type FriendList = APIResponse['user']['friendList'];
