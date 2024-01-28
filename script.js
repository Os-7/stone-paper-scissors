let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const getCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    
    return options[randIdx];
}

const drawfn = () =>{
    console.log('draw');
    msg.innerText = 'Game was Draw. 😐 Play Again';
    msg.style.backgroundColor = "navy";
}

const ShowWin = (userWin, userChoice, compChoice) => {
    if(userWin){
         userScore++;
         userScorePara.innerText = userScore;
         msg.innerText = `You win! 🎉🎉 Your${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "green";

        }
    else{
         compScore++;
         compScorePara.innerText = compScore;
         msg.innerText = `You Lose. 😵‍💫 Your${userChoice} beats ${compChoice}`;
         msg.style.backgroundColor = "red";
        }
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    console.log('User choice = ', userChoice);
    console.log('computer choice = ', compChoice);

    if(compChoice === userChoice){
        //Draw
        drawfn();
    }else{
        let userWin = true;
        if(userChoice === 'Rock'){
            userWin = compChoice === 'Paper'? false:true;
        }
        else if(userChoice === 'Paper'){
            userWin = compChoice === 'Scissors'? false:true;
        }
        else{
            userWin = compChoice === 'Rock'? false:true;
        }
        ShowWin(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=>{

 
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})
