document.getElementById('red').onclick = partyRed;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;

document.getElementById('red2').onclick = partyRed2;
document.getElementById('green2').onclick = partyGreen2;
document.getElementById('blue2').onclick = partyBlue2;

document.getElementById('red3').onclick = partyRed3;
document.getElementById('green3').onclick = partyGreen3;
document.getElementById('blue3').onclick = partyBlue3;

document.getElementById('Logo').onclick = partyLogo

// 1. Set up a variable to track the current selected Pokémon
let currentPokemon = null;
let evolutionStage = 0; // 0 = base, 1 = mid, 2 = final
// 2. Get the evolve button from the HTML
const evolveBtn = document.getElementById('evolveButton');
evolveBtn.innerText = 'Choose your Pokémon!';
evolveBtn.classList.add('disabled'); // ✅ Resets it visually and functionally
currentPokemon = null;
// 3. Add a click event to trigger the evolve logic
evolveBtn.addEventListener('click', evolvePokemon);
// 4. Define the evolvePokemon() function

  function evolvePokemon() {
    if (!currentPokemon) return;
  
    const img = document.getElementById('pokemonImg');
  
    // ✅ RESET size before evolving (always start clean)
    img.style.width = '200px';
    img.style.marginLeft = '-100px';
  
    if (currentPokemon === 'charmander') {
      if (evolutionStage === 0) {
        img.classList.remove('animate');
        // 🧡 Evolve to Charmeleon
        img.src = 'https://media.tenor.com/fk9-MPwwo60AAAAj/pok%C3%A9mon-charmeleongif.gif';
        evolveBtn.innerText = 'Charmeleon!';
        evolutionStage = 1;
  
        // ✅ Resize Charmeleon
        img.style.width = '125px';
        img.style.marginLeft = '-65px';
        img.style.top = '373px';           // optional: tweak vertical alignment
        img.style.left = '50%';
  
        // ✅ Animate
        img.classList.add('animate');
        setTimeout(() => img.classList.remove('animate'), 800);
  
      } else if (evolutionStage === 1) {
        // 🔴 Evolve to Charizard
        const newSrc = 'https://media0.giphy.com/media/SnctJfY81x2XC/giphy.gif';
        const preloaded = new Image();
        preloaded.src = newSrc;
      
        preloaded.onload = () => {
          img.src = newSrc;
          evolveBtn.innerText = 'Charizard!';
          evolutionStage = 2;
      
          // ✅ Resize Charizard
          img.style.width = '400px';
          img.style.marginLeft = '-200px';
          img.style.top = '200px';
          img.style.left = '50%';
      
          // ✅ Animate
          img.classList.add('animate');
          setTimeout(() => img.classList.remove('animate'), 800);
        };
      } else {
        // 🔁 Loop back to Charmander
      
        const img = document.getElementById('pokemonImg');
      
        // ✅ FULL reset (clears leftover animation)
        img.style.animation = 'none';
        img.offsetHeight; // 🧼 force reflow
        img.style.animation = null;
      
        img.classList.remove('animate'); // just in case
      
        img.src = 'https://media.tenor.com/hLfJG3B_ZLIAAAAj/charmander-gif-pokemon.gif';
        evolveBtn.innerText = 'Charmander!';
        evolutionStage = 0;
      
        img.style.width = '125px';
        img.style.marginLeft = '-65px';
        img.style.top = '373px';
        img.style.left = '50%';
      
        // ❌ NO animate class added
      }
    }
  }

function partyLogo() {
  currentPokemon = null;
  evolutionStage = 0;
  evolveBtn.innerText = 'Choose your Pokémon!';
  evolveBtn.classList.add('disabled');

  const img = document.getElementById('pokemonImg');
  img.src = '';
  img.style.display = 'none';

  document.body.style.backgroundColor = 'rgb(255, 247, 222)';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = '500px 300px';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundPositionY = '290px';
  const trainerBg = document.getElementById('trainerBackground');
trainerBg.style.backgroundImage = '';
setTimeout(() => {
  trainerBg.style.backgroundImage = "url('https://i.pinimg.com/originals/a7/bc/5e/a7bc5e24c5695d8ad44d6271b44e288d.gif?" + new Date().getTime() + "')";
}, 20);
}

function partyChoose() {
  document.body.style.backgroundColor = 'rgb(255, 247, 222)';
  // document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/a7/bc/5e/a7bc5e24c5695d8ad44d6271b44e288d.gif?" + new Date().getTime() + "')";
  document.querySelector('h1').style.color = 'white'
  document.querySelector('h2').style.color = 'black'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.backgroundSize = '500px 300px'
  document.body.style.backgroundPosition = "center"
  document.body.style.backgroundPositionY = '290px'
}

function partyRed() {
  currentPokemon = 'charmander';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled'); // ✅ Activates the button

  document.body.style.backgroundColor = 'rgb(161, 14, 14)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://media.tenor.com/hLfJG3B_ZLIAAAAj/charmander-gif-pokemon.gif';
  img.style.display = 'block';
  img.style.top = '373px';
  img.style.left = '50%';            // Keep centered anchor
  img.style.marginLeft = '-65px';   // Move slightly to the LEFT (default: -100px)
  img.style.width = '125px'; // default size
}

function partyGreen() {
  currentPokemon = 'bulbasaur';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgb(53, 163, 2)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://user-images.githubusercontent.com/37589213/52086676-d41dce00-25a7-11e9-89fe-51a2aef284a9.gif';
  img.style.display = 'block';
  img.style.top = '410px';
  img.style.left = '50%';            // Keep centered anchor
  img.style.marginLeft = '-60px';   // Move slightly to the LEFT (default: -100px)
  img.style.width = '125px'; // default size
}

function partyBlue() {
  currentPokemon = 'squirtle';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgb(28, 145, 255)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://static.wikia.nocookie.net/pokeone/images/2/27/007Squirtle.gif';
  img.style.display = 'block';
  img.style.top = '410px';
  img.style.left = '50%';            // Keep centered anchor
  img.style.marginLeft = '-70px';   // Move slightly to the LEFT (default: -100px)
  img.style.width = '125px'; // default size
}

function partyRed2() {
  currentPokemon = 'cyndaquil';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgba(231, 74, 26, 0.822)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://media.tenor.com/Q1GffEXQrgAAAAAj/cyndaquil-pokemon.gif';
  img.style.display = 'block';
  img.style.top = '380px';
  img.style.left = '50%';            // Keep centered anchor
  img.style.marginLeft = '-80px';   // Move slightly to the LEFT (default: -100px)
  img.style.width = '200px'; // default size
}

function partyGreen2() {
  currentPokemon = 'chikorita';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgba(76, 197, 147, 0.822)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://64.media.tumblr.com/44f3f022e4b3a68709556f9f0d6fa92e/tumblr_noxx7oyhRP1scncwdo1_540.gif';
  img.style.display = 'block';
  img.style.top = '320px';
  img.style.left = '50%';
  img.style.marginLeft = '-174px';
  img.style.width = '400px';
}

function partyBlue2() {
  currentPokemon = 'totodile';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgba(6, 144, 207, 0.64)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://media.tenor.com/lr6evdW49pcAAAAj/totodile-pokemon.gif';
  img.style.display = 'block';
  img.style.top = '300px';
  img.style.left = '50%';
  img.style.marginLeft = '-100px';
  img.style.width = '175px'; // default size
}

function partyRed3() {
  currentPokemon = 'torchic';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgba(255, 174, 0, 0.822)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57c0ca5-c162-43e7-b0dc-40f215c30321/dg6026h-89565943-8f42-484b-a2f3-17cd0f5da2e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1N2MwY2E1LWMxNjItNDNlNy1iMGRjLTQwZjIxNWMzMDMyMVwvZGc2MDI2aC04OTU2NTk0My04ZjQyLTQ4NGItYTJmMy0xN2NkMGY1ZGEyZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R5TZqBoDzAQYzHqf4_9MqQ_0db6hjyEM_3K2XzCi2VE';
  img.style.display = 'block';
  img.style.top = '305px';
  img.style.left = '50%';
  img.style.marginLeft = '-160px';
  img.style.width = '325px'; // default size
}

function partyGreen3() {
  currentPokemon = 'treecko';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgba(113, 223, 99, 0.822)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://img.pokemondb.net/sprites/black-white/anim/normal/treecko.gif';
  img.style.display = 'block';
  img.style.top = '335px';
  img.style.left = '50%';
  img.style.marginLeft = '-76px';
  img.style.width = '160px'; // default size
}

function partyBlue3() {
  currentPokemon = 'mudkip';
  evolutionStage = 0;
  evolveBtn.innerText = 'Evolve';
  evolveBtn.classList.remove('disabled');

  document.body.style.backgroundColor = 'rgba(126, 228, 241, 0.822)';
  const img = document.getElementById('pokemonImg');
  img.src = 'https://media.tenor.com/cQtoIIrpSxQAAAAj/pokemon-mudkip.gif';
  img.style.display = 'block';
  img.style.top = '350px';
  img.style.left = '50%';
  img.style.marginLeft = '-90px';
  img.style.width = '170px'; // default size
}