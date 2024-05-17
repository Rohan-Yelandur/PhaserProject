let player, floor, wizard;

let question;

let option1, option2;

let qNum = 1;



function setup() {
  new Canvas('window');
  
  world.gravity.y = 10;
  
  
  
  question = new Sprite();
  question.textSize = 40;
  question.text = "Question 0";
  question.x = 350;
  question.y = 40;
  question.collider = 'static';
  
  option1 = new Sprite();
  option1.textSize = 20;
  option1.text = "True"
  option1.x = 250;
  option1.y = 345;
  option1.collider = 'static';
  
  option2 = new Sprite();
  option2.textSize = 20;
  option2.text = "Flase"
  option2.x = 500;
  option2.y = 345;
  option2.collider = 'static';

  
  player = new Sprite();
  player.x = 50;
  player.text = "player";
  
  wizard = new Sprite();
  wizard.x = 600;
  wizard.text = "Evil Wizard"
  
  floor = new Sprite();
  floor.y = 300;
  floor.w = 900;
  floor.h = 20;
  floor.collider = 'static';
  
}

function draw() {
  background("white");
  wizard.velocity.x = -0.9;
  qNum = 1;

  
  if (qNum == 1) {
    question.text = "Question 1";

  }

}