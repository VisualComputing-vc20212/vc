let hdurl;
let img;
const url = "https://images-api.nasa.gov/search?q=";
var img_url;
let show_img = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


async function randomImage(){
    try{       
        var query = input.value()+"&media_type=image"
        const res = await fetch(`${url}`+query);
        const data = await res.json();
        const num = Object.keys(data.collection.items).length;
        const rand = getRandomInt(0,num);
        console.log(rand);
        const img_url = data.collection.items[rand].links[0].href;
        img = await loadImage(img_url);
        show_img = true;
    }catch(err){
        console.log(err);
    }
}
 let img_arr = [];

async function preload(){  
    //console.log(img);
    
}

async function setup() {
    //noLoop();
    createCanvas(625,625);
    input = createInput();
    input.position(10,10);
    button = createButton('Buscar');
    button.position(140,10);
    button.mousePressed(randomImage);
    console.log(input.value());
    //input.value('');
}

function mousePressed() {
    clear();
    show_img = false;
}

function draw(){
    if(show_img){
        image(img,0,0);
        //show_img = false;
    }
}




