console.log("app works")
const colourId = ['one','two','three'];
const level = 5

const playerArray = []

function something(){
  while (playerArray.length < level) {
    function playerClick(button_id) //the id from the html is sent back and we are able to make sure of it in the playerClick function
    {
      
        //console.log(x);
      playerArray.push(button_id)
      console.log(playerArray)
    }
  }
  
}


console.log("dun fam")
function loopingColours(array) {
  const newArray = [];

  arrayLength = array.length

  for(var i = 0; i < level; i++){

    const randomID = Math.floor(Math.random()*array.length);

    (function(i){
        setTimeout(function(){
        document.getElementById(array[randomID]).className = 'newclass';
        newArray.push(randomID); // adds the class

        setTimeout(function(){
          document.getElementById(array[randomID]).classList.remove('newclass');
          }, 1000); // removes the class 

        }, 2000 * (i)); /// delays the timer

        newArray.push(randomID);
        console.log('newArray ', newArray);

    })(i); //the i picks up the from the for loop and initalliy sety it to a 
  }
}





function gamePlay() {
  loopingColours(colourId)
  console.log(' the newArray ', newArray);
  //test(colourId)
}

//create a players array that collects all the ids from the buttons that player has clicked on
//loop over the array x times and apply the style into the div x times 
// save index into the new array that will be used to compared to player (automatedSequenceArray)
//use the new array to compare the users input (userSequenceArray)
//if it matches excatly the user gets a point and it will be stored in their points array (pointsArray)
//once user has entered their input, timer goes off again repeating the loopingColours function
//the game will be encapsulated in a timer of 1 minute and once the timer if over the game will break.
