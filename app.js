let north = 0;
let east = 0;
let south = 0;
let west = 0;
let pos = 'Entrance';
let world = 0;
let inventory = [];


//Items for the player to pick up

let flashlight = {
  name: 'Flashlight',
  description: 'Used to see in dark places',
  location: 'north == 0 && south == 0 && east == 0 && west == 1'
};

let flower = {
  name: 'Flower',
  description: 'Present to the princess to wake her up',
  location: 'north == 0 && south == 0 && east == 1 && west == 0'
};

let key = {
  name: 'Key',
  description: 'Allows access to the castle',
  location: 'north == 0 && south == 0 && east == 0 && west == 0'
};

let item = function(itemName){
  let thing = {};
  thing.name = name;
  thing.description = description;
};

//Rooms

let armory = {
  name: 'Armory',
  coordinates: 'north == 0 && south == 1 && east == 0 && west == 0',
  imgSrc: './images/armory.jpg'
}

let controlroom = {
  name: 'Control Room',
  coordinates: 'north == 1 && south == 0 && east == 1 && west == 0',
  imgSrc: './images/controlroom.jpg'
}

let dungeon = {
  name: 'Dungeon',
  coordinates: 'north == 1 && south == 0 && east == 0 && west == 1',
  imgSrc: './images/dungeon.jpg'
}

let entrance = {
  name: 'Entrance',
  coordinates: 'north == 0 && south == 0 && east == 0 && west == 0',
  imgSrc: './images/entrance.jpg'
}

let fightinghall = {
  name: 'Fighting Hall',
  coordinates: 'north == 1 && south == 0 && east == 0 && west == 0',
  imgSrc: './images/fightinghall.jpg'
}

let garden = {
  name: 'Garden',
  coordinates: 'north == 0 && south == 0 && east == 1 && west == 0',
  imgSrc: './images/garden.jpg'
}

let princess = {
  name: 'Princess',
  coordinates: 'north == 0 && south == 1 && east == 1 && west == 0',
  imgSrc: './images/princess.jpg'
}

let stockroom = {
  name: 'Stockroom',
  coordinates: 'north == 0 && south == 0 && east == 0 && west == 1',
  imgSrc: './images/stockroom.jpg'
}

let winecellar = {
  name: 'Wine Cellar',
  coordinates: 'north == 0 && south == 1 && east == 0 && west == 1',
  imgSrc: './images/winecellar.jpg'
}

let rooms = [armory, controlroom, dungeon, entrance, fightinghall, garden, princess, stockroom, winecellar];

//Buttons to handle events

function take() {

}

//Directions player can make
function direction1(){
  if(north > world){
    return;
  }
  if(south < 1){
    north = north + 1;
  }else{
    south = south - 1;
  }
  myplayer();
  document.getElementById("play").innerHTML =
    "North: " + north + "   South: " + south + "   East: " + east + "   West: " + west + "<br>" + "Location: " + pos;
}


function direction2(){
  if(west > world){
    return;
  }
  if(east < 1){
    west = west + 1;
  }else{
    east = east - 1;
  }
  myplayer();
  document.getElementById("play").innerHTML =
    "North: " + north + "   South: " + south + "   East: " + east + "   West: " + west + "<br>" + "Location: " + pos;
}

function direction3(){
  if(east > world){
    return;
  }
  if(west < 1){
    east = east + 1;
  }else{
    west = west - 1;
  }
  myplayer();
  document.getElementById("play").innerHTML =
  "North: " + north + "   South: " + south + "   East: " + east + "   West: " + west + "<br>" + "Location: " + pos;
}


function direction4(){
  if(south > world){
    return;
  }
  if(north > 0){
    north = north - 1;
  }else{
    south = south + 1;
  }
  myplayer();
  document.getElementById("play").innerHTML =
    "North: " + north + "   South: " + south + "   East: " + east + "   West: " + west + "<br>" + "Location: " + pos;
}


//Result of the moves the player makes
function myplayer() {
  let image = document.getElementById('locationImg');
  if(north == 0 && south == 0 && east == 0 && west == 0){
    pos = "Entrance";
    image.src = "./images/entrance.jpg";
  }else if(north == 0 && south == 0 && east == 1 && west == 0){
    pos = "Garden";
    image.src = "./images/garden.jpg";
  }else if(north == 0 && south == 0 && east == 0 && west == 1){
    pos = "Stock Room";
    image.src = "./images/stockroom.jpg";
  }else if(north == 1 && south == 0 && east == 0 && west == 0){
    pos = "Fighting Hall";
    image.src = "./images/fightinghall.jpg";
  }else if(north == 1 && south == 0 && east == 1 && west == 0){
    pos = "Moat Control Room";
    image.src = "./images/controlroom.jpg";
  }else if(north == 1 && south == 0 && east == 0 && west == 1){
    pos = "Dungeon";
    image.src = "./images/dungeon.jpg";
  }else if(north == 0 && south == 1 && east == 0 && west == 0){
    pos = "Armory";
    image.src = "./images/armory.jpg";
  }else if(north == 0 && south == 1 && east == 1 && west == 0){
    pos = "Princess Chambers";
    image.src = "./images/princess.jpg";
  }else if(north == 0 && south == 1 && east == 0 && west == 1){
    pos = "Wine Cellar";
    image.src = "./images/winecellar.jpg";
  }else{
    pos = "How did you get this lost";
    image.src = "./images/boi.jpg";
  }
}
