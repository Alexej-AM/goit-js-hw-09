const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');


buttonStart.addEventListener('click', onButtonClickStart);
buttonStop.addEventListener('click', onButtonClickStop);
let timerId = null;



function onButtonClickStart(event) { 
    buttonStart.disabled = true;
    buttonStop.disabled = false;
timerId = setInterval(() => {
    const changeColor =  bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
    
 };

function onButtonClickStop(event) { 
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    
    clearInterval(timerId);
 };

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 };
