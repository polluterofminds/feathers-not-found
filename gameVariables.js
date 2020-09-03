let gameVariables = {
  GAME_HEIGHT: 3000, 
  GAME_WIDTH: 600, 
  FPS: 15, 
  game: undefined, 
  currentLevel: 0, 
  PLAYER_SPEED: 3, 
  FRICTION: 0.8, 
  GRAVITY: 0.4, 
  JUMP_POWER: 2.5, 
  GROUNDED: true, 
  JUMPING: false, 
  player: undefined, 
  SPRITE_HEIGHT: 25, 
  SPRITE_WIDTH: 25, 
  SCALE: 1, 
  keys: [], 
  playerVelX: 0, 
  playerVelY: 0, 
  eggVelY: 0, 
  itemVelY: 0, 
  levels: [],
  platforms: [], 
  eggs: [], 
  MAX_EGG_TIMER: 250, 
  eggTimer: 250, 
  pause: false, 
  cycleLoop: [10, 11, 12, 13, 14, 15], 
  eggLoop: [9, 8, 7, 6, 5, 4],
  jumpLoop: [4, 3, 2, 1], 
  eggLoopIndex: 0,
  currentLoopIndex: 0, 
  jumpLoopIndex: 0,
  facingRight: true, 
  jumpingOff: false, 
  img: new Image(), 
  frame: 0, 
  layingEgg: false, 
  eggTimerBar: undefined, 
  droppingItems: false, 
  dropCount: 0, 
  maxDropCount: 100, 
  droppedItems: [], 
  levelCompleteText: [
    "You flapped and hopped your way to your first feather! Keep going so you can catch up to your family.",
  ]
}

window.gameVariables = gameVariables;