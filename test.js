function lottoNum() {
  let lotto = [];
  let i = 0;

  while (i < 6) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!sameNum(n)) {
      lotto.push(n);
      i++;
    }
  }

  function sameNum(n) {
    for (var i = 0; i < lotto.length; i++) {
      if (n === lotto[i]) {
        return true;
      }
    }
    return false;
  }

  return lotto;
}
///
function lottoNum() {
  const lotto = [];
  function makeNum() {
    if (lotto.length < 6) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (notSame(n)) {
        lotto.push(n);
      }
      makeNum();
    }
    function notSame(n) {
      return lotto.every((e) => n !== e);
    }
  }
  makeNum();
  return lotto;
}
