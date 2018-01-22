document.addEventListener("DOMContentLoaded", function(event) { 
  canvas = document.getElementById('canvas');
  ctxCanvas = canvas.getContext('2d');    

  helper = new Helper();
  player = new PlayerShip(); 

  for(var i = 0; i < enemiesCntInit; i++) {
    enemies.push(new EnemyShip());
  }

  moveEnemies();
  setTimeout(function run() {
    ctxCanvas.clearRect(0, 0, canvasWidth, canvasHeight);
    moveEnemies();
    renderPlayer();
    setTimeout(run, tickPeriod);
  }, tickPeriod);  
});
