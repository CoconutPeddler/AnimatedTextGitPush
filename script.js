console.log("Colors");

// Function below generates the three rgb(0,0,0) needed for the rgb color scale. rgb is a coloring system that has three inputs. 0-255
// rgb(255,255,255)            //white
// rgb(0,0,0)                  //black

function randomRGB() {
    const r = Math.floor(Math.random()*256);            //Math.Random givies the number255.9999 - Math.floor removes the decimals
    const g = Math.floor(Math.random()*256);            //Math.Random givies the number255.9999 - Math.floor removes the decimals
    const b = Math.floor(Math.random()*256);            //Math.Random givies the number255.9999 - Math.floor removes the decimals
    return `rgb(${r},${g},${b})`
}

// const h1 = document.querySelector('h1');

// h1.style.color = randomRGB();

// setInterval(function,intervalDelay) - two arguments for this function are 'function' and 'intervalDelay'
// Below is the function that changes the color for the whole h1 tag (all letters)

// setInterval(function(){                                 //function here is an anonymous function
//     h1.style.color = randomRGB();
// },500)                                                  //500 milliseconds = 0.5 seconds

const letters = document.querySelectorAll('.letter')

setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
},1000)

// How to stop the loop

const intervalId = setInterval(function(){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
},1000)

// put clearInterval(intervalId) in console to stop
