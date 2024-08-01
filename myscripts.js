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
  "Pick Up Enemy Gun for Every Kill",
  "Can Only Use First Ability",
  "Can Only Use Second Ability",
  "Can Only Use Third Ability",
  "Free Pass, Play Normal! :)",
  "Top Frag Comm ONLY",
  "Must Use Ultimate if You Have",
  "Must Play in Window Mode (Small Screen)",
  "Hold Space (JUMP)",
  "Must 360 After Every Kill",
  "Must T-Bag Every Kill",
  "Only Guns that Teammates Buy (MUST REQUEST)",
  "Wrong Comms Only (Can't tell teammates)",
  "Can't Stop Moving",
  "Flick Only",
  "Flash/Blind/Stun Teammates (If Possible)",
  "Trash Talk Other Team in Team Chat"
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
  "Knife",
  "Outlaw",
  "Your choosing!!"
];

const gunsImages = [
  "./valorantGuns/classic.png",
  "./valorantGuns/shorty.png",
  "./valorantGuns/frenzy.png",
  "./valorantGuns/ghost.png",
  "./valorantGuns/sheriff.png",
  "./valorantGuns/stinger.png",
  "./valorantGuns/spectre.png",
  "./valorantGuns/bucky.png",
  "./valorantGuns/marshal.png",
  "./valorantGuns/judge.png",
  "./valorantGuns/bulldog.png",
  "./valorantGuns/guardian.png",
  "./valorantGuns/phantom.png",
  "./valorantGuns/vandal.png",
  "./valorantGuns/marshal.png",
  "./valorantGuns/operator.png",
  "./valorantGuns/ares.png",
  "./valorantGuns/odin.png",
  "./valorantGuns/knife.png",
  "./valorantGuns/outlaw.png",
  "bestVandalSkin.png"
];

function getRandomGun(){
  const randomIndex1 = Math.floor(Math.random() * guns.length);
  //  console.log(randomIndex);
   const gunText = guns[randomIndex1];
   document.getElementById("random__gun").innerHTML = gunText;
   document.getElementById("random__gun__image").src = gunsImages[randomIndex1];
}

const agents = [
  "Astra",
  "Breach",
  "Brimstone",
  "Chamber",
  "Cypher",
  "Fade",
  "Gekko",
  "Harbor",
  "Jett",
  "KAY/O",
  "Killjoy",
  "Neon",
  "Omen",
  "Phoenix",
  "Raze",
  "Reyna",
  "Sage",
  "Skye",
  "Sova",
  "Viper",
  "Yoru",
  "Clove",
  "Iso",
  "Deadlock"
];

const agentImages = [
  "./valorantAgents/Astra_icon.png",
  "./valorantAgents/Breach_icon.png",
  "./valorantAgents/Brimstone_icon.png",
  "./valorantAgents/Chamber_icon.png",
  "./valorantAgents/Cypher_icon.png",
  "./valorantAgents/Fade_icon.png",
  "./valorantAgents/Gekko_icon.png",
  "./valorantAgents/Harbor_icon.png",
  "./valorantAgents/Jett_icon.png",
  "./valorantAgents/KAYO_icon.png",
  "./valorantAgents/Killjoy_icon.png",
  "./valorantAgents/Neon_icon.png",
  "./valorantAgents/Omen_icon.png",
  "./valorantAgents/Phoenix_icon.png",
  "./valorantAgents/Raze_icon.png",
  "./valorantAgents/Reyna_icon.png",
  "./valorantAgents/Sage_icon.png",
  "./valorantAgents/Skye_icon.png",
  "./valorantAgents/Sova_icon.png",
  "./valorantAgents/Viper_icon.png",
  "./valorantAgents/Yoru_icon.png",
  "./valorantAgents/Clove_icon.png",
  "./valorantAgents/Iso_icon.png",
  "./valorantAgents/Deadlock_icon.png",
];


function getRandomAgent(){
  const randomIndex2 = Math.floor(Math.random() * agents.length);
  //  console.log(randomIndex);
   const agentText = agents[randomIndex2];
   document.getElementById("random__agent").innerHTML = agentText;
   document.getElementById("random__agent__image").src = agentImages[randomIndex2];
}
