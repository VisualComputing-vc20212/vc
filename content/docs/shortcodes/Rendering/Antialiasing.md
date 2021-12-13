# Antialiasing
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

### Ilusión de la pared de la cafetería
La ilusión de la pared de la cafetería es un tipo de ilusión óptico-geométrica, en la que líneas rectas paralelas  que dividien líneas entre filas formadas por baldosas blancas y negras alternas y escalonadas, aparentan estar inclinadas.

En la construcción de la ilusión óptica, a menudo cada "baldosa" está rodeado por una capa de "mortero" de un tono intermedio entre los colores oscuros y claros.

En el primer intento de su deconstrucción, la ilusión fue atribuida en gran parte al fenómeno de la irradiación, y a la dispersión de la luz entre zonas oscuras y zonas brillantes en la imagen retinal. El efecto desaparece cuando el blanco y el negro son reemplazados por colores diferentes, pero del mismo brillo.​ Pero un componente residual de la ilusión permanece incluso cuando se eliminan los factores óptico y retinal. Las polaridades de contraste parecen ser el factor que determina el aspecto inclinado de las líneas horizontales.

Tomado de: https://es.wikipedia.org/wiki/Ilusi%C3%B3n_de_la_pared_de_la_cafeter%C3%ADa