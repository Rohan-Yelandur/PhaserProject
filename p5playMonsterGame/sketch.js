let player, floor, wizard;
let wizimg;
let question;

let tButton, fButton;
let qNum = 1;

let hp = 50;
let moving = 0.5;
let vel = -.9;

// questions (Sorce : https://quizlet.com/267925498/computer-science-truefalse-flash-cards/)
let questions = [
  { text: "A compiler transfers your text format into a binary ", answer: true },
  { text: "Input Is Data that has been processed by the CPU into a useful format that humans can understand ", answer: false },

  { text: "The CPU is responsible for executing instructions for the computer ", answer: true },
  { text: " One benefit to the use of symbolic languages is improved programming efficiency compared to a machine language ", answer: true },
  { text: " Writing code is the first step in the waterfall model of developing software ", answer: false }, // planning

];

function preload() {
  wizimg = loadImage('assets/monsterThing.png');
}

function setup() {
  new Canvas(' 2:1');
  //TODO add make sprites change size based off of window size
  world.gravity.y = 10;
  
  // True Option
  tButton = createButton("True");
  tButton.position(300, 170);

  // False Option
  fButton = createButton("False");
  fButton.position(450, 170);

  // Questions
  question = new Sprite();

  question.textSize = 14;
  question.text = questions[qNum].text;
  question.x = 400;
  question.y = 40;
  question.image = 'assets.png';
  question.collider = 'static';

  // Flooring
  floor = new Sprite();
  floor.y = 300;
  floor.w = 3000;
  floor.h = 200;
  floor.color = "lightgreen";
  strokeWeight(4);
  floor.stroke = "darkgreen";
  floor.collider = 'static';

   // Player
   player = new Sprite();
   player.width = 50;
   player.height = 50;
   player.x = 50;
   player.image = 'assets/Player1.png';

 
   // Enemy
   wizard = new Sprite();
   wizard.width = 50;
   wizard.height = 50;
   wizard.x = 700;
   wizard.image = wizimg;
 
  // turns red or green when wrong or right
  check = new Sprite();
  check.x = 400;
  check.y = 300;
  check.collider = 'static';
  check.text = "N/a";


  // buttons
  tButton.mousePressed(trueButton);
  fButton.mousePressed(falseButton);
}

function draw() {
  background("lightblue");

  wizard.velocity.x = vel;
  wizard.speed = moving
  // to do: remove all hard sets ()

  if (qNum > questions.length) {
    moving = 0;
    vel = 0;
  }

  // Losing
  if (player.collides(wizard)) {
    moving = 0;
    vel = 0;
    question.text = "You Lost!";
    qNum = 0;
    wizard.x = 700;
  }

  // Winning
  if (hp == 0) {
    moving = 0;
    vel = 0;
    question.text = "You Won!";
    qNum = 0;
    wizard.x = 700;
  }
}



// Correct
function correct() {
  wizard.image = 'assets/monsterDamage.png';
  check.color = 'green';
  check.text = "Correct!";
  hp -= 10;
  nextQuestion();
}

// Wrong
function wrong() {
  wizard.image = 'assets/monsterThing.png';
  check.color = 'red';
  check.text = "Incorect!"
  moving += 0.5;
  console.log(wizard.speed.x )
  nextQuestion();
}

// Moves to the next question
function nextQuestion() {
  qNum = (qNum + 1) % questions.length;
 
  question.text = questions[qNum].text;

}

// True button
function trueButton() {
  if (qNum <= questions.length) {
    if (questions[qNum].answer) {
      correct();
    } else {
      wrong();
    }
  }
}

// False button
function falseButton() {
  if (qNum <= questions.length) {
    if (!questions[qNum].answer) {
      correct();
    } else {
      wrong();
    }
  }
}
