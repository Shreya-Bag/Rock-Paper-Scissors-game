const button = document.querySelector("button");

const options = ["Rock","Paper","Scissor"];

function generate(){
    let index = Math.floor(Math.random()*3);
    return options[index];
}
console.log(generate());

button.addEventListener("click",()=>{
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    player1.innerHTML=generate();
    player2.innerHTML=generate();
    let result = document.getElementById("result");
    if(player1.innerHTML=="Rock"&&player2.innerHTML=="Scissor"  || player1.innerHTML=="Paper"&&player2.innerHTML=="Rock" ||player1.innerHTML=="Scissor"&&player2.innerHTML=="Paper"){
        result.innerHTML= "Player 1 is Winner"
    }
    else if(player1.innerHTML==player2.innerHTML){
        result.innerHTML = "Match is Draw";
    }
    else{
        result.innerHTML= "Player 2 is Winner"
    }
    
})