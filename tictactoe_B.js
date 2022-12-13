var magicSquare = [8, 1, 6, 3, 5, 7, 4, 9, 2];

var winCombinations = [
  0b000000111,
  0b000111000,
  0b111000000,
  0b100100100,
  0b010010010,
  0b001001001,
  0b100010001,
  0b001010100
]

function checkValidity(nX, nO) {
  return (Math.abs(nX-nO) <= 1);
}


function implication(pre, post){
  return (~pre) | post;
}

function checkForWin(boardState) {
  let nX = boardState.split("").filter(x => x == "x").length;
  let nO = boardState.split("").filter(x => x == "o").length;
  if (checkValidity(nX, nO) == false) return "invalid";
  if (nX < 3 && nO < 3) return "active";

  boardState = boardState.replaceAll("-", "0");
  let xState = parseInt(boardState.replaceAll("x", "1").replaceAll("o", "0"), 2);
  let oState = parseInt(boardState.replaceAll("x", "0").replaceAll("o", "1"), 2);
  let xWon = winCombinations.map(comb => comb == (comb & xState)).includes(true);
  let yWon = winCombinations.map(comb => comb == (comb & oState)).includes(true);

  if (xWon == true && yWon == true) return "invalid";
  if (xWon == true && yWon == false) return "x";
  if (xWon == false && yWon == true) return "o";

  
  if ((nX + nO) == 9) return "remis";
  else return 'active';
}

export {checkForWin}