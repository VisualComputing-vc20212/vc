# Alejandra Zambrano
### Quien soy
Tengo 21 años y voy en noveno semestre. Llevo trabajando en desarrollo front-end con asp.net y C# desde hace maso menos un año. Adicional recientemente estoy trabajando como monitora en un diplomado de Python de la universidad.
### En que me gustaría enfocarme
Me apasiona el aprendizaje de maquina, ya he hecho diferentes cursos de coursera relacionados con el tema y me enamore. El siguiente año tendre la oportunidad de hacer una pasantía en USA en una investigación relacionada con procesamiento de imagenes con redes neuronales.
### Hobby
Me encanta el deporte, solía entrenar baloncesto pero me toco dejarlo. Actualmente me gusta mucho ejercitarme sola y disfruto de cantar y bailar.

### Experiencia con graficos
La unica experiencia con gráficos es que en primer semestre hice un juego parecido a Rapid Ball con Processing, pero la verdad ya no me acuerdo mucho del tema. Estoy emocionada de aprender mas del tema.

{{< p5-global-iframe id="breath" width="625" height="625" >}}
float angle;
float radius = 600;
float change = 0;
float speed = 1;
void setup(){
  size(750, 750);
  background(128);
  fill(0);
}
void draw(){
  angle+= speed * (PI / 102);
  radius=radius / (1 + .001 * speed);
  change+= 1;
  noStroke();
  fill(0, 200, 0);
  translate(375, 375);
  rotate(angle);
    if (change%8 == 0){
    fill(255);
  }else if (change%8 == 4){
    fill(0);
  }else if (change%8 == 1){
    fill(210, 210, 0);
  }else if (change%8 == 5){
    fill(50, 50, 255);
  }else{
    noFill();
  }
  ellipse(radius, 0,radius / 5, radius / 3);
}
void keyPressed(){
  if (key == 's'){
    speed++;
    restart();
  }
  if (key == 'd'){
    speed--;
    restart();
  }
}
void restart(){
  background(128);
  angle = 0;
  radius = 600;
}
{{< /p5-global-iframe >}}