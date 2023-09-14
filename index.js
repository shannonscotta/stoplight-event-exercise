const stopButton = document.getElementById("stopButton");
const stopBulb = document.getElementById("stopLight");



stopButton.addEventListener("click", function (){
  stopBulb.classList.toggle("stop");
})

const slowButton = document.getElementById("slowButton");
const slowBulb = document.getElementById("slowLight");

slowButton.addEventListener("click", function (){
  slowBulb.classList.toggle("slow")
})



const goButton = document.getElementById("goButton");
const goBulb = document.getElementById("goLight");

goButton.addEventListener("click", function (){
  goBulb.classList.toggle("go")
})