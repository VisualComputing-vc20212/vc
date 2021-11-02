# Lucas Peña
### Quienes somos
Soy Lucas Peña tengo 22 años y soy estudiante de noveno semestre de Ingenieria de Sistemas en la Universida Nacional de Colombia. Actualmente trabajo como desarrollador de software en una empresa enfocada a las telecomunicaciones, desarrollo principalmente en C#.
### En que me gustaría enfocarme
Aunque actualmente soy desarrollador de software, no creo que sea el área donde quiera enfocarme. Siempre he tenido un fuerte interes por los videojuegos, así que esa podría ser el área en la que me gustaría enfocarme.
### Hobby
Mis hobbies son jugar videojuegos, hacer caminatas, escuchar música y jugar volleyball.
### Experiencia con graficos
No cuento con mucha experiencia en gráficos. En primer semestre programé un juego sencillo en Processing y en segundo semestre un juego más complejo en Java.

{{< p5-global-iframe id="breath" width="625" height="625" >}}
  let angle = 0;
  let speed = 0.06;

  function setup() {
    createCanvas(600, 600);
  }

  function draw() {
    background(255, 255, 255);
    rotateSquare();
    if (!mouseIsPressed) {
      strokeWeight(0);
      stroke(0);
      fill(255, 140, 0);
      rect(0, 0, 281, 281);
      rect(318, 0, 281, 281);
      rect(0, 318, 281, 281);
      rect(318, 318, 281, 281);
    }
  }

  function rotateSquare() {
    push();
    angle += speed;
    strokeWeight(0);
    stroke(0);
    fill(0, 0, 255);
    translate(width / 2, height / 2);
    rotate(angle);
    rect(-187.5, -187.5, 375, 375);
    pop();
  }
{{< /p5-global-iframe >}}