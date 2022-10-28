const wizard = {
   name: "Wizard",
   avatar: "images/wizard.png",
   health: 60,
   diceScore: [3, 1, 4],
   id: "hero",
   diceCount: 3
}

const monster = {
   name: "Orc",
   avatar: "images/orc.png",
   health: 10,
   diceScore: [2],
   id: "monster",
   diceCount: 1
}

function renderCharacter(data) {
   const {name, avatar, health, diceScore, id, diceCount} = data;
   let diceHtml = ``;

   for(let i = 0; i < diceCount; i++){
      diceHtml += `<div class="dice">${diceScore[i]}</div>`;
   }

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