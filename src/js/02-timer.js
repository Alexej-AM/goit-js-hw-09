import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const flatPickrEl = document.querySelector('input#datetime-picker');
const buttonEl = document.querySelector('button');
buttonEl.disabled = true;

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            // window.alert("Please choose a date in the future");
            buttonEl.disabled = true;
           return;
          } else{buttonEl.disabled = false;}
         
 
buttonEl.addEventListener('click', onClickButton);



function onClickButton () {
    let timerId = setInterval(() => {
        let deltaTime = selectedDates[0] - Date.now();
        if(deltaTime < 0){
clearInterval(timerId);
return;
        }
        convertMs(deltaTime);
        console.log(deltaTime);
    }, 1000)
};
},
};


flatpickr(flatPickrEl, options);


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    // return { days, hours, minutes, seconds };

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

