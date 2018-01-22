document.addEventListener("keydown", function(e) { 
  var playerCoordsOld = JSON.parse(JSON.stringify(playerCoords));

  switch(e.keyCode) {
    case 38: playerCoords.y -= player.speed;
      break;
    case 40: playerCoords.y += player.speed;
      break;
    case 37: playerCoords.x -= player.speed;
      break;
    case 39: playerCoords.x += player.speed;
      break;        
    case 13: console.log('rocket');
      break;       
  } 

  if(playerCoords.x < 0 || playerCoords.x > canvasWidth - shipWidth) { 
    playerCoords = playerCoordsOld; 
  }

  if(playerCoords.y < 0 || playerCoords.y > canvasHeight - shipHeight) { 
    playerCoords = playerCoordsOld; 
  }
});