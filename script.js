'use strict';

const visibelWindow = document.querySelectorAll('.show-modal'); //We used "All" with queryselector as we are selecting the same classes selector and if we don't use "All" it will just select the 1st class or button-1 so to select the same class elements we gonna use "All" the output for that console is => NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
console.log(visibelWindow);

const closeWindow = document.querySelector('.close-modal');
const backgroundClick = document.querySelector('.overlay');
const windows = document.querySelector('.modal');

// for (let i = 0; i < visibelWidnow.length; i++)
//   console.log(visibelWidnow[i].textContent); // We are looping an array here as we have seen above that variable "visibleWindow" is an array which we have seen in the output .In this way we can do something with all of these buttons at the same time and for that we have used "Loops".Loops automate the repetitive tasks . The tasks which we have to repeat again and again .

const unlockWindow = function () {
  windows.classList.remove('hidden');
  backgroundClick.classList.remove('hidden');
};

const shutWindow = function () {
  windows.classList.add('hidden');
  backgroundClick.classList.add('hidden');
};

for (let i = 0; i < visibelWindow.length; i++) {
  visibelWindow[i].addEventListener('click', unlockWindow);
}

closeWindow.addEventListener('click', shutWindow);

backgroundClick.addEventListener('click', shutWindow);

//If you want use the same function in multiple eventlistener then it's recommended to store that function in a separate variable and then use that variable in multiple event listeners . The same thing we did above.

//<=======================================================================>//

// How can we close the window by pressing the "Esc" kryboard button :

// To listen the event on the keyboard we still add the 'addEventListener' becoz this is also an another type of an event.Keyboard events are like global events becoz they don't have one specific element.

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !windows.classList.contains('hidden')) {
    shutWindow();
  }
});
