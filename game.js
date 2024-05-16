// let compArr = ["rock", "paper" , "scissor"];

let userScore = 0 ;
let compScore = 0;


// let choice =document.querySelectorAll(".choice");
//     choice.forEach((choice) => {
//         choice.addEventListener("click" ,function() {
//             const choiceId = choice.getAttribute("id");
//             console.log("Event was Registered", choiceId)
//         })
// });

// function myfunction (){
//     let i = Math.floor(Math.random()*3);
// choice= choice[i].addEventListener( "click", function(){console.log("event has been registred by  comp");})
// }

// let i = Math.floor(Math.random()*3);
// choice= choice[i].addEventListener( "click", function(){console.log("event has been registred by  comp");})
let choice =document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const comp = () => {
    let i = Math.floor(Math.random()*3);
    return choice[i].getAttribute("id");
}

const showWinner = (UserWin, userChoice, compChoice) =>{
    if(UserWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor  = "Green"

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor  = "red"
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = comp();
    console.log("computer choice = ", compChoice);
    if (userChoice === compChoice){
        msg.innerHTML = "Its A Draw";
        msg.style.backgroundColor  = "Black"
    }
    else{
        let UserWin = true;
        if (userChoice ==="rock"){
            UserWin = compChoice === "paper" ? false : true; 
        }else if( userChoice === "scissors"){
            UserWin = compChoice === "scissors" ? false : true;
            
        }else{
            UserWin = compChoice === "rock" ? false :true;
        }
        showWinner(UserWin, userChoice, compChoice);
    }
    
}

choice.forEach((choice)=>{
    choice.addEventListener("click" , function(){
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

