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
  "C Site (Reroll if there isn't one)",
  "Fake A Site",
  "Fake B Site",
  "Fake C Site",
  "No Shields",
  "Must Comm Every Action",
  "Only Bottom Frag May Comm",
  "Only Bottom Frag May Get Kills",
  "Pick Up Enemy Gun for Every Kill"
];

// const valorantButton = document.querySelector(".valorantButton");

// valorantButton.addEventListener("click", getRandomItem());

function getRandomStrat(){
   const randomIndex = Math.floor(Math.random() * strats.length);
  //  console.log(randomIndex);
   const strat = strats[randomIndex];
   document.getElementById("random__strat").innerHTML = strat;
}

const guns = [
  "Classic",
  "Shorty",
  "Frenzy",
  "Ghost",
  "Sheriff",
  "Stinger",
  "Spectre",
  "Bucky",
  "Marshal",
  "Judge",
  "Bulldog",
  "Guardian",
  "Phantom",
  "Vandal",
  "Marshal",
  "Operator",
  "Ares",
  "Odin",
  "Knife"
];

const gunsImages = [
  "/valorantGuns/classic.png",
  "/valorantGuns/shorty.png",
  "/valorantGuns/frenzy.png",
  "/valorantGuns/ghost.png",
  "/valorantGuns/sheriff.png",
  "/valorantGuns/stinger.png",
  "/valorantGuns/spectre.png",
  "/valorantGuns/bucky.png",
  "/valorantGuns/marshal.png",
  "/valorantGuns/judge.png",
  "/valorantGuns/bulldog.png",
  "/valorantGuns/guardian.png",
  "/valorantGuns/phantom.png",
  "/valorantGuns/vandal.png",
  "/valorantGuns/marshal.png",
  "/valorantGuns/operator.png",
  "/valorantGuns/ares.png",
  "/valorantGuns/odin.png",
  "/valorantGuns/knife.png",
]

const gunsImages1 = [
  "/valorantGuns1/classic.png",
  "/valorantGuns1/shorty.png",
  "/valorantGuns1/frenzy.png",
  "/valorantGuns1/ghost.png",
  "/valorantGuns1/sheriff.png",
  "/valorantGuns1/stinger.png",
  "/valorantGuns1/spectre.png",
  "/valorantGuns1/bucky.png",
  "/valorantGuns1/marshal.png",
  "/valorantGuns1/judge.png",
  "/valorantGuns1/bulldog.png",
  "/valorantGuns1/guardian.png",
  "/valorantGuns1/phantom.png",
  "/valorantGuns1/vandal.png",
  "/valorantGuns1/marshal.png",
  "/valorantGuns1/operator.png",
  "/valorantGuns1/ares.png",
  "/valorantGuns1/odin.png",
  "/valorantGuns1/knife.png",
]

function getRandomGun(){
  const randomIndex1 = Math.floor(Math.random() * guns.length);
  //  console.log(randomIndex);
   const gunText = guns[randomIndex1];
   document.getElementById("random__gun").innerHTML = gunText;
   document.getElementById("random__gun__image").src = gunsImages1[randomIndex1];
}
