let level=0;
let gameSeq=[];
let userSeq=[];
let btns = ["yellow","blue","red","magenta"];
let started = false;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let maximumScore = 0;


document.addEventListener("keypress",() =>{
    if(started == false){
        started = true;
        console.log("Started mare");
        levelUp();
    }
});
function btnflash(btnn){
    btnn.classList.add("flash");
    setTimeout(()=>{btnn.classList.remove("flash")},280);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randNum=Math.floor(Math.random()*3);
    let randColor = btns[randNum];
    let randBtn = document.querySelector(`.${randColor}`);
    btnflash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
function btnpress(){
    btnflash(this);
    userSeq.push(this.getAttribute("id"));
    console.log(userSeq);
    checkAns(userSeq.length-1);
    
}
function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            document.querySelector("body").style.backgroundColor = "rgb(33, 214, 33)";
            setTimeout(()=>{document.querySelector("body").style.backgroundColor = "white";},200);
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game Over, Your score was ${level}. Press any key to start`;
        maximumScore = Math.max(maximumScore,level);
        h3.innerText = `Maximum Score: ${maximumScore}`;
        level = 0;
        started = false;
        gameSeq = [];
        document.querySelector("body").style.backgroundColor = "rgb(214, 33, 33)";
            setTimeout(()=>{document.querySelector("body").style.backgroundColor = "white";},200);
        userSeq = [];
        body.classList.add("redFlash");
            setTimeout(body.classList.remove("redFlash"),200);

    }
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnpress);
    
}
