import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

/*
Challenge
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.
2. Modify the attack() function in index.js to get our 
app working again.
*/
function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function () {
        // This returns an array of random numbers the length of diceCount and replaces
        // the currentDiceScore (which is either empty or with previous round numbers) with those numbers. 
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        // This maps over the currentDiceScore with the random numbers and for each element
        // it returns an html element and stores this inside the diceArray which either contains
        // empty divs or previous round filled divs with numbers.
        this.diceArray = this.currentDiceScore.map(function(num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function () {
        const {name,avatar,health, diceArray} = this;

        return `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">${diceArray}</div>
        </div>
        `
    }
}

export default Character