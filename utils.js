export function getDiceRollArray(diceCount) {
    // create a variable and make it a new array with length of dicecount. 
    // fill it temporarily with 0's and then map over the array and replace the 0's
    // with random numbers. 
    return new Array(diceCount).fill(0).map(function () {
       return Math.floor(Math.random() * 6) + 1
    });
 }

 export function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return `<div class="placeholder-dice"></div>`
    }).join("")
 }

export function getPercentage(remainingHealth, maximumHealth){
   return (100 * remainingHealth)/ maximumHealth
}