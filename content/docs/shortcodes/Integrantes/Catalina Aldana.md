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
var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];

/////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(64, 255, 255, 192);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
	background(32);
	
	for (var particleA = 0; particleA < mass.length; particleA++) {
		var accelerationX = 0, accelerationY = 0;
		
		for (var particleB = 0; particleB < mass.length; particleB++) {
			if (particleA != particleB) {
				var distanceX = positionX[particleB] - positionX[particleA];
				var distanceY = positionY[particleB] - positionY[particleA];

				var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
				if (distance < 1) distance = 1;

				var force = (distance - 320) * mass[particleB] / distance;
				accelerationX += force * distanceX;
				accelerationY += force * distanceY;
			}
		}
		
		velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
		velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
	}
	
	for (var particle = 0; particle < mass.length; particle++) {
		positionX[particle] += velocityX[particle];
		positionY[particle] += velocityY[particle];
		
		ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function addNewParticle() {
	mass.push(random(0.003, 0.03));
	positionX.push(mouseX);
	positionY.push(mouseY);
	velocityX.push(0);
	velocityY.push(0);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseClicked() {
	addNewParticle();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function mouseDragged() {
	addNewParticle();
}
{{< /p5-global-iframe >}}