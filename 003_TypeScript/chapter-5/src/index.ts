// 5장. 클래스와 인터페이스
type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: File, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

// 추상 클래스
abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
}

// 클래스 상속
class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}

// this를 반환 타입으로 사용하기
class ExampleSet {
  constructor(private values: number[]) {}
  add(value: number): void {
    this.has(value) && this.values.push(value);
  }
  has(value: number): boolean {
    return this.values.includes(value);
  }
}

// 인터페이스 상속 (타입 별칭과 비교)
type FoodType = {
  calories: number;
  tasty: boolean;
};

type SushiType = FoodType & {
  salty: boolean;
};

type CakeType = FoodType & {
  sweet: boolean;
};

interface FoodInterface {
  calories: number;
  tasty: boolean;
}

interface SushiInterface extends FoodInterface {
  salty: boolean;
}

interface CakeInterface extends FoodInterface {
  sweet: boolean;
}

// 선언 합침
interface User {
  name: string;
}

interface User {
  birth: number;
}

let a: User = {
  name: 'ork',
  birth: 97,
};

// 인터페이스 구현
interface Animal {
  eat(food: string): void;
  sleep(hours: number): void;
}

class Cat implements Animal {
  eat(food: string) {
    console.log(`Ate some ${food}.`);
  }
  sleep() {}
  static staticFn() {
    console.log('정적 메서드');
  }
}

// 클래스 다형성(제네릭)
class MyMap<K, V> {
  constructor(private key: K, private value: V) {}
  get(key: K): V | null {
    return this.key === key ? this.value : null;
  }
  set(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

// 인터페이스 다형성(제네릭)
interface GenericInterface<K, V> {
  get(key: K): V;
  set(key: K, value: V): void;
}

// 믹스인
type Constructor = new (...arg: any[]) => {};

let TimeStamped = function <T extends Constructor>(Base: T) {
  return class extends Base {
    timestamp = Date.now();
  };
};

let Activatable = function <T extends Constructor>(Base: T) {
  return class extends Base {
    isActivated = false;
    toggle() {
      this.isActivated = !this.isActivated;
    }
  };
};

class mixinClass {
  name = 'ohraekyu';
}

const mixinTimeStamped = TimeStamped(mixinClass);
const mixinActivatable = TimeStamped(Activatable(mixinClass));

const mixedTimeStamped = new mixinTimeStamped();
const mixedActivatable = new mixinActivatable();

// 데코레이터
// 아직 실험 단계여서 tsconfig.json에
// "experimentalDecorators": true 를 추가해주어야함

// final 클래스 (흉내내기)
// 클래스나 메서드를 확장하거나 오버라이드 할 수 없게 만드는 기능
// 상속만 막을 분 인스턴스는 정상적으로 만들 수 있음.
class MessageQueue {
  private constructor(private messages: string[]) {}
  static create(messages: string[]) {
    return new MessageQueue(messages);
  }
}

// 디자인 패턴
// (1). 팩토리 패턴
// 어떤 객체를 만들지를 전적으로 팩토리에 위임한다.
interface Shoe {
  purpose: string;
}

class BalletFlat implements Shoe {
  purpose = 'dancing';
}

class Boot implements Shoe {
  purpose = 'woodcutting';
}

class Sneaker implements Shoe {
  purpose = 'walking';
}

let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
    }
  },
};

Shoe.create('boot');

// (2). 빌더 패턴
class RequestBuilder {
  private data: object | null = null;
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setData(data: object): this {
    this.data = data;
    return this;
  }

  setURL(url: string): this {
    this.url = url;
    return this;
  }
}
