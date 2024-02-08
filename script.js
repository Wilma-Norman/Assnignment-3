let pointsPlayer = 0;
let pointsComputer = 0; 

let winsPlayer = 0;
let winsComputer = 0;


function playerWin () {
    pointsPlayer++
    points()
} 

function ComputerWin () {
    pointsComputer++
    points()
} 

function reset(message) {
    
    $('.player-wins').text(winsPlayer)
    $('.computer-wins').text(winsComputer)
    pointsPlayer = 0;
    pointsComputer = 0;
    points()    
}

$(".rock").click(() => {
    $(".player").text("rock");
    playGame(0);
})

$(".paper").click(() => {
    $(".player").text("paper");
    playGame(1);
})

$(".scissor").click(() => {
    $(".player").text("scissor");
    playGame(2);
})

$(".reset-button").click(() => {
    reset('You resetted the game!');
})

function points () {
    console.log("players point " + pointsPlayer);
    console.log("computer points " + pointsComputer);   
    
    $(".player-points").text(pointsPlayer);
    $(".computer-points").text(pointsComputer);
   
    if (pointsPlayer == 3) {
        $(".player").text("You won!");
        winsPlayer = winsPlayer + 1
        reset('You won!')
        
    } else if (pointsComputer == 3) {
        $(".computer").text("Computer won!") 
        winsComputer = winsComputer + 1
        reset('Computer won!')
    }       
}

function computerValue () {
    return Math.floor(Math.random()*3);
}

function tie () {
    console.log('tie')
    console.log(`Players point ${pointsPlayer}`); 
    console.log(`Computers point ${pointsComputer}`);
}


function updateComputerChoice(choice) {
    console.log(`computer choice: ${choice}`)

    if (choice == 0) {
        $(".computer").text("rock")
    } else if (choice == 1) {
        $(".computer").text("paper")
    } else if (choice == 2) {
        $(".computer").text("scissors")
    } 
}

function playGame(playerChoise) {
    let computerChoise = computerValue();
    updateComputerChoice(computerChoise)

        
    if (playerChoise == computerChoise) return tie();
        
        if (playerChoise == 0)
        {
            computerChoise == 2 ? 
                playerWin()
                : 
                ComputerWin()
        } else if (playerChoise == 1) {
            computerChoise == 0 ?
                playerWin() :
                ComputerWin()
        } else if (playerChoise == 2) {
            computerChoise == 1 ?
                playerWin() :
                ComputerWin()
        }
    }
