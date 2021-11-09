# Catalina Aldana
### Quien soy
Soy estudiante de noveno semestre de Ingenieria de Sistemas de la Universidad Nacional de Colombia. Tengo 22 años y naci en Bogota, Colombia. 
### En que me gustaria enfocarme
Aun no tengo muy claro en que area de la carrera me gustaria enfocarme, creo que comenzare con desarrollo de software y a medida que vaya ampliando mi conocimiento y experiencia decidire en que area trabajar. 
### Hobby
Me gusta ver series, pasar tiempo con mi perro, salir a caminar y escuchar musica.
### Experiencia con graficos
Tengo una experiencia en graficos muy basica. En primeros semestres hice algunos proyectos pequeños en Processing y juegos sencillos en Java. 

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
      stroke(150); 
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

creds: (https://openprocessing.org/sketch/492096)