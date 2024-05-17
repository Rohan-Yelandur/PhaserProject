let player, floor, wizard;

let question;

let option1, option2;

let qNum = 1;



function setup() {
  new Canvas('2:1');
  
  world.gravity.y = 10;
  
  
  // Questions
  question = new Sprite();
  question.textSize = 40;
  question.text = "Question 0";
  question.x = 350;
  question.y = 40;
  question.collider = 'static';
  
  // True Button
  option1 = new Sprite();
  option1.textSize = 20;
  option1.text = "True"
  option1.x = 250;
  option1.y = 345;
  option1.collider = 'static';
  
  // False Button
  option2 = new Sprite();
  option2.textSize = 20;
  option2.text = "False"
  option2.x = 500;
  option2.y = 345;
  option2.collider = 'static';


  // Player
  player = new Sprite();
  player.x = 800;
  player.text = "player";

  // Enemy
  wizard = new Sprite();
  wizard.x = 2000;
  wizard.text = "Evil Wizard"

  // Flooring
  floor = new Sprite();
  floor.y = 700;
  floor.w = 2120;
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