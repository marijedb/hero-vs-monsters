import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

class Character {
    constructor(data){
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }
    
    setDiceHtml() {
        // This returns an array of random numbers the length of diceCount and replaces
        // the currentDiceScore (which is either empty or with previous round numbers) with those numbers. 
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        // This maps over the currentDiceScore with the random numbers and for each element
        // it returns an html element and stores this inside the diceHtml which either contains
        // empty divs or previous round filled divs with numbers.
        this.diceHtml = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join("")
    }

    takeDamage(attackScoreArray){
        const totalAttackScore = attackScoreArray.reduce((totalScore, currentScore) => totalScore + currentScore);
        this.health -= totalAttackScore;
        if(this.health <= 0){
            this.dead = true;
            this.health = 0;
        } 
    }

    getHealthBarHtml(){
        const percent = getPercentage(this.health, this.maxHealth)
        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                style="width: ${percent}%;">
                </div>
            </div>`
    }

    getCharacterHtml() {
        const {name,avatar,health, diceHtml} = this;
        const healthBar = this.getHealthBarHtml();

        return `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            ${healthBar}
            <div class="dice-container">${diceHtml}</div>
        </div>
        `
    }
}

export default Character