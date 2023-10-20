let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

let xRaquete = 10;
let yRaquete = 200;
let xRaqueteInimigo = 580;
let yRaqueteInimigo = 200;
let larguraRaquete = 10;
let alturaRaquete = 80;
let velocidadeRaquete = 5;

let colisao = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  criarBolinha();
  movimentaBolinha();
  encostaNaBorda();
  criaRaquete(xRaquete, yRaquete);
  criaRaquete(xRaqueteInimigo, yRaqueteInimigo)
  movimentaMinhaRaquete();
  colideRaqueteBolinha();
}

function criarBolinha () {
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha (){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function encostaNaBorda (){
  if(xBolinha + raio > width || xBolinha - raio < 0) {
     velocidadeXBolinha *= -1
     }
  if(yBolinha + raio > height || yBolinha -raio < 0){
    velocidadeYBolinha *= -1
  }
}

function criaRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete)
  
}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= velocidadeRaquete
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += velocidadeRaquete
  }
  
}

function colideRaqueteBolinha() {
  colisao = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXBolinha *= -1;
  }
}




