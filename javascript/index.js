const img = document.getElementById("main-img");
const options=document.querySelector(".options");
let score=document.querySelector(".score");
let option1=document.querySelector(".option1");
let option2=document.querySelector(".option2");
let option3=document.querySelector(".option3");
let option4=document.querySelector(".option4");
let startBtn=document.querySelector("#start");
let submitBtn=document.querySelector(".submit");
let newgameBtn=document.querySelector(".new");
let timer= document.querySelector(".timer");
let count=0;

startBtn.addEventListener("click",()=>{
   //startBtn.classList.add("start-btn");
   imageGen();
   startWorker();
   
})
//images array
let y=()=>{
   const images=[
      '/images/Charles-Chaplin.jpg','/images/Robert-De-Niro.jpg',
      '/images/Robert-Downey-jr.jpg','/images/Shahrukh-Khan.jpg'
    ];
    //let yVal=(Math.floor(Math.random()*(images.length)));
    
   let yVal=(Math.floor(Math.random()*(images.length)));
   img.src = images[yVal];
   return yVal;
}

let imageGen=()=>{
  yVal=y();
  console.log(yVal);
  optionGen(yVal);
 
}



const optionGen=(yVal)=>{
   console.log(yVal);
   if(yVal==0){
        
       console.log("gamestart0");
      // console.log(y);
       option1.innerHTML= "Charles Chaplin";
       option2.innerHTML= "Robert De Niro";
       option3.innerHTML= "Robert Downey jr";
       option4.innerHTML= "Shahrukh Khan";
        return Ans=(option1.innerHTML);
}
if(yVal==1){
        
   console.log("gamestart1");
//   console.log(y);
   option2.innerHTML= "Charles Chaplin";
   option1.innerHTML= "Robert De Niro";
   option3.innerHTML= "Robert Downey jr";
   option4.innerHTML= "Shahrukh Khan";
     Ans=(option1.innerHTML);
     console.log(`Ans is ${Ans}`);
     return Ans;
    } 
    if(yVal==2){
       console.log("gamestart2");
    //   console.log(y);
  option2.innerHTML= "Charles Chaplin";
  option1.innerHTML= "Robert De Niro";
  option4.innerHTML= "Robert Downey jr";
  option3.innerHTML= "Shahrukh Khan";
   return Ans=(option4.innerHTML);
    }
    if(yVal==3){
       console.log("gamestart3");
     //  console.log(y);
  option3.innerHTML= "Charles Chaplin";
  option2.innerHTML= "Robert De Niro";
  option1.innerHTML= "Robert Downey jr";
  option4.innerHTML= "Shahrukh Khan";
    return Ans=(option4.innerHTML);
    
    }  
}
options.addEventListener("click",(e)=>{
   userChoice=(e.target.innerHTML);
   console.log(`userChoice is ${userChoice}`);
   ansMatch(userChoice);
})

function ansMatch(userChoice){
    
     const realAns=optionGen(yVal);
    console.log(`realAns is ${realAns}`);
    if(userChoice==realAns){
        count++;
        
    }
    else{
        count--;
       
    }
    submitBtn.addEventListener("click",()=>{
      console.log("hello");
      score.innerHTML=count;
      stopWorker();
      imageGen();
      startWorker();
      
      
    })
}

//web workers
var w;

function startWorker() {
   timer.innerHTML=15;
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("/javascript/worker.js");
    }
    w.onmessage = function(event) {
      timer.innerHTML = event.data;
      if(timer.innerText==0){ 
         gameOver();       
        }
    };
  } else {
    timer.innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}


function gameOver(){
   console.log(`Your score is ${score.innerHTML}`);
   container.style.display="flex";
   container.style.flexDirection="column";
   container.style.justifyContent="center";
   container.style.alignItems="center";
   container.innerHTML="<div class='gameOver'>GAME IS OVER</div>"+"<div class='final-score'>Your Score is</div>"+"<div id='Score'></div>" +"<button onclick='window.location.reload()' class='new'>New Game</button>";
   document.getElementById("Score").innerText=score.innerHTML;
}  
 


