console.log("app works")
const colourId = ['one','two','three'];
const level = 3;
const button = document.getElementsByTagName('button')
const computerArray = [];
const playerArray = [] // explain scope abit - the fact that we define the arrays outside the functions means that we are able to use it inside and outside functions

function playerClick(button_id) //the id from the html is sent back and we are able to make sure of it in the playerClick function
{
  // while (playerArray.length < level) 
    //console.log(x);
  playerArray.push(button_id)
  console.log('player array', playerArray)
  if (playerArray.length === 3) {
    console.log('STOP MAN')
    for (let index = 0; index < button.length; index++) {
      button[index].disabled = true; 
    }
  }
}

//getElementsByTagName returns an array objects

function loopingColours(array) {

  arrayLength = array.length

  for(var i = 0; i < level; i++){

    const randomID = Math.floor(Math.random()*array.length);

    (function(i){
        setTimeout(function(){
        document.getElementById(array[randomID]).className = 'newclass';
        computerArray.push(randomID); // adds the class

        setTimeout(function(){
          document.getElementById(array[randomID]).classList.remove('newclass');
          }, 1000); // removes the class 

        }, 2000 * (i)); /// delays the timer

        computerArray.push(randomID);
        console.log('Computer Array ', computerArray);

    })(i); //the i picks up the from the for loop and initalliy sety it to a 
  }
}





function gamePlay() {
  loopingColours(colourId)
  console.log('returned player Array', playerArray, 'the computer Array ', computerArray);
  //test(colourId)
}


//create a players array that collects all the ids from the buttons that player has clicked on - done
//loop over the array x times and apply the style into the div x times - done 
// save index into the new array that will be used to compared to player (automatedSequenceArray)
//use the new array to compare the users input (userSequenceArray)
//if it matches excatly the user gets a point and it will be stored in their points array (pointsArray)
//once user has entered their input, timer goes off again repeating the loopingColours function
//the game will be encapsulated in a timer of 1 minute and once the timer if over the game will break.
