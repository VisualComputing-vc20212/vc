# Alejandra Zambrano
### Quien soy
Tengo 21 años y voy en noveno semestre. Llevo trabajando en desarrollo front-end con asp.net y C# desde hace maso menos un año. Adicional recientemente estoy trabajando como monitora en un diplomado de Python de la universidad.
### En que me gustaría enfocarme
Me apasiona el aprendizaje de maquina, ya he hecho diferentes cursos de coursera relacionados con el tema y me enamore. El siguiente año tendre la oportunidad de hacer una pasantía en USA en una investigación relacionada con procesamiento de imagenes con redes neuronales.
### Hobby
Me encanta el deporte, solía entrenar baloncesto pero me toco dejarlo. Actualmente me gusta mucho ejercitarme sola y disfruto de cantar y bailar.

### Experiencia con graficos
La unica experiencia con gráficos es que en primer semestre hice un juego parecido a Rapid Ball con Processing, pero la verdad ya no me acuerdo mucho del tema. Estoy emocionada de aprender mas del tema.


## Dynamic Kanizsa Illusion
{{< p5-global-iframe id="breath" width="450" height="450" >}}
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

creds: (https://naziafakhruddin.medium.com/creating-illusions-in-p5-js-dynamic-kanizsa-illusion-part-4-af9fe72c5ec7)

### Explicacion

Con esta ilusion el psicologo italiano Kanizsa nos muestra un ejemplo de terminacion modal de contornos. La terminacion modal se da cuando se perciben ciertos bordes creados por un limite de luminancia, color o textura cuando no existe tal limite. A esto tambien se le ha llamado "Law of clousure" según este principio los objetos que se agrupan tienden a verse como parte de un todo. Tendemos a ignorar los espacios y percibir las líneas de contorno para formar figuras y formas familiares para nosotros.

Visto de una manera mas neurocientifica "los grupos de células neuronales ven roturas en las líneas o formas, y si no se les da más información, asumirán que hay una figura delante de las líneas. Los científicos creen que esto sucede porque el cerebro ha sido entrenado para ver la ruptura de las líneas como un objeto que podría representar una amenaza potencial. Con la falta de información adicional, el cerebro yerra por el lado de la seguridad y percibe el espacio como un objeto. El círculo es el objeto más simple y simétrico, por lo que la mente generalmente ve un círculo a menos que se haga un esfuerzo activo para ver una forma alternativa. [1]"



[1]"The Grid illusion of Spot 06" The Visual Perception Lab. Retrieved December 4, 2007.


 creds: (https://www.illusionsindex.org/i/kanizsa-triangle)

