var playerHealth = 20;
var monsterHealth = 30;
var bothRolls;
var attackDamage;
var monsterDamage;
var damage;

var rollTheDice = function(){
//rolls the dice
  var pictureTarget = document.getElementById("picture");
  var pictureTarget2 = document.getElementById("picture2");
  //pictureTarget.src = "";

  var rollDice = Math.floor(Math.random() * 6) + 1;
  var rollDice2 = Math.floor(Math.random() * 6) + 1;
pictureTarget.src = "dice"+ rollDice + ".png";
pictureTarget2.src = "dice"+ rollDice2 + ".png";

//hold both dice
bothRolls = rollDice.value + rollDice2.value;

//check values to determine the attack
playerAttack();
monsterAttack();
healthChange();

document.getElementById("playerScoreDisp").innerHTML = "HP: " + playerHealth;
document.getElementById("monsterScoreDisp").innerHTML = "HP: " + monsterHealth;
document.getElementById("runningPlayerScore").innerHTML = "Attack Damage: " + attackDamage;
document.getElementById("runningMonsterScore").innerHTML = "Monster Damage: " + monsterDamage;


}

function playerAttack(){
  if(bothRolls <= 5){
    attackDamage = 2;
  }
  else if(bothRolls >= 6 && bothRolls <= 10){
    attackDamage = 4;
  }
  else{
    attackDamage = 7;
  }
}

function monsterAttack(){
  monsterDamage = Math.floor(Math.random() * 7) + 2;
}

function healthChange(){
  playerHealth -= monsterDamage;
  monsterHealth -= attackDamage;
}

document.getElementById("button1").onclick = rollTheDice
