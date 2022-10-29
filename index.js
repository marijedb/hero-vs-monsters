const wizard = {
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   id: "hero",
   diceCount: 3
}

const monster = {
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   id: "monster",
   diceCount: 1
}

function getDiceRollArray(diceCount){
   // create a variable and make it a new array with length of dicecount. 
   // fill it temporarily with 0's and then map over the array and replace the 0's
   // with random numbers. 
   return new Array(diceCount).fill(0).map(function(){
      return Math.floor(Math.random() * 6) + 1
   });
}

function getDiceHtml(diceCount){
   return getDiceRollArray(diceCount).map(function(num){
      return `<div class="dice">${num}</div>`
   }).join('')
}

function renderCharacter(data) {
   const {name, avatar, health, id, diceCount} = data;
   
   const diceHtml = getDiceHtml(diceCount)

   document.getElementById(id).innerHTML= `
       <div class="character-card">
           <h4 class="name">${name}</h4>
           <img class="avatar" src="${avatar}"/>
           <p class="health">health: <b> ${health} </b></p>
           <div class="dice-container">${diceHtml}</div>
       </div>
       `
}

renderCharacter(wizard);
renderCharacter(monster);