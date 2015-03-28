/* 
 * Handles behavior of speech bubble
 * Author: Dennis Sesma
 */

var characterLines = ["Hire me!", "I'm self Taught!", "I learn everyday", "HTML5 FTW!",];
var speechBubble;

//check if current page is home page 
if(document.title === "Home")
{
    speechBubble = createSpeechBubble("Welcome");
    window.setTimeout(function(){ speechBubble.style.visibility = "hidden"; }, 5000);
}
else
{   
    speechBubble = createSpeechBubble("");
    speechBubble.style.visibility = "hidden";
}

// speech bubble loop
window.setInterval(saySomething, 30000);

//functions//

/**
 * Creates an element that serves as a speech bubble
 * @param {string} text - the string desired for speech bubble
 * @returns {createSpeechBubble.speechBubble|Element}
 */
function createSpeechBubble(text){
   var speechBubble = document.createElement("P");
   speechBubble.className = "triangle-isosceles";
   speechBubble.id = "bubble";
   speechBubble.innerHTML = text;
   document.getElementsByTagName("header")[0].appendChild(speechBubble);
   return speechBubble;
}

/**
 * Returns a random number from min - max inclusive
 * @param {int} min - lowest number in range
 * @param {int} max - highest number in range
 * @returns {Number}
 */
function randomIntFromRange(min,max)
{ return Math.floor(Math.random()*(max-min+1)+min); }

/**
 * Displays speech bubble with different text each call, then hides speech bubble
 * @returns {undefined}
 */
function saySomething() {    
    speechBubble.innerHTML = characterLines[randomIntFromRange(0,characterLines.length - 1)];
    speechBubble.style.visibility = "visible";
    setTimeout(function(){ speechBubble.style.visibility = "hidden"; }, 5000);
}