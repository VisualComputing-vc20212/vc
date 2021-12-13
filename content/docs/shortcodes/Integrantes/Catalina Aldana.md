# Catalina Aldana
### Quien soy
Soy estudiante de noveno semestre de Ingenieria de Sistemas de la Universidad Nacional de Colombia. Tengo 22 años y naci en Bogota, Colombia. 
### En que me gustaria enfocarme
Aun no tengo muy claro en que area de la carrera me gustaria enfocarme, creo que comenzare con desarrollo de software y a medida que vaya ampliando mi conocimiento y experiencia decidire en que area trabajar. 
### Hobby
Me gusta ver series, pasar tiempo con mi perro, salir a caminar y escuchar musica.
### Experiencia con graficos
Tengo una experiencia en graficos muy basica. En primeros semestres hice algunos proyectos pequeños en Processing y juegos sencillos en Java. 

## Hermann Grid Ilussion
{{< p5-global-iframe id="breath" width="625" height="625" >}}
function setup() {
  createCanvas(625, 625);
}

function draw() {
  background(0);
  if (mouseX < 313) {
    HermmanGrid()  // Left
  }
  else {
    SGridIlussion() // Right
  }
}


function HermmanGrid(){
  for(let i=50; i < height; i += 50){
    for(let j=50; j < width; j += 50){
      stroke(255); 
      strokeWeight(10);
      line(0,i,width,i); 
      line(j,0,j,height);
    }
  }
}

function SGridIlussion(){
  for(let i=50; i < height; i += 50){
    for(let j=50; j < width; j += 50){
      stroke(150);
      strokeWeight(10);
      line(0,i,width,i); 
      line(j,0,j,height);
    }
  }
  
  for(let i=50; i < height; i += 50){
    for(let j=50; j < width; j += 50){
      noStroke();
      fill(255);
      ellipse(i,j,15,15);
    }
  }
}
{{< /p5-global-iframe >}}

### Explicacion

Cuando el espectador mira la cuadrícula, los puntos blancos y el centro de cada “corredor” parecen cambiar entre el blanco y el gris. 
Los investigadores como Baumgartner han utilizado tradicionalmente lo que se conoce como inhibición lateral para explicar por qué las 
personas ven estas áreas grises. Las neuronas que transmiten señales desde el ojo al cerebro, conocidas como “células ganglionares de la retina” 
le corresponde una pequeña región de la retina llamada campo receptivo, donde los conos y bastones fotorreceptores pueden desencadenar una respuesta 
eléctrica en esa célula. Los campos receptivos de las células ganglionares adyacentes pueden superponerse.

Sin embargo, existe evidencia que sugiere que esta explicación probablemente sea inexacta. El hecho de que la ilusión no depende del tamaño, 
se puede ver con la inversión del contraste y se puede negar distorsionando ligeramente las líneas, se han citado como razones por las que la 
teoría clásica está equivocada. Una posible explicación que se ha propuesto se conoce como la teoría de la celda simple.