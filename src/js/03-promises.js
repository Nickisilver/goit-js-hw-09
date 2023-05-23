// import Notiflix from 'notiflix';

// const inputRef = document.querySelector('form');
// const inputDelay = document.querySelector('[ name="delay"]');
// const inputStep = document.querySelector('[ name="step"]');
// const inputAmount = document.querySelector('[name="amount"]');
// const btnStart = document.querySelector('[type="submit"]');

// let delay = null;
// let step = null;
// let amount = null;

// inputRef.addEventListener('input', onFormInput);
// inputRef.addEventListener('submit', preventDefault);
// btnStart.addEventListener('click', onBtnStartClick);

// function onFormInput() {
//   delay = +inputDelay.value;
//   console.log(delay);
//   step = +inputStep.value;
//   console.log(step);
//   amount = +inputAmount.value;
//   console.log(amount);
// }

// function preventDefault(e) {
//   e.preventDefault();
//   onBtnStartClick()
// }

// function onBtnStartClick() {
//   btnStart.setAttribute('disabled', 'disabled')
//   for (let i = 1; i <= amount; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//     delay += step;
//   }

// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }


import Notiflix from 'notiflix';

const btnStart = document.querySelector('button')
const formRef = document.querySelector('form')
const inputDelay = document.querySelector('[ name="delay"]');
const inputStep = document.querySelector('[ name="step"]');
const inputAmount = document.querySelector('[name="amount"]');

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', preventDefault)

function preventDefault(e) {
  e.preventDefault();
  onBtnStartClick()

}

  function onFormInput() {
    delay = +inputDelay.value;
    console.log(delay);
    step = +inputStep.value;
    console.log(step);
    amount = +inputAmount.value;
    console.log(amount);
  }


function onBtnStartClick() {



  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  // блокування кнопки на час виведення промісів
setTimeout(() => {
  btnStart.disabled = false
}, delay);
btnStart.disabled = true
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