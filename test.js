
function loopingColours(array) {
    const newArray = [];
    arrayLength = array.length

    (function(){
      for (let i = 0; i < array.length; i++) {
        const randomID = Math.floor(Math.random()*array.length);
        setTimeout(function(){
            document.getElementById(array[randomID]).className = 'newclass';
        }, 2000 * (i));
        newArray.push(randomID);
        console.log('newArray ', newArray); 
      } 
 
    })(i);
}