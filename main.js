console.log("app works")
const colourId = ['one','two','three'];
const level = 3



function loopingColours(array) {
  const newArray = [];
  arrayLength = array.length
  for(var i = 0; i < level; i++){
    const randomID = Math.floor(Math.random()*array.length);
    (function(i){
        setTimeout(function(){
        document.getElementById(array[randomID]).className = 'newclass';; 
        }, 2000 * (i)); /// delays the timer
        newArray.push(randomID);
        console.log('newArray ', newArray);
    })(i); //the i picks up the from the for loop and initalliy sety it to a 
  }
}

//explain what iffy is anmd how it contributes to setting a delay on each loop.

function gamePlay() {
  loopingColours(colourId)
}



