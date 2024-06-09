let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genComputerChoice = () => {
    const options=["rock","paper","scissors"];  
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const drawGame = () => 
{
  
    msg.innerText="Game Drawn";
    msg.style.innerText="blue";
}
const showWinner= (userWin,userChoice,computerChoice) =>
 {
if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
            console.log(`You win!!!! ${userChoice} beats ${computerChoice}`);
         msg.innerText=`You win!!!! ${userChoice} beats ${computerChoice}`;
         msg.style.innerText="green";
    }
    else

    {
        compScore++;
        computerScorePara.innerText=compScore;
       
        msg.innerText=`You win!!!!${userChoice} beats ${computerChoice}`;
        msg.style.innerText="red";
    }
    }
    const playGame = (userChoice) => {
    const computerChoice=genComputerChoice();
    console.log("computer choice", computerChoice);
    if(userChoice===computerChoice)
        {
            drawGame();
        }
        else{
            let userWin=true;
            if(userChoice==="rock")
                {
                    userWin = computerChoice==="paper"? false : true;
                }
                else if(userChoice==="paper") {
                    userWin = computerChoice==="scissors"? false : true;

                }
                else 
                {
                    userWin=computerChoice==="rock"? false:true;
                    
                }
                showWinner(userWin,userChoice,computerChoice);
        }
    }

    choices.forEach((choice) => {
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
        });
    });


