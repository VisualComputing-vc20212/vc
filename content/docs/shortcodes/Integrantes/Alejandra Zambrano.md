# Alejandra Zambrano
### Quien soy
Tengo 21 años y voy en noveno semestre. Llevo trabajando en desarrollo front-end con asp.net y C# desde hace maso menos un año. Adicional recientemente estoy trabajando como monitora en un diplomado de Python de la universidad.
### En que me gustaría enfocarme
Me apasiona el aprendizaje de maquina, ya he hecho diferentes cursos de coursera relacionados con el tema y me enamore. El siguiente año tendre la oportunidad de hacer una pasantía en USA en una investigación relacionada con procesamiento de imagenes con redes neuronales.
### Hobby
Me encanta el deporte, solía entrenar baloncesto pero me toco dejarlo. Actualmente me gusta mucho ejercitarme sola y disfruto de cantar y bailar.

### Experiencia con graficos
La unica experiencia con gráficos es que en primer semestre hice un juego parecido a Rapid Ball con Processing, pero la verdad ya no me acuerdo mucho del tema. Estoy emocionada de aprender mas del tema.

{{< p5-global-iframe id="breath" width="530" height="530" >}}
var constellation = [];
var n;
var d;
var a;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1); // Set 1 because it's too slow on firefox
  //pixelDensity(displayDensity());
  n = 200;

  for (var i = 0; i <= n; i++) {
    constellation.push(new star());
  }
  strokeWeight(.75);
	a=random(100,255)
  stroke(a,255,255);
}

function	mousePressed(){
	a=random(10,255)
  stroke(a,255,255);
	}

function draw() {

  background('#000000');

  for (var i = 0; i < constellation.length; i++) {
    constellation[i].update();
    for (var j = 0; j < constellation.length; j++) {
      if (i > j) { // "if (i > j)" => to check one time distance between two stars
        d = constellation[i].loc.dist(constellation[j].loc); // Distance between two stars
        if (d <= width / 10) { // if d is less than width/10 px, we draw a line between the two stars
          line(constellation[i].loc.x, constellation[i].loc.y, constellation[j].loc.x, constellation[j].loc.y)
        }
      }
    }
  }

}

function star() {

  this.a = random(5 * TAU); // "5*TAU" => render will be more homogeneous
  this.r = random(width * .2, width * .25); // first position will looks like a donut
  this.loc = createVector(width / 2 + sin(this.a) * this.r, height / 2 + cos(this.a) * this.r);
  this.speed = createVector();
  this.speed = p5.Vector.random2D();
  //this.speed.random2D();
  this.bam = createVector();
  this.m;


  this.update = function() {
      this.bam = p5.Vector.random2D(); // movement of star will be a bit erractic
      //this.bam.random2D();
      this.bam.mult(0.45);
      this.speed.add(this.bam);
      // speed is done according distance between loc and the mouse :
      this.m = constrain(map(dist(this.loc.x, this.loc.y, mouseX, mouseY), 0, width, 8, .05), .05, 8); // constrain => avoid returning "not a number"
      this.speed.normalize().mult(this.m);

      // No colision detection, instead loc is out of bound
      // it reappears on the opposite side :
      if (dist(this.loc.x, this.loc.y, width / 2, height / 2) > (width / 2) * 0.98) {
        if (this.loc.x < width / 2) {
          this.loc.x = width - this.loc.x - 4; // "-4" => avoid blinking stuff
        } else if (this.loc.x > width / 2) {
          this.loc.x = width - this.loc.x + 4; // "+4"  => avoid blinking stuff
        }
        if (this.loc.y < height / 2) {
          this.loc.y = width - this.loc.y - 4;
        } else if (this.loc.x > height / 2) {
          this.loc.y = width - this.loc.y + 4;
        }
      }
      this.loc = this.loc.add(this.speed);
    } // End of update()
} // End of class
{{< /p5-global-iframe >}}

creds: (https://openprocessing.org/sketch/766691)