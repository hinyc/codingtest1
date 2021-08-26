// 프로그래머스 코테연습 월간 코드 첼린지 1 내적

let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];
// answer = 3

function solution(a, b) {
  var answer = 1234567890;

  // a[0] * b[0] + a[1] * b[1] ... a[a.length-1] * b[b.length-1]
  // a, b 배열의 순서대로 인덱스 값을 추출한다
  // 인덱스 값이 같은 값끼리 곱해준다. 곱한갑들을 하나의 배열로 만들어준다.
  let multiple = [];
  let value;
  let sum = 0;
  for (let i = 0; i < a.length; i += 1) {
    value = a[i] * b[i];
    multiple.push(value);
  }
  console.log(multiple);

  // 곱한 값을 모두 합해 준다.
  for (let i = 0; i < multiple.length; i += 1) {
    sum = sum + multiple[i];
    console.log(sum);
  }
  // 값을 반환한다.
  answer = sum;
  return answer;
}

solution(a, b);
