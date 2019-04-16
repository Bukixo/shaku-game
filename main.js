console.log("app works")
const colourId = ['0', '1', '2'];
const level = 3;
const button = document.getElementsByTagName('button')
const scoreBoard = document.getElementById('scoreBoard')
const points = 0;
const score = 0;
const computerArray = [];
const playerArray = [] // explain scope abit - the fact that we define the arrays outside the functions means that we are able to use it inside and outside functions
const cleanedPlayerArray = [];
let time = 60;


function playerClick(button_id) { //the id from the html is sent back and we are able to make sure of it in the playerClick function
  playerArray.push(button_id)
  console.log('player array', playerArray)
  if (playerArray.length === 3) {
    console.log('STOP MAN')
    // for (let index = 0; index < button.length; index++) {
    //   button[index].disabled = true; 
    // }
  }
}

//getElementsByTagName returns an array objects

function loopingColours(array) {
  arrayLength = array.length
  for (let i = 0; i < level; i++) {
    const randomID = Math.floor(Math.random() * array.length);
    (function (i) {
      setTimeout(function () {
        document.getElementById(array[randomID]).className = 'newclass';

        setTimeout(function () {
          document.getElementById(array[randomID]).classList.remove('newclass');
        }, 1000); // removes the class  

      }, 5000 * (i)); /// delays the timer

      computerArray.push(randomID); // adds the class
      console.log('Computer Array ', computerArray);

    })(i); //the i picks up the from the for loop and initalliy set it to a 
  }
}

function gamePlay() {
  loopingColours(colourId)
}

function compareScore(arr1, arr2) {
  const cleanedPlayerArray = playerArray.map(Number);
  console.log('mapped array', cleanedPlayerArray, 'vs', computerArray)
  if (JSON.stringify(cleanedPlayerArray) === JSON.stringify(computerArray)) { //very simple way to check if arrays are the same as we are only working with very basic arrays.
    const score = points + 1
    scoreBoard.innerText = score;
    console.log('player won')
  } else {
    scoreBoard.innerText = score;
    console.log('player lost')
  }
}

function testGame() {
  compareScore(playerArray, computerArray);

}

/// timer function//

// function timer() {
//   for (let index = 0; index < 61; index++) {
//     for (let x = 61; x > 61; x - 1 ) {
//       setTimeout(() => {
//         console.log(x)
//         }, index * 1000);
//     } 
//   }
// }

function timer() {
  
    setInterval(() => {	    
      time--
      console.log(time)	           

     }, 1000);	   
  
}





//1 .create a players array that collects all the ids from the buttons that player has clicked on - done
// 2. loop over the array x times and apply the style into the div x times - done 
// 3. save index into the new array done
// 4.that will be used to compared to player (automatedSequenceArray) done
// 5.use the new array to compare the users input (userSequenceArray) done
// 6.if it matches excatly the user gets a point and it will be stored in their points array (scores) done
// 7.create a timer that once user clicks on button timer starts and print the timer on the ui
// 8.during the timer once a comparison between the player and comp has been made and point has been calculated, empty the arrays
// 9.once arrays has been emptied repeat 3 - 6 until timer is complete then break loop
// 10. print overall score
//the game will be encapsulated in a timer of 1 minute and once the timer if over the game will break.
