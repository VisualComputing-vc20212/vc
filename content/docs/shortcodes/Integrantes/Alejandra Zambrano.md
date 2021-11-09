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
// Read about Illusory contours and the Kanizsa's Triangle on Wikipedia
// https://en.wikipedia.org/wiki/Illusory_contours

// Create an array to hold three points  
PVector[] pv = new PVector[3]; 

void setup() {
  size(800, 800);
  background(255);
  rectMode(CENTER);
  smooth();
  noLoop();
}
void draw() {
  // Set our points
  pv[0] = new PVector(120, 190);
  pv[1] = new PVector(685, 190);
  pv[2] = new PVector(400, 685);
  
  // Create a circle at each point around the triangle
  strokeWeight(2);  
  stroke(0,0,0);
  fill(0);
  for(int i = 0; i <= 2; i++)
  {
    // ellipse(x, y, width, height)  
    ellipse(pv[i].x, pv[i].y, 200, 200); 
  } 
  
  // Draw a triangle outline
  strokeWeight(8);  
  stroke(0,0,0);
  fill(255);  
  triangle(400, 20, 685, 530, 110, 530);

  // Draw a white triangle which cuts out the other shapes
  strokeWeight(0);
  stroke(255,255,255);
  fill(255);   
  // Initial point of a triangle is rounded by default?
  strokeJoin(MITER);
  triangle(120, 190, 685, 190, 400, 685);
}  

{{< /p5-global-iframe >}}

creds: (https://openprocessing.org/sketch/691631)

### Explicacion 
"Esta ilusión hace que el espectador vea un triangulo donde nunca hubo uno. El efecto es causado por contornos ilusorios o del sujeto.

Los psicólogos de la Gestalt usan esta ilusión para describir la ley del cierre, una de las leyes de la Gestalt de la organización perceptiva. Según este principio, los objetos que se agrupan tienden a verse como parte de un todo. Tendemos a ignorar los espacios y percibir las líneas de contorno para que la imagen aparezca como un todo cohesivo."

 creds: (https://www.verywellmind.com/optical-illusions-4020333)

