let messi;
let smaller;
let mosaicImages = [];
let brightnessArray = [];
let imagesNasa=[]

let scaleFactor=8;
let w,h;

let hdurl;
let img;
const url = "https://images-api.nasa.gov/search?q=apollo%2011&media_type=image";
var img_url;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function randomImage(num){
    try{
        const res = await fetch(`${url}`);
        const data = await res.json();
        const img_url = data.collection.items[num].links[0].href;
        return await img_url;
    }catch(err){
        console.log(err);
    }
}


async function preload(){
  // load our image
  messi= loadImage('messirve2.jpg');
  smaller= loadImage('messirve2.jpg');
  for (let i =0; i< 100 ;i++){
    
      imagesNasa[i]= await loadImage(await randomImage(i)); 
      //console.log(imagesNasa[i]);
      
    } 
  
   //w= messi.width/scaleFactor;
   //h= messi.height/scaleFactor;
   
    //await sleep(1000);
    //CALCULA ILUMINACION MEDIA  
  for (let index= 0 ; index< 100; index++){
    imagesNasa[index].loadPixels();
    var avg=0
    for( let i=0; i<imagesNasa[index].width; i++ ){
      for (let j=0; j<imagesNasa[index].height;j++){
         var index1 = (i + j * imagesNasa[index].width) * 4;
         var r = imagesNasa[index].pixels[index1 + 0];
         var g = imagesNasa[index].pixels[index1 + 1];
         var b = imagesNasa[index].pixels[index1 + 2];

         var bright = (r + g + b) / 3;
         avg += bright;
     
      }
    }
    //console.log(avg/(imagesNasa[index].pixels.length));
    brightnessArray[index]= avg/(imagesNasa[index].pixels.length);
    
  } 
  
  // CREA ARRREGLO DE ILUMINACION
    for (let i = 0; i < 256; i++) {
      var record = 256;
      for (let j = 0; j < brightnessArray.length; j++) {
        var diff = abs(i - brightnessArray[j]);
        if (diff < record) {
          record = diff;
          mosaicImages[i] = imagesNasa[j];
       }
     }
  }
  
}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

function setup(){
    createCanvas(1500,1500);
   
   w = (messi.width/scaleFactor)*3;
   h = (messi.height/scaleFactor)*3;
  
  smaller.resize(w,h);
}

async function draw(){
    //console.log(imagesNasa[1].pixels.length);
    await sleep(1500);
    //image(mosaicImages[0],0,0);
    //image(messi,0,0);
    //image(smaller,0,0);
  
  
    
     smaller.loadPixels();
     for( let i=0; i<w; i++ ){
           for (let j=0; j<h;j++){
            var c = smaller.get(i,j);
            var imageIndex = int(brightness(c));
            //bright = int((r + g + b) / 3);
            //console.log(bright);
            image(mosaicImages[imageIndex], i*scaleFactor, j*scaleFactor, scaleFactor, scaleFactor);
           }
     }
  
     noLoop();
}