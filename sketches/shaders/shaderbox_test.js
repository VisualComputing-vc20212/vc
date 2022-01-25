var vert = `

//standard vertex shader
		#ifdef GL_ES
      precision highp float;
    #endif
		#extension GL_OES_standard_derivatives : enable

    // attributes, in
    attribute vec3 aPosition;
    attribute vec3 aNormal;

    // attributes, out
    varying vec3 var_vertPos;
    varying vec3 var_vertNormal;
    
    // matrices
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    uniform mat3 uNormalMatrix;

    void main() {
      vec3 pos = aPosition;  
      gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(pos, 1.0);

      // set out value
      var_vertPos      = pos;
      var_vertNormal   =  aNormal;
    }
`;


var frag = `

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
#define PI 3.14159265359

//attributes, in
varying vec3 var_vertPos;
varying vec2 var_vertTexCoord;
varying vec3 var_vertNormal;

vec3 lightDir = vec3(1,2,-3);

float gridGra(in vec2 uv , float gridNum){
    float scale = gridNum;
    uv *= scale;
    uv = fract(uv);
    float o = abs(uv.y + -0.5)*2.;
		o *= abs(uv.x + -0.5)*0.;
    return o;
}



void main(){
    float ramb = dot(var_vertNormal,lightDir);
    ramb = (ramb +1.0) * .5;
		vec2 st = gl_FragCoord.xy/u_resolution.x;
    float g = gridGra(st,u_resolution.x/20.);
    g = step(g,ramb);
		vec3 col = vec3(255,255,255) * (1.- g) + vec3(1,1,1) * g;
		float n = 1.0;
		n = -n*.2;
		col += n;

    gl_FragColor = vec4(col,1.0);
}

`;


let sh;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	sh = createShader(vert,frag);
	this.shader(sh);
}

function draw() {
  background('#E5DCBE');
	noStroke();
	sh.setUniform("u_resolution", [width,height]);
	let size = max(width,height)*0.1;
	let spanX = width*0.5;
	let spanY = height*0.2;
  translate(-spanX, -spanY, 0);
  
//	normalMaterial();


   translate(spanX+10, 100, 100);
   push();
   rotateY(100); 
   rotateX(0.2)
   box(size, size, size);
   pop();

   


}
