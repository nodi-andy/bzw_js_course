var magicSquare = [8, 1, 6, 3, 5, 7, 4, 9, 2];

function magicArray(val, index){
  return val * magicSquare[index];
}

function checkForWin(stateData) {
    let stateX = stateData.split('').map(item => item == 'x');
    let stateY = stateData.split('').map(item => item == 'y');
    let sumX = stateX.map(magicArray).reduce((a,b)=>a+b);
    let sumY = stateY.map(magicArray).reduce((a,b)=>a+b);

    if (sumX == 15 && sumY != 15) return 'x';
    else if (sumY == 15 && sumX != 15) return 'y';
    else return '-';
}

export {checkForWin}