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
class Scribbler
{
  float prevX =0, prevY=0;
   
  float Theta;
  float Distance;
  
  float ThetaV;
  float DistanceV;

  bool mvTheta = false;

  float anchorX, anchorY;

  float strokeW;
  byte strokeC;

  public Scribbler(float x, float y)
  {
    prevX = x;
    prevY = y;
    anchorX = x;
    anchorY = y;
    randomVelocities();
    Theta = random(TWO_PI);
    strokeW = round(1 + random(3));
    strokeC = round(random(255));
  }
  
  void Update()
  {
    float curX = anchorX + (cos(Theta) * Distance);
    float curY = anchorY + (sin(Theta) * Distance);
    
    pushStyle();
    stroke(0,255,190,70);
    strokeWeight(Distance * strokeW * 0.01);
    line(prevX, prevY, curX, curY);
    popStyle();
    
    prevX = curX;
    prevY = curY;
    
    if(mvTheta)
    {
      Theta += ThetaV;
    }
    else
    {
       Distance += DistanceV;
    }
    
    if(random() > 0.9)
    {
       swapMode();
    }
    
  }
  
  void swapMode()
  {
     mvTheta = !mvTheta;
     randomVelocities();
  }
  
  void randomVelocities()
  {
     ThetaV = -0.05 + random(0.1);
     DistanceV = 0.2 + random();
  }

}

ArrayList<Scribbler> scrblrs = new ArrayList();

void setup()
{
  size(600,600);
  background(0);
  
  for(int i=0; i < 30; i++)
  {
    scrblrs.add(new Scribbler(300,300));
  }
  noSmooth();
}

void draw()
{
  for(Scribbler scrblr : scrblrs)
  	scrblr.Update();
}
{{< /p5-global-iframe >}}