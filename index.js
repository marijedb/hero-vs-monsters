import characterData from "./data.js"
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"];
const attackButton = document.getElementById("attack-button");

function getNewMonster(){
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack(){
   wizard.setDiceHtml();
   monster.setDiceHtml();
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render()

   if(wizard.dead){
      attackButton.disabled = true;
      setTimeout(() => endGame(), 1500)
   } else if(monster.dead) {
      attackButton.disabled = true;
      if(monstersArray.length < 1){
         setTimeout(() => endGame(), 1500)
      } else {
         setTimeout(() => {
            monster = getNewMonster()
            attackButton.disabled = false;
            render()
      }, 1500)
      }
   } 
}

function endGame(){
   const endMessage = wizard.dead && monster.dead ? "No victors!" : wizard.dead ? `The ${monster.name} is Victorious!` : "The Wizard Wins!";
   const endEmoji = wizard.health > 0 ? "🔮" : "☠️";
   document.querySelector('body').innerHTML =  
   `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

function render() {
   document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
   document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

attackButton.addEventListener("click", attack)

const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render()