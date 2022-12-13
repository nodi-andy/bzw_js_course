//import * as algA from './tictactoe_A.js';
//import * as algB from './tictactoe_B.js';


//let retA = checkForWin("x--o--x--");
var algA, algB;

function compGameStates() {
    let res = [];
    for (let i = 0; i < Math.pow(3,9); i++) {
        let gameString = ("00000000" + i.toString(3)).slice(-9);
        gameString = gameString.replaceAll("0", "-");
        gameString = gameString.replaceAll("1", "x");
        gameString = gameString.replaceAll("2", "o");
        let resA = algA.checkForWin(gameString);
        let resB = algB.checkForWin(gameString);
        if (resA != resB) res.push(gameString);
    }
    return res;
}

const loadModule = async (modulePath) => {
    try {
      return await import(modulePath)
    } catch (e) {
      console.log("Error");
    }
}

async function loadmoduleA(m, source) {
    // import myDefault, {foo, bar} from '/modules/my-module.js'
    m = await loadModule(source)
    m = null;
}

function getPerformance() {
    //const t0 = performance.now();
    let comp = compGameStates();
    //const t1 = performance.now();
    //const delta = t1 - t0;
    return "Diff: " + JSON.stringify(comp);
}

var btnGo = document.getElementById("btnGo");

btnGo.addEventListener('click', event => {

    var out = document.getElementById("output");
    var algA_Source = document.getElementById("algA_Source").value;
    var algB_Source = document.getElementById("algB_Source").value;

    loadModule(algA_Source).then( 
        resultA => {
            algA = resultA;
            loadModule(algB_Source).then( 
                resultB => {
                    algB = resultB;
                    out.innerHTML += getPerformance() + String.fromCharCode(13, 10);
                }
            )
        }
    );
 
}
)