
//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;



//variaveis
var motor;
var world;

var solo, parado;

var helice;
var botao;
var fan1;
function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    parado = {
      isStatic:true,
    }

    solo = Bodies.rectangle(300,390,600,30, parado);
    World.add(mundo, solo);

    mexendo = {
      isStatic:false
    }

    bola = Bodies.circle(300,300, 30, mexendo);
    World.add(mundo, bola);

  
    //cria a helice
    helice = Bodies.rectangle(100,200,100,20,parado);
    World.add(mundo,helice);

    //é aqui que coloca a imagem
    botao = createImg("cima.jpg");
    botao.size(50, 50);
    botao.position(500,50);
    botao.mouseClicked(vForce);
    fan1 = new Box(40,300,30,50);

    ellipseMode(RADIUS)
    rectMode(CENTER);
}

var angulo = 0;
function draw() {
  background("cyan");
    
  //atualizar o motor
  Engine.update(motor);
  //faz o solo
  fill('brown');
  rect(solo.position.x, solo.position.y, 600, 30);

  //é aqui que faz a helice girar
  push ();
  translate(helice.position.x, helice.position.y);
  rotate(angulo);
  fill("white");
  rect(0, 0, 100, 20);
  pop ();
  //aumenta o valor do ângulo
  angulo+=0.1;

  //faz a bolinha
  fill("blue");
  ellipse(bola.position.x, bola.position.y, 30);
  fan1.show();
}

//é aqui que adiciona a função para aplicar força na bola
function vForce(){
  Body.applyForce(bola, {x:0, y:0}, {x:0, y:-0.1});
}