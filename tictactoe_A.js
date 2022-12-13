const matches = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

function checkValidity(nX, nO) {
  return (Math.abs(nX-nO) <= 1);
}

function checkForWin(boardState) {
  boardState = boardState.split("");
  let nX = boardState.filter(x => x == "x").length;
  let nO = boardState.filter(x => x == "o").length;
  if (checkValidity(nX, nO) == false) return "invalid";


  let winner = "";
  for (const match of matches) {
    let a = boardState[match[0]];
    let b = boardState[match[1]];
    let c = boardState[match[2]];
    if ((a=="x" || a == "o") && a == b && a == c) {
      if (winner == "" || winner == a) winner = a;
      else winner = "invalid";
    }
  }

  if (winner !== "") return winner;
  else if (nX + nO == 9) return "remis";

  return "active";
}

export {checkForWin}