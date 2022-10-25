


function loopGameStates() {
    for (let i = 0; i < Math.pow(3,9); i++) {
        gameString = i.toString(3);
        gameString = gameString.replaceAll("0", "-");
        gameString = gameString.replaceAll("1", "x");
        gameString = gameString.replaceAll("2", "o");
        checkForWin(gameString);
    }
}

function getPerformance() {
    const t0 = performance.now();
    loopGameStates();
    const t1 = performance.now();
    const delta = t1 - t0;
    console.log("Duration: " + delta);
}
