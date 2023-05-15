let cscore = 0; let hscore = 0;

const humans = 0; const computers = 0;

let final = document.getElementById("outputtext");
let again = document.getElementById("newmessage");

function show() {
    let b1 = document.getElementById("btn1")
    b1.style.display = "block";
    let b2 = document.getElementById("btn2")
    b2.style.display = "block";
    let b3 = document.getElementById("btn3")
    b3.style.display = "block";
    // console.log("ret");


}


playagain.addEventListener("click", function () {
    // for  reload of page 
    location.reload();
});


function get(player) {

    // console.log(player);

    const rpc = ['Rock', 'Paper', 'Scissors'];
    const compute = Math.floor(Math.random() * 3);
    // console.log(compute);

    final.innerHTML = "FINAL RESULT";
    final.style.color = "white";

    if (player == 0 && compute == 1) {
        cscore = cscore + 1;

        final.innerHTML = "COMPUTER WINS";
        final.style.color = "red";

    }
    else if (player == compute) {


        final.innerHTML = "DRAW";
        final.style.color = "orange";
    }

    else if (player == 1 && compute == 2) {
        cscore = cscore + 1;

        final.innerHTML = "COMPUTER WINS";
        final.style.color = "red";
    }
    else if (player == 2 && compute == 0) {
        cscore = cscore + 1;

        final.innerHTML = "COMPUTER WINS";
        final.style.color = "red";
    }
    else if (player == 1 && compute == 0) {
        hscore = hscore + 1;
        final.innerHTML = "YOU WIN";
        final.style.color = "green";

    } else if (player == 2 && compute == 1) {
        hscore = hscore + 1;
        final.innerHTML = "YOU WIN";
        final.style.color = "green";
    } else if (player == 0 && compute == 2) {
        hscore = hscore + 1;
        final.innerHTML = "YOU WIN";
        final.style.color = "green";
    }
    let hs = document.getElementById("uoutput");
    hs.innerHTML = "Your Output: " + hscore;
    let cs = document.getElementById("output");
    cs.innerHTML = "Computer Score : " + cscore;

    if (cscore == 3 || hscore == 3) {
        let b1 = document.getElementById("btn1")
        b1.style.display = "none";

        let b2 = document.getElementById("btn2")
        b2.style.display = "none";
        let b3 = document.getElementById("btn3")
        b3.style.display = "none";
        if (cscore > hscore) {
            final.innerHTML = " OOPS!!Computer wins";
            final.style.color = "Red";
        }

        else {
            final.innerHTML = "Congratulations ! You win ";
            final.style.color = "Green";
        }
        // hscore = humans; cscore = computers;
        // final.style.display="none";
        again.style.display = "block";
        again.innerHTML = "Play Again";




    }
}

// function newgame(hscore, cscore) {
//     let b1 = document.getElementById("btn1")
//     b1.style.display = "none";

//     let b2 = document.getElementById("btn2")
//     b2.style.display = "none";
//     let b3 = document.getElementById("btn3")
//     b3.style.display = "none";
  
//     final.innerHTML = "Final Result";
//     final.style.color = "white";
//     again.style.display = "none";
//     again.innerHTML = " Play Again";
//     hscore = humans; cscore = computers;
//     get();
//     return hscore, cscore;


// }
