# Diego Bayona
### Quien soy

Soy estudiante de noveno semestre de Ingenieria de Sistemas y Computacion de la Universidad Naciolnal de Colombia, tengo 21 años, he trabajado como ayudante de desarrollo para proyectos en la universidad y como tutor de programacion, mis lenguajes preferidos son python, javascript, C++ y en cuanto a desarrollo me gusta mas la parte enfocada al frontend en frameworks como React.js y Vue.js

### Que me gusta de la carrera 

De la carrera me gusta el enfoque en proyectos practicos que nos fuerce a demostrar nuestras capacidades y nuestro trabajo en equipo, me gusta la linea de desarrollo y arquitectura de software, cibreseguridad entre otras...

### Hobbys

Jugar videojuegos (principalmente competitivos), ver series, aprender idiomas, aprender cosas nuevas
### Experiencia con graficos

No poseo experiencia mas alla de el desarrollo de interfaces graficas para aplicaciones web


{{< p5-global-iframe id="breath" width="625" height="625" >}}
var circle = 200;
var rot;
var col;
var freq = 0.000005; 
var cont = 0;
var r;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  translate(300, 300);
  rotate(radians(rot));

 ellipseMode(RADIUS);
  for (var i=0; i<500; i ++) {
    circle= 200 + 50*sin(millis()*freq*i);
    col=map(circle,150,250,255,60);
    r=map(circle,150,250,5,2);
    fill(col,0,74);
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r,r);    
    rot=rot+0.00005;
  }
}
{{< /p5-global-iframe >}}