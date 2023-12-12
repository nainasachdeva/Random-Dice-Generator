var randomnumber1 = Math.floor( Math.random() * 6 ) + 1;
console.log(randomnumber1);
var imageSource1 = "images/dice" + randomnumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src", imageSource1);


var randomnumber2 = Math.floor( Math.random() * 6 ) + 1;
console.log(randomnumber2);
var imageSource2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".dice .img2").setAttribute("src", imageSource2);

if( randomnumber1 > randomnumber2 ){
    document.querySelector("h1").innerHTML = "🚩 Player1 wins!";
} else {
    if( randomnumber1 < randomnumber2 ){
    document.querySelector("h1").innerHTML = "Player2 wins! 🚩";
    } else {
        if( randomnumber1 === randomnumber2 ){
        document.querySelector("h1").innerHTML = "Draw!";
        }
    }
}