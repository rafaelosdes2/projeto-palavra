let palavra;

function setup() {
  createCanvas(400, 400);
  palavra =palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["Beleza", "Bonito", "lindeza" , "Beldade"]
  return random(palavras);
}

function inicializaCores(){
  background("pink");
  fill("red")
  textSize(64);
  textAlign(CENTER, CENTER);
  
}

function palavraParcial(minimo, maximo){
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length); 
   let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
  /*if (mouseX < 50){
  let palavra = "e";
  text(palavra,200, 200);
  } else if(mouseX < 100){
    let palavra = "es";
    text (palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "esc";
    text (palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "escr";
    text (palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "escru";
    text (palavra, 200, 200);
  } else if(mouseX < 300){
    let palavra = "escrup";
    text (palavra, 200, 200);
  } else if(mouseX < 350){
    let palavra = "escrupo";
    text (palavra, 200, 200);
  } else if(mouseX < 400){
    let palavra = "escrupol";
    text (palavra, 200, 200);
  } else if(mouseX < 450){
    let palavra = "escrúpolo";
    text (palavra, 200, 200);
  } */
  
}