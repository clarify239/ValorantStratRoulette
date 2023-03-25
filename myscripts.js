const strats = [
  "ADS for Every Bullet",
  "No Holding Shift",
  "Walking ONLY",
  "Hold Crouch",
  "No Comms",
  "Pistols ONLY",
  "Must Use as Many Credits as Possible",
  "No Shields, Full Buy",
  "No Utility",
  "No Guns",
  "Can't Plant Spike/Let the Enemy Plant Spike",
  "Full Rush Site",
  "Stay in Spawn for a Minute",
  "Shotguns ONLY",
  "Sniper",
  "SMGs ONLY",
  "Machine Guns ONLY",
  "Light Shields ONLY",
  "A/D Keys ONLY for Movement",
  "W/S Keys ONLY for Movement",
  "Cap Frames at 60",
  "No Reloading",
  "A Site",
  "B Site",
  "C Site (Reroll if there isn't one)"
];

const valorantButton = document.querySelector(".valorantButton");

valorantButton.addEventListener("click", getRandomItem());

function getRandomItem(){
   const randomIndex = Math.floor(Math.random() * strats.length);
   console.log(randomIndex);
   var item = strats[randomIndex];
   document.getElementById("random__strat").innerHTML = item;
}
