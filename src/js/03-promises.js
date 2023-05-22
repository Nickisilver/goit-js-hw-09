// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // Get form element
// const formRef = document.querySelector('.form');

// // Set event listener submit on form
// formRef.addEventListener('submit', onSubmitForm);

// // Submit form
// function onSubmitForm(e) {
//   e.preventDefault();

//   let delay = Number(formRef.delay.value);

//   for (let i = 1; i <= formRef.amount.value; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delay += Number(formRef.step.value);
//   }
// }

// // Create promise
// function createPromise(position, delay) {
//   const obj = { position, delay };
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         // Fulfill
//         resolve(obj);
//       } else {
//         // Reject
//         reject(obj);
//       }
//     }, delay);
//   });
// }


import Notiflix from 'notiflix';

const inputRef = document.querySelector('form')
const inputDelay = document.querySelector('[ name="delay"]')
const inputStep = document.querySelector('[ name="step"]')
const inputAmount = document.querySelector('[name="amount"]')
const btnStart = document.querySelector('button')
let delay = null;
let step = null;
let amount = null;



inputRef.addEventListener('input', onFormInput)
inputRef.addEventListener('submit', preventDefault)
btnStart.addEventListener('click', onBtnStartClick)

function onFormInput(){
  delay = +inputDelay.value;
  console.log(delay)
  step = +inputStep.value;
  console.log(step);
  amount = +inputAmount.value;
  console.log(amount)
}

function preventDefault(e){
  e.preventDefault();
}

function onBtnStartClick(){
for(let i = 1; i <= amount; i +=1){
  createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += step
}


}

function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      
        resolve({ position, delay });
      } else {
       
        reject({ position, delay });
      }
    }, delay);
  });
}