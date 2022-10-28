const wizard = {
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceScore: 6,
   id: "hero"
}

const monster = {
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceScore: 4,
   id: "monster"
}

function renderCharacter(data) {
   document.getElementById(data.id).innerHTML= `
       <div class="character-card">
           <h4 class="name">${data.name}</h4>
           <img class="avatar" src="${data.avatar}"/>
           <p class="health">health: <b> ${data.health} </b></p>
           <div class="dice-container"><div class="dice"> ${data.diceScore} </div></div>
       </div>
   `
}


renderCharacter(wizard);
renderCharacter(monster);