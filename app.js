let north=0;
let south=0;
let west=0;
let east=0;
let position = "Entrance";
let worldsize=0;


function direction1() {
if (north > worldsize){
return;
}
if (south < 1) {
        north = north + 1;
}else {
        south = south - 1;
}
myposition();
        document.getElementById("play").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position;
}


function direction2() {
if (west > worldsize){
return;
}
if (east < 1) {
        west = west + 1;
}else{
        east = east - 1;
}
myposition();
        document.getElementById("play").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position;
}

function direction3() {

if (east > worldsize){
return;
}
if (west < 1) {
        east = east + 1;
}else{
        west = west - 1;
}
myposition();
        document.getElementById("play").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position;
}


function direction4() {
if (south > worldsize){
return;
}
if (north > 0) {
        north = north - 1;
}else{
south = south + 1;
}
myposition();
        document.getElementById("play").innerHTML =
        "North: " + north +"   South: " + south+"   East: " + east + "   West: " + west + "<br>" + "Location: " + position;
}


function myposition() {
  let image = document.getElementById('myImage');
  if(north == 0 && south == 0 && east == 0 && west == 0){
    position = "Entrance";
    image.src = "./images/entrance.jpg";
  }
  else if(north == 0 && south == 0 && east == 1 && west == 0){
    position = "Garden";
    image.src = "./images/garden.jpg";
  }
  else if(north == 0 && south == 0 && east == 0 && west == 1){
    position = "Stock Room";
    image.src = "./images/stockroom.jpg";
  }
  else if(north == 1 && south == 0 && east == 0 && west == 0){
    position = "Fighting Hall";
    image.src = "./images/fightinghall.jpg";
  }
  else if(north == 1 && south == 0 && east == 1 && west == 0){
    position = "Moat Control Room";
    image.src = "./images/controlroom.jpg";
  }
  else if(north == 1 && south == 0 && east == 0 && west == 1){
    position = "Dungeon";
    image.src = "./images/dungeon.jpg";
  }
  else if(north == 0 && south == 1 && east == 0 && west == 0){
    position = "Armory";
    image.src = "./images/armory.jpg";
  }
  else if(north == 0 && south == 1 && east == 1 && west == 0){
    position = "Princess Chambers";
    image.src = "./images/princess.jpg";
  }
  else if(north == 0 && south == 1 && east == 0 && west == 1){
    position = "Wine Cellar";
    image.src = "./images/winecellar.jpg";
  }
  else{
    position = "How did you get this lost";
    image.src = "./images/boi.jpg";
  }
}
