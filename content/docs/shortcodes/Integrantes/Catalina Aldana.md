# Catalina Aldana
### Quien soy
Soy estudiante de noveno semestre de Ingenieria de Sistemas de la Universidad Nacional de Colombia. Tengo 22 años y naci en Bogota, Colombia. 
### En que me gustaria enfocarme
Aun no tengo muy claro en que area de la carrera me gustaria enfocarme, creo que comenzare con desarrollo de software y a medida que vaya ampliando mi conocimiento y experiencia decidire en que area trabajar. PANIIIIIIIIC
### Hobby
Me gusta ver series, pasar tiempo con mi perro, salir a caminar y escuchar musica.
### Experiencia con graficos
Tengo una experiencia en graficos muy basica. En primeros semestres hice algunos proyectos pequeños en Processing y juegos sencillos en Java. 

{{< p5-global-iframe id="breath" width="625" height="625" >}}
float x;
float y;
float w;
　　
void setup(){
  size(600,600);
  background(128);
  
}

void draw(){
  x = random(0,width);
  y = random(0,height);
  w = random(2,20);
  
  noStroke();
  
  if(x < 300 && y < 300){
    //xが300未満だったら
    fill(255,0,0);
    
  }
  if(x>=300 && y < 300){
    //xが以上だったら
    fill(255,255,255);
  }
	if(x<300 && y >= 300){
    //xが300未満だったら
    fill(0,0,255);
    
  }
  if(x>=300 && y>=300){
    //xが以上だったら
    fill(255,255,0);
  }
  ellipse(x, y, w, w);
}
{{< /p5-global-iframe >}}