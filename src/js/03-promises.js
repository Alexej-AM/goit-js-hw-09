import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');


form.addEventListener('submit', onFromSubmit);



function onFromSubmit (event) {

  event.preventDefault();

  const amount = Number(amountInput.value);
  const step = Number(stepInput.value);
const firstDelay = Number(delayInput.value);
let delay = firstDelay;

  for(position = 1; position <= amount; position +=1 ){

    createPromise(position, delay)
    .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
    .catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
  delay += step;
}
};



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay});
      }
    }, delay);
    
  });
  return promise;
}




