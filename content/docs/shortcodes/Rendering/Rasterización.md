# Rasterización

### Explicación
Este algoritmo de rasterización utiliza el brillo de cada pixel para asignar el tamaño de cada celda. Esto se asocia mucho a las técnicas de **antialiasing**, esta técnica se trata en que si un pixel se encuentra dentro de cierta area, basado en el brillo de este, se pinta o no el pixel, la técnica consta en que cada vez se van haciendo más y más subparticiones dentro de los pixeles para así dejar una imagen clara y lisa.

La definición de las celdas de la rasterización se puede cambiar moviendo el mouse de horizontalmente. Veamos si sirve...

{{< p5-global-iframe id="breath" width="715" height="725" >}}

let img;

function preload(){
  img = loadImage('https://pbs.twimg.com/profile_images/1317243402396831744/vOz-5Cju_400x400.jpg');
}

function setup() {
  BG = color("#f1f1f1");   
  FG = color("#111111");
  createCanvas(700, 700);
  img.resize(700, 700);
}

function draw() {

  background(BG);
  fill(FG);
  noStroke();
  let ratio = float(height)/float(width);
  let tilesX = map(mouseX, 0, width, 10, 100);
  let tilesY = ratio * tilesX;
  let tileSize = width / tilesX;
  for (let y = 0; y < img.height; y += tileSize) {
    for (let x = 0; x < img.width; x += tileSize) {
      let c = img.get(x, y);
      let b = map(brightness(c), 0, 255, 1, 0);
      push();
      translate(x, y);
      rect(0, 0, b * tileSize, b * tileSize);
      pop();
    }
  }
}
{{< /p5-global-iframe >}}


