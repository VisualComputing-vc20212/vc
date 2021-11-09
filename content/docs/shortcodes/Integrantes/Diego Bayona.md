# Diego Bayona
### Quien soy

Soy estudiante de noveno semestre de Ingenieria de Sistemas y Computacion de la Universidad Naciolnal de Colombia, tengo 21 años, he trabajado como ayudante de desarrollo para proyectos en la universidad y como tutor de programacion, mis lenguajes preferidos son python, javascript, C++ y en cuanto a desarrollo me gusta mas la parte enfocada al frontend en frameworks como React.js y Vue.js

### Que me gusta de la carrera 

De la carrera me gusta el enfoque en proyectos practicos que nos fuerce a demostrar nuestras capacidades y nuestro trabajo en equipo, me gusta la linea de desarrollo y arquitectura de software, cibreseguridad entre otras...

### Hobbys

Jugar videojuegos (principalmente competitivos), ver series, aprender idiomas, aprender cosas nuevas
### Experiencia con graficos

No poseo experiencia mas alla de el desarrollo de interfaces graficas para aplicaciones web


{{< p5-global-iframe id="breath" width="600" height="400" >}}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  //mapping of mouseX variable and putting in the local       variable'k'.
  let k = map(mouseX, 0, width, 200, 0)

  //Circle 1
  noStroke()
  fill('yellow')
  ellipse(160, 200, 50, 50)

  //Circle 1 petals colour
  fill(155, 0, 215, k)

  //upper petals
  ellipse(110, 120, 90, 90)
  ellipse(210, 120, 90, 90)

  //lower petals
  ellipse(110, 280, 90, 90)
  ellipse(210, 280, 90, 90)

  //sides petals
  ellipse(60, 200, 90, 90)
  ellipse(260, 200, 90, 90)

  //Circle 2
  fill('yellow')
  ellipse(450, 200, 50, 50)

  //Circle 2 petals color
  fill(155, 0, 215, k)

  //up and down petals
  ellipse(450, 154, 25, 25)
  ellipse(450, 246, 25, 25)

  // side petals
  ellipse(400, 200, 25, 25)
  ellipse(500, 200, 25, 25)

  //lower middle
  ellipse(415, 235, 25, 25)
  ellipse(485, 235, 25, 25)

  //upper middle
  ellipse(415, 164, 25, 25)
  ellipse(485, 164, 25, 25)

}

{{< /p5-global-iframe >}}