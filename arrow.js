// function handleKeyDown(event) {
//     let key = event.which
//     switch (event.which) {
//         case 37:
//             console.log('Moving Left');
//             break;
//         case 38:
//             console.log('Moving Up');
//             break;
//         case 39:
//             console.log('moving Right');
//             break;
//         case 40:
//             console.log('Moving down');
//             break;
//     }
//   }

document.onkeydown=check;
function check(e){
    e=e || window.event;
    if (e.keyCode=="37"){
        console.log("it will move to left")
    }
    else if(e.keyCode=="38"){
        console.log("it will move to Up")
    }
    else if(e.keyCode=="39"){
        console.log("it will move to Right")
    }
    else if(e.keyCode=="40"){
        console.log("it will move to Down")
    }
    else{
        console.log("Enter Any Key from Arrow mark ")
    }
}
