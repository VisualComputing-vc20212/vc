# Alejandra Zambrano
### Quien soy
Tengo 21 años y voy en noveno semestre. Llevo trabajando en desarrollo front-end con asp.net y C# desde hace maso menos un año. Adicional recientemente estoy trabajando como monitora en un diplomado de Python de la universidad.
### En que me gustaría enfocarme
Me apasiona el aprendizaje de maquina, ya he hecho diferentes cursos de coursera relacionados con el tema y me enamore. El siguiente año tendre la oportunidad de hacer una pasantía en USA en una investigación relacionada con procesamiento de imagenes con redes neuronales.
### Hobby
Me encanta el deporte, solía entrenar baloncesto pero me toco dejarlo. Actualmente me gusta mucho ejercitarme sola y disfruto de cantar y bailar.

### Experiencia con graficos
La unica experiencia con gráficos es que en primer semestre hice un juego parecido a Rapid Ball con Processing, pero la verdad ya no me acuerdo mucho del tema. Estoy emocionada de aprender mas del tema.


## The Kanizsa Triangle Illusion
{{< p5-global-iframe id="breath" width="530" height="530" >}}
function setup() {
  createCanvas(400, 400);//create  the canvas
}
function draw() {
  translate(200,200)
  strokeWeight(3)
  stroke(0);
  noFill();
  push()
  rotate(PI/6)
  polygon(0,0,100,3)
  pop()
  noStroke()
  fill(0)
  circle(100*cos(-5*PI/6),100*sin(-5*PI/6),50)
  circle(100*cos(-PI/6),100*sin(-PI/6),50)
  circle(100*cos(3*PI/6),100*sin(3*PI/6),50)
  fill(255);
  push()
  rotate(-PI/6)
  polygon(0,0,100,3)
  pop()
  noLoop()
}
//p5js polygon function from p5js.org
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

{{< /p5-global-iframe >}}

creds: (https://openprocessing.org/sketch/691631)

### Explicacion 
"Esta ilusión hace que el espectador vea un triangulo donde nunca hubo uno. El efecto es causado por contornos ilusorios o del sujeto.

Los psicólogos de la Gestalt usan esta ilusión para describir la ley del cierre, una de las leyes de la Gestalt de la organización perceptiva. Según este principio, los objetos que se agrupan tienden a verse como parte de un todo. Tendemos a ignorar los espacios y percibir las líneas de contorno para que la imagen aparezca como un todo cohesivo."

 creds: (https://www.verywellmind.com/optical-illusions-4020333)

