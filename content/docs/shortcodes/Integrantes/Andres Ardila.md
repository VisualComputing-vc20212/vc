# Andres Ardila
### Quien soy
Soy estudiante de 9no semestre de Ingeniería de Sistemas de la Universidad Nacional de Colombia. Tengo 23 años y soy de Bogotá, Colombia
### En que me gustaría enfocarme
No lo sé aún, quizas en la rama administrativa de la carrera.
### Hobbies
Me gusta el fútbol y los videojuegos. 
### Experiencia con graficos
En asignaturas pasadas hemos intentado jugar con estilos css y en un pasado con interfaces gráficas de Java.


{{< p5-global-iframe id="breath" width="625" height="625" >}}
 var x;
var y;
var nx;
var ny;
 
var col;
var a;
var b;
var c;

function setup(){
  createCanvas(600,600);
  background(0);
 blendMode(ADD);
}

function draw(){
  x = random(0,width);
  y = random(0,height);
  
  nx = random(0,width);
  ny = random(0,height);
  a= random(0,255);
  b= random(0,255);
	c= random(0,255);
  col = color(a,b,c,50);
  
  noFill();
  stroke(col);
  
  line(x,y,nx,ny);
  
  
}
{{< /p5-global-iframe >}}


Fuente: https://openprocessing.org/user/190726?view=sketches
