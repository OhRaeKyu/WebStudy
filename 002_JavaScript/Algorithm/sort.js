// 선택정렬 - O(n**2)
// 기존 배열을 순회하며 최소값을 선택하여 새로운 배열에 push 해주며 정렬한다.
let result1 = [];
let arr1 = [10, 11, 9, 3, 2, 6, 5, 1];

const selectionSort = (arr) => {
  let sortedArr = [];
  const arrLength = arr.length;
  const reducerMin = (acc, cur) => (acc > cur ? cur : acc);

  for (let i = 0; i < arrLength; i++) {
    sortedArr.push(arr.reduce(reducerMin));
    arr.splice(arr.indexOf(arr.reduce(reducerMin)), 1);
  }
  return sortedArr;
};

result1 = selectionSort(arr1);
console.log(result1);

// 삽입정렬 - O(n**2)
// 기존 배열의 값을 새로운 배열을 순회하며 비교하여 삽입해주며 정렬한다.
let result2 = [];
let arr2 = [10, 11, 9, 3, 2, 6, 5, 1];

const getInsertIndex = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      return i;
    }
  }
  return arr.length;
};

const insertionSort = function (arr) {
  let sortedArr = [];
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const insertIndex = getInsertIndex(sortedArr, arr[i]);
    sortedArr.splice(insertIndex, 0, arr[i]);
  }
  return sortedArr;
};

result2 = insertionSort(arr2);
console.log(result2);

// 병합정렬 - O(nLog2n)
// 분할, 정복을 통해 값을 비교하여 정렬한다.
let result3 = [];
let arr3 = [10, 11, 9, 3, 2, 6, 5, 1];

const mergeSort = function (arr) {
  let sortedArr = [];
  const arrLength = arr.length;

  if (arrLength <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arrLength / 2);
    let prevArr = mergeSort(arr.slice(0, mid));
    let nextArr = mergeSort(arr.slice(mid));

    while (prevArr.length != 0 && nextArr.length != 0) {
      if (prevArr[0] < nextArr[0]) {
        sortedArr.push(prevArr.shift());
      } else {
        sortedArr.push(nextArr.shift());
      }
    }

    while (prevArr.length != 0) {
      sortedArr.push(prevArr.shift());
    }

    while (nextArr.length != 0) {
      sortedArr.push(nextArr.shift());
    }

    return sortedArr;
  }
};

result3 = mergeSort(arr3);
console.log(result3);

// 퀵정렬 - Best = O(nLog2n), Worst = O(n**2)
let result4 = [];
let arr4 = [10, 11, 9, 3, 2, 6, 5, 1];

const quickSort = function (arr) {
  const arrLength = arr.length;

  if (arrLength <= 1) {
    return arr;
  } else {
    const pivot = arr.shift();
    let prevArr = [];
    let nextArr = [];

    for (let value of arr) {
      if (value < pivot) {
        prevArr.push(value);
      } else {
        nextArr.push(value);
      }
    }

    return quickSort(prevArr).concat(pivot, quickSort(nextArr));
  }
};

result4 = quickSort(arr4);
console.log(result4);
