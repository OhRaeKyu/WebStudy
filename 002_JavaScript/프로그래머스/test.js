// function kSub(k, nums) {
//   // Write your code here
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];

//       if (sum % 3 === 0) {
//         count += 1;
//       }
//     }
//   }

//   console.log(count);
// }

// kSub(3, [1, 2, 3, 4, 1]);

// function subCount(arr, n, k) {
//   let mod = new Array(k);
//   mod.fill(0);

//   let cumSum = 0;
//   for (let i = 0; i < n; i++) {
//     cumSum += arr[i];

//     mod[((cumSum % k) + k) % k]++;
//   }

//   let result = 0;
//   for (let i = 0; i < k; i++) {
//     if (mod[i] > 1) result += parseInt((mod[i] * (mod[i] - 1)) / 2, 10);
//   }
//   result += mod[0];

//   return result;
// }
// console.log(subCount([1, 2, 3, 4, 1], 5, 3));

// function getTime(s) {
//   let result = 0;
//   let alphabet = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   for (let i = 0; i < s.length; i++) {
//     let move = alphabet.indexOf(s[i]);
//     alphabet = alphabet.slice(move).concat(alphabet.slice(0, move));
//     move <= 13 ? (result += move) : (result += Math.abs(move - 26));
//   }
//   return result;
// }

// console.log(getTime('AZGB'));

function countPairs(numbers, k) {
  let result = 0;
  let set = new Set(numbers);
  let newArr = [...set];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i] - newArr[j] === k || newArr[j] - newArr[i] === k) {
        result++;
      }
    }
    // if (newArr.includes(newArr[i] + k)) {
    //   result += 1;
    // }
  }

  return result;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++)
      if (arr[i] - arr[j] == k || arr[j] - arr[i] == k) count++;
  }
  return count;

  count = 0;

  // Pick all elements one by one
  for (let i = 0; i < n; i++) {
    // See if there is a pair of this
    // picked element
    for (let j = i + 1; j < n; j++)
      if (arr[i] - arr[j] == k || arr[j] - arr[i] == k) count++;
  }
  return count;
}

console.log(countPairs([1, 2, 3, 4, 5, 6], 2));
