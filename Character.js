import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    this.getDiceHtml = function () {
        // This returns an array of random numbers the length of diceCount and replaces
        // the currentDiceScore (which is either empty or with previous round numbers) with those numbers. 
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        // This maps over the currentDiceScore with the random numbers and for each element
        // it returns an html element and stores this inside the diceArray which either contains
        // empty divs or previous round filled divs with numbers.
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join("")
    }

    this.takeDamage = function(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((totalScore, currentScore) => totalScore + currentScore);
        this.health -= totalAttackScore;
        if(this.health <= 0){
            this.dead = true;
            this.health = 0;
        } 
    }

    this.getHealthBarHtml = function(){
        const percent = getPercentage(this.health, this.maxHealth)
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                style="width: ${percent}%;">
                </div>
            </div>`
    }

    this.getCharacterHtml = function () {
        const {name,avatar,health, diceArray} = this;
        const healthBar = this.getHealthBarHtml();

        return `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            ${healthBar}
            <div class="dice-container">${diceArray}</div>
        </div>
        `
    }
}

export default Character