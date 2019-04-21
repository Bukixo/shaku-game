console.log("app works")
const colourId = ['0', '1', '2'];
const level = 3;
const button = document.getElementsByTagName('button')
const scoreBoard = document.getElementById('scoreBoard')
const points = 0;
const score = 0;
const computerArray = [];
let playerArray = [] // explain scope abit - the fact that we define the arrays outside the functions means that we are able to use it inside and outside functions
const cleanedPlayerArray = [];
let timer = 4; //set the varibale as a let rather than a const because a value that cannot be altered by the program during normal execution
const count = document.getElementById('count')
let counter = 5

function playerClick(button_id) { //the id from the html is sent back and we are able to make sure of it in the playerClick function
  //button[index].disabled = false; 
  
  playerArray.push(button_id)
  console.log('player array', playerArray)
  if (playerArray.length === level) {
    console.log('STOP MAN')
    for (let index = 0; index < button.length; index++) {
      button[index].disabled = true; 
    }
    compareScore(computerArray, playerArray)
    playerArray = []
    console.log('new array', playerArray)
  }
}

function disableButtons(callback){
  for (let index = 0; index < button.length; index++) {
    button[index].disabled = true; 
  } 
  setTimeout(() => {
    for (let index = 0; index < button.length; index++) {
      button[index].disabled = false; 
    }
  }, level * 1000);
  callback()
}

//getElementsByTagName returns an array objects

function loopingColours(array, arr2) {
  arrayLength = array.length
  for (let i = 0; i < level; i++) {
    const randomID = Math.floor(Math.random() * array.length);
    (function (i) {
      setTimeout(function () {
        document.getElementById(array[randomID]).className = 'newclass';

        setTimeout(function () {
          document.getElementById(array[randomID]).classList.remove('newclass');
        }, 2000); // removes the class  

      }, 1000 * (i)); /// delays the timer

      arr2.push(randomID); // adds the class
      console.log('Computer Array ', arr2);
    })(i); //the i picks up the from the for loop and initalliy set it to a 
  }
  arr2 = []
}


function compareScore(arr1, arr2) {
  const cleanedPlayerArray = arr2.map(Number);
  console.log('mapped array', cleanedPlayerArray, 'vs', arr1)
  if (JSON.stringify(cleanedPlayerArray) === JSON.stringify(arr1)) { //very simple way to check if arrays are the same as we are only working with very basic arrays.
    const score = points + 1
    scoreBoard.innerText = score;
    console.log('player won')
  } else {
    scoreBoard.innerText = score;
    console.log('player lost')
    
  }
}



/// timer function//
// function timerFunction() {
//   const startTimer = 
//     setInterval(() => {	    
//     timer--
//     count.innerText = "Timer: " + timer;
//     console.log(timer)
//     if (timer === 0) {
//       // count.innerText = timer;
//       console.log('Stop Timer');
//       clearInterval(startTimer);
//     }	           
//    }, 1000);	 
// }


//countdown

// const countdown = 
// setInterval(() => {
//   counter--
//   console.log(counter)
//   if (counter === 0) {
//     loopingColours(colourId)
//     clearInterval(computerPlay)
//   }
// }, 1000);


function startGame() {
  loopingColours(colourId, computerArray)
}


//1 .create a players array that collects all the ids from the buttons that player has clicked on - done
// 2. loop over the array x times and apply the style into the div x times - done 
// 3. save index into the new array done
// 4.that will be used to compared to player (automatedSequenceArray) done
// 5.use the new array to compare the users input (userSequenceArray) done
// 6.if it matches excatly the user gets a point and it will be stored in their points array (scores) done
// 7.create a timer that once user clicks on button timer starts and print the timer on the ui done
// 8.during the timer once a comparison between the player and comp has been made and point has been calculated, empty the arrays
// 9.once arrays has been emptied repeat 3 - 6 until timer is complete then break loop
// 10. print overall score
//the game will be encapsulated in a timer of 1 minute and once the timer if over the game will break.
