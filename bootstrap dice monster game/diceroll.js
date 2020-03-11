var rollTheDice = function(){
  var pictureTarget = document.getElementById("picture");
  var pictureTarget2 = document.getElementById("picture2");
  //pictureTarget.src = "";

  var rollDice = Math.floor(Math.random() * 6) + 1;
  var rollDice2 = Math.floor(Math.random() * 6) + 1;
pictureTarget.src = "dice"+ rollDice + ".png";
pictureTarget2.src = "dice"+ rollDice2 + ".png";

//window.alert("number is changing");

}

document.getElementById("button1").onclick = rollTheDice
