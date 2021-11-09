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
let angle = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //First
  fill(255, 0, 0)
  stroke(255,255,0)
  strokeWeight(2)

  push()
  translate(50, 150)
  rotate(HALF_PI + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(150, 150)
  rotate(HALF_PI * 2 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(150, 250)
  rotate(HALF_PI * 3 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(50, 250)
  rotate(HALF_PI * 4 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()


  //Second
  fill(0,163,0)
  stroke(255,255,0)
  strokeWeight(2)

  push()
  strokeWeight(2)
  translate(250, 150)
  rotate(HALF_PI * 3 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(350, 150)
  rotate(HALF_PI * 4 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(250, 250)
  rotate(HALF_PI * 2 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(350, 250)
  rotate(HALF_PI - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()


  angle += 0.003
}

{{< /p5-global-iframe >}}

creds: (https://fractalkitty.com/2021/07/22/coded-optical-illusions/)

### Explicacion 
"Esta ilusión hace que el espectador vea un triangulo donde nunca hubo uno. El efecto es causado por contornos ilusorios o del sujeto.

Los psicólogos de la Gestalt usan esta ilusión para describir la ley del cierre, una de las leyes de la Gestalt de la organización perceptiva. Según este principio, los objetos que se agrupan tienden a verse como parte de un todo. Tendemos a ignorar los espacios y percibir las líneas de contorno para que la imagen aparezca como un todo cohesivo."

 creds: (https://www.verywellmind.com/optical-illusions-4020333)

