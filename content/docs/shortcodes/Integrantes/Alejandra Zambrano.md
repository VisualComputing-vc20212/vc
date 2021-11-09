# Alejandra Zambrano
### Quien soy
Tengo 21 años y voy en noveno semestre. Llevo trabajando en desarrollo front-end con asp.net y C# desde hace maso menos un año. Adicional recientemente estoy trabajando como monitora en un diplomado de Python de la universidad.
### En que me gustaría enfocarme
Me apasiona el aprendizaje de maquina, ya he hecho diferentes cursos de coursera relacionados con el tema y me enamore. El siguiente año tendre la oportunidad de hacer una pasantía en USA en una investigación relacionada con procesamiento de imagenes con redes neuronales.
### Hobby
Me encanta el deporte, solía entrenar baloncesto pero me toco dejarlo. Actualmente me gusta mucho ejercitarme sola y disfruto de cantar y bailar.

### Experiencia con graficos
La unica experiencia con gráficos es que en primer semestre hice un juego parecido a Rapid Ball con Processing, pero la verdad ya no me acuerdo mucho del tema. Estoy emocionada de aprender mas del tema.


## Hermann Grid Illusion
{{< p5-global-iframe id="breath" width="530" height="530" >}}
// Keith O'Hara <kohara@bard.edu>
// Feb 10 2010
// CMSC 117
//
// Hermann grid illusion
// 

void setup()
{
  size(255, 255);
  smooth();
  fill(64);
  noStroke();
}

void draw()
{
  background(196);
  int stepSize = 1 + mouseX;
  for (int x = 0; x < 255; x = x + stepSize)
  {
    for (int y = 0; y < 255; y = y + stepSize )
    {
      float boxsize = stepSize*(mouseY/float(height));
      rect(x, y, boxsize, boxsize);
    }
  }
}

{{< /p5-global-iframe >}}

creds: (https://openprocessing.org/sketch/7561/#)

### Explicacion 
Cuando el espectador mira la cuadrícula, los puntos blancos y el centro de cada "corredor" parecen cambiar entre el blanco y el gris.
Los investigadores como Baumgartner han utilizado tradicionalmente lo que se conoce como inhibición lateral para explicar por qué las personas ven estas áreas grises. Las neuronas que transmiten señales desde el ojo al cerebro, conocidas como "células ganglionares de la retina" le corresponde una pequeña región de la retina llamada campo receptivo, donde los conos y bastones fotorreceptores pueden desencadenar una respuesta eléctrica en esa célula. Los campos receptivos de las células ganglionares adyacentes pueden superponerse.

 Sin embargo, existe evidencia que sugiere que esta explicación probablemente sea inexacta. El hecho de que la ilusión no depende del tamaño, se puede ver con la inversión del contraste y se puede negar distorsionando ligeramente las líneas, se han citado como razones por las que la teoría clásica está equivocada. Una posible explicación que se ha propuesto se conoce como la teoría de la celda simple.

 creds: (https://www.verywellmind.com/optical-illusions-4020333)

