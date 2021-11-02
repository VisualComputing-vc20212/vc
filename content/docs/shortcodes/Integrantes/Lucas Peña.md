# Lucas Peña
### Quienes somos
Soy Lucas Peña tengo 22 años y soy estudiante de noveno semestre de Ingenieria de Sistemas en la Universida Nacional de Colombia. Actualmente trabajo como desarrollador de software en una empresa enfocada a las telecomunicaciones, desarrollo principalmente en C#.
### En que me gustaría enfocarme
Aunque actualmente soy desarrollador de software, no creo que sea el área donde quiera enfocarme. Siempre he tenido un fuerte interes por los videojuegos, así que esa podría ser el área en la que me gustaría enfocarme.
### Hobby
Mis hobbies son jugar videojuegos, hacer caminatas, escuchar música y jugar volleyball.
### Experiencia con graficos
No cuento con mucha experiencia en gráficos. En primer semestre programé un juego sencillo en Processing y en segundo semestre un juego más complejo en Java.

{{< p5-global-iframe id="breath" width="650" height="650" >}}
  // PBa
// 2021-06-17
// Optical Illusio
// Ideas from https://mathworld.wolfram.com/Illusion.html
// Ideas from https:/michaelbach.de/ot/

function setup()
{
  createCanvas(625,625);
  noStroke();
  cred=color(255,0,0);
  cgreen=color(0,255,0);
  cblue=color(0,0,255);
  clblue=color(200,200,240);
  cbackg=color(200,200,255);
  cyellow=color(254,255,23);
  corange=color(234,214,28);
  cwhite=color(255,255,255);
  cgrey=color(74,74,74);
  cblack=color(0,0,0);
  init=0;
}

function draw()
{  
   if(init==0)
     {
       push();
        xc=0;
        yc=0;
        let dx=68;
        background(255);
        fill(cyellow);
        stroke(cblack);
        rect(1000,100,150,40,4,4);
        fill(cblack);
        stroke(cblack);       
        strokeWeight(1);
            for(let nl=0;nl<10;nl++)
            {
              for(let nc=0;nc<10;nc++)
                {
                  if(nc%2 +nl%2 ==1)
                  {
                    fill(cwhite);
                  }
                else
                  {
                    fill(cblack);
                  }
                rect(xc+nc*dx,yc+nl*dx,70,70);
                if(nc%2 +nl%2 ==1)
                  {
                    fill(cblack);
                  }
                else
                  {
                    fill(cwhite);
                  }
                if(nc<5 & nl<4)
                   {
                     circle(xc+nc*dx+57,yc+nl*dx+13,19);
                     circle(xc+nc*dx+13,yc+nl*dx+57,19);
                   }
                 if(nc>5 & nl<4)
                   {
                     circle(xc+nc*dx+13,yc+nl*dx+13,19);
                     circle(xc+nc*dx+57,yc+nl*dx+57,19);
                   }      
                 if(nl==4 & nc<5)
                   {
                     circle(xc+nc*dx+57,yc+nl*dx+13,19);
                     circle(xc+nc*dx+57,yc+nl*dx+57,19);
                   }
                 if(nl==4 & nc>5)
                   {
                     circle(xc+nc*dx+13,yc+nl*dx+13,19);
                     circle(xc+nc*dx+13,yc+nl*dx+57,19);
                   }
                 if(nc<5 & nl>4)
                   {
                     circle(xc+nc*dx+13,yc+nl*dx+13,19);
                     circle(xc+nc*dx+57,yc+nl*dx+57,19);
                   }
                 if(nc>5 & nl>4)
                   {
                     circle(xc+nc*dx+57,yc+nl*dx+13,19);
                     circle(xc+nc*dx+13,yc+nl*dx+57,19);
                   }
                 if(nc==5 & nl<5)
                   {
                    circle(xc+nc*dx+13,yc+nl*dx+57,19);
                    circle(xc+nc*dx+57,yc+nl*dx+57,19);
                   }
                 if(nc==5 & nl>5)
                   {
                    circle(xc+nc*dx+13,yc+nl*dx+13,19);
                    circle(xc+nc*dx+57,yc+nl*dx+13,19);
                   }
                }    //end nc
            }
       pop();
     
      }
}   

  
{{< /p5-global-iframe >}}