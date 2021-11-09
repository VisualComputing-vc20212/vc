# Andres Ardila
### Quien soy
Soy estudiante de 9no semestre de Ingeniería de Sistemas de la Universidad Nacional de Colombia. Tengo 23 años y soy de Bogotá, Colombia
### En que me gustaría enfocarme
No lo sé aún, quizas en la rama administrativa de la carrera.
### Hobbies
Me gusta el fútbol y los videojuegos. 
### Experiencia con graficos
En asignaturas pasadas hemos intentado jugar con estilos css y en un pasado con interfaces gráficas de Java.


{{< p5-global-iframe id="breath" width="700" height="800" >}}

function setup()
{
  createCanvas(1300,700);
  noStroke();
  cred=color(255,0,0);
  cblack=color(0,0,0);
  init=7;


}


function draw()
{
if(init==7)
     {
        push();
      
        let offset=[0,40,80,40,0,40,80,40,0,40];
        xc=100;
        yc=150;
        let dx=20;
        background(255);  
        stroke(cblack);
        fill(cblack);
        strokeWeight(10);
        for(let nl=0;nl<8;nl++)
          {
            stroke(cred);
            line(xc,yc+nl*85,xc+1070,yc+nl*85);            
            for(let i=0;i<6;i++)
              {
                noStroke();
                rect(xc+i*180+ offset[nl],yc+nl*85-80,85,78);
              }
          }           
        pop();
      }
}
{{< /p5-global-iframe >}}


Fuente: https://openprocessing.org/sketch/1238842
