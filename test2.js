let numbers = [2, 1, 3, 4, 1];
function solution(numbers) {
  var answer = [];
  let array = [];

  //두수를 더한 모든 값을 배열로 반환
  for (let n = 0; n < numbers.length - 1; n++) {
    for (let i = n + 1; i < numbers.length; i++) {
      let value = numbers[n] + numbers[i];
      array.push(value);
    }
  }
  console.log(array);

  // 배열의 중복값제거
  // 배열 중복제거1
  // const set = array.filter((item, index) => array.indexOf(item) === index);
  //배열 중복제거2
  const set = Array.from(new Set(array));
  console.log(set);

  // 배열의 오름차순정렬
  answer = set.sort(function (a, b) {
    return a - b;
  });
  console.log("a", answer);
  // array 배열을 answer push.

  // return answer;
}
