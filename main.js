console.log("app works")

// const array = ['one','two','three'];

  function myFunction(arr) {
    const arr = ['one','two','three'];
    for (i = 0; i < arr.length; i++) { 
        console.log(arr[i])
        document.getElementById(arr[i]).style.background = "pink";
      }
   
  }

  myFunction(array)


  

//   setTimeout(function(){
//     document.getElementById(x).style.background = "pink";
// }, 
// 3000);
// });