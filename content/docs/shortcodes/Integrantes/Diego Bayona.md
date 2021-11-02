# Diego Bayona
### Quienes somos
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis leo enim. Phasellus hendrerit non eros at aliquam. Pellentesque eget leo cursus, pretium neque quis, suscipit metus. Maecenas bibendum est faucibus scelerisque vestibulum. Donec vitae lacus tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel nunc quam. Proin blandit turpis ac consectetur viverra. Donec efficitur sapien sed efficitur tincidunt.
### Que nos gusta de la carrera 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis leo enim. Phasellus hendrerit non eros at aliquam. Pellentesque eget leo cursus, pretium neque quis, suscipit metus. Maecenas bibendum est faucibus scelerisque vestibulum. Donec vitae lacus tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel nunc quam. Proin blandit turpis ac consectetur viverra. Donec efficitur sapien sed efficitur tincidunt.
### Hobby
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis leo enim. Phasellus hendrerit non eros at aliquam. Pellentesque eget leo cursus, pretium neque quis, suscipit metus. Maecenas bibendum est faucibus scelerisque vestibulum. Donec vitae lacus tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel nunc quam. Proin blandit turpis ac consectetur viverra. Donec efficitur sapien sed efficitur tincidunt.
### Experiencia con graficos
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis leo enim. Phasellus hendrerit non eros at aliquam. Pellentesque eget leo cursus, pretium neque quis, suscipit metus. Maecenas bibendum est faucibus scelerisque vestibulum. Donec vitae lacus tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel nunc quam. Proin blandit turpis ac consectetur viverra. Donec efficitur sapien sed efficitur tincidunt.

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