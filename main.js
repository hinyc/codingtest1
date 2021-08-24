//정수배열의 다른인덱스 두개의 수를 뽑는다
// 랜덤이누

let numbers = [1, 4, 6, 2];
let indexOne;
let indexTwo;
let addNumberArr = [];
let maxLength = (numbers.length + 1) * numbers.length;

function getRandomNum() {
  indexOne = Math.floor(Math.random() * numbers.length);
  indexTwo = numTwo();
}

function numTwo() {
  // 랜덤숫자를 생성한다.
  // 생성된 숫자가 indexOne과 같으면 numTwo 함수실행, 다르면 randomNum반환.
  // indexTwo = randomNum 할당.
  let randomNum = Math.floor(Math.random() * numbers.length);
  // console.log("randomNum", randomNum);
  if (indexOne === randomNum) {
    return numTwo();
  } else {
    // console.log("randomNum2", randomNum);
    return randomNum;
  }
}

getRandomNum();

console.log("indexOne:", indexOne);
console.log("indexTwo:", indexTwo);
console.log("numbers.length:", numbers.length);
console.log("maxLength:", maxLength);
//arr[random] + arr[random]
//뽑은 두 수를 더한다.

console.log("arr[indexOne]", numbers[indexOne]);
console.log("arr[indexTwo]:", numbers[indexTwo]);
console.log("add:", numbers[indexOne] + numbers[indexTwo]);

let addNumber;

function getRandomNumArrValue() {
  getRandomNum();
  addNumber = numbers[indexOne] + numbers[indexTwo];
}

let i = 1;
while (i <= 10) {
  arrayPush();
  // 랜덤 인덱스를 통한 배열의 값을 선정
  // 두개의 값을 더한다
  // 더한값을 addRandomArr[]에 push.

  function arrayPush() {
    if (!sameNumber(addNumber)) {
      addNumberArr.push(addNumber);
      i += 1;
    }

    getRandomNumArrValue();

    function sameNumber(addNumber) {
      for (let i = 0; i <= addNumberArr.length; i++) {
        if (addNumber === addNumberArr[i]) {
          return true;
        }
      }
      return false;
    }

    // const found = addNumberArr.find((e) => e === n);
  }
  // let sameNum = addNumberArr.find((e) => e === 14);
}

console.log("i:", i);
console.log("array", addNumberArr);

console.log(addNumberArr.sort());

// 랜덤 인덱스를 통한 배열값 재선정
// 두개의 값을더한값이 addRandomArr에 있는지 확인후 없으면 push.
// 있으면 랜덤인덱스를 통한 배열값 재선정...
// 전체 배열의 lenth가 (numbers.length + 1) * numbers.length)가 될때까지 반복

//두수를 더한 배열의 개수가 최대가 될때까지 반복;
//(numbers.length + 1) * numbers.length
//더한 숫자를 배열에 담는다.
//배열을 오름차순으로 정렬한다.
