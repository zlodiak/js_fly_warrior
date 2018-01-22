var canvasWidth = 600,
    canvasHeight = 400,
    shipWidth = 10,
    shipHeight = 20,
    enemyColors = ['red', 'orange', 'blue', 'lime', 'lightgreen', 'navy'];
    playerColor = '#fff';

var player,
    enemies = [],
    enemiesCntInit = 10,    
    helper,
    tickPeriod = 1,
    playerCoords = {
      'x': canvasWidth / 2,
      'y': canvasHeight - shipHeight
    };

var canvas, 
    ctxCanvas;   

function PlayerShip() {
  this.xCoord = helper.randomIntFromZero(canvasWidth) - shipWidth;
  this.yCoord = canvasHeight - shipHeight;
  this.rocketsCnt = 50;
  this.energy = 100;
  this.speed = 4;
  this.petrol = 100;
};  

function EnemyShip(yCoord) {  
  this.xCoord = helper.randomIntFromZero(canvasWidth);
  this.yCoord = (yCoord === 0) ? yCoord : helper.randomIntFromZero(canvasHeight / 2);
  this.rocketsCnt = 10;
  this.energy = 100;
  this.speed = 2;
  this.id = performance.now();
  this.color = enemyColors[helper.randomIntFromZero(enemyColors.length)];
};      

function renderPlayer() {  
  ctxCanvas.beginPath();
  ctxCanvas.strokeStyle = playerColor;
  ctxCanvas.strokeRect(playerCoords.x, playerCoords.y, shipWidth, shipHeight);  
  ctxCanvas.stroke();  
};

function moveEnemies() {  
  enemies.forEach(function(e) {
    var eOld = JSON.parse(JSON.stringify(e));
    var motionDir = helper.randomIntFromZero(6);

    switch(motionDir) {
      case 0: e.xCoord += e.speed;
        break;
      case 1: e.xCoord -= e.speed;
        break;
      case 2: e.xCoord += e.speed;
        break;
      case 3: e.xCoord -= e.speed;
        break;        
      case 4: e.yCoord += e.speed;
        break;       
    }    

    if(e.xCoord < 0 || e.xCoord > canvasWidth - shipWidth) { e.xCoord = eOld.xCoord; }
    if(e.yCoord < -shipHeight) { e.yCoord = eOld.yCoord; }
    if(e.yCoord > canvasHeight) { 
      var length = enemies.length;
      for(var i = 0; i < length; i++) {
        if(e.id === enemies[i].id) {
          enemies.splice(i, 1);
          enemies.push(new EnemyShip(0));
        }
      }
    }    

    ctxCanvas.beginPath();
    ctxCanvas.strokeStyle = e.color;
    ctxCanvas.strokeRect(e.xCoord, e.yCoord, shipWidth, shipHeight);  
    ctxCanvas.stroke();
  });
};