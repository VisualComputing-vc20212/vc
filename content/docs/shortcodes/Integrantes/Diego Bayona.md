# Diego Bayona
### Quien soy

Soy estudiante de noveno semestre de Ingenieria de Sistemas y Computacion de la Universidad Naciolnal de Colombia, tengo 21 años, he trabajado como ayudante de desarrollo para proyectos en la universidad y como tutor de programacion, mis lenguajes preferidos son python, javascript, C++ y en cuanto a desarrollo me gusta mas la parte enfocada al frontend en frameworks como React.js y Vue.js

### Que me gusta de la carrera 

De la carrera me gusta el enfoque en proyectos practicos que nos fuerce a demostrar nuestras capacidades y nuestro trabajo en equipo, me gusta la linea de desarrollo y arquitectura de software, cibreseguridad entre otras...

### Hobbys

Jugar videojuegos (principalmente competitivos), ver series, aprender idiomas, aprender cosas nuevas
### Experiencia con graficos

No poseo experiencia mas alla de el desarrollo de interfaces graficas para aplicaciones web


{{< p5-global-iframe id="breath" width="500" height="500" >}}

function draw() {
  background(0);
  for (let i = 50; i < height; i += 50) {
    for (let j = 50; j < width; j += 50) { 
      stroke(150)
      strokeWeight(10)
      line(0, i, width, i)
      line(j, 0, j, height)
    }
 }

  for (let i = 50; i < width; i += 50) {
    for (let j = 50; j < height; j += 50) {
      noStroke()
      fill(255)
      ellipse(i, j, 18, 18)
    }
  }
}

{{< /p5-global-iframe >}}