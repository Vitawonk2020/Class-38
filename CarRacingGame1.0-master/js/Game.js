class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index=0,X = 0, Y = 0;
      for(var plr in allPlayers){
        index = index+1;
        X = X+150
        Y = displayHeight-allPlayers[plr].distance
        Cars[index-1].x = X
        Cars[index-1].y = Y

        if (plr === "player" + player.index){
 camera.position.x = displayWidth/2
 camera.position.y = Cars[index-1].y
        
         Cars[index-1].shapeColor="blue"
        }
        else
        Cars[index-1].shapeColor="yellow"

     }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
