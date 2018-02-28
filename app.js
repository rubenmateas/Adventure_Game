let north = document.getElementById('northBtn').value = 0;
let west = document.getElementById('westBtn').value = 0;
let east = document.getElementById('eastBtn').value = 0;
let south = document.getElementById('southBtn').value = 0;
let mapSize = 0;
let btn = document.getElementsByClassName('btn');
let playerPos = north + ',' + west + ',' + east + ',' + south;
let inv = [];

function Item(name,description,position) {
  this.name = name,
  this.description = description,
  this.position = position
}

let items = [
  new Item('Flashlight','Used to see in dark places','north == 0 && south == 0 && east == 0 && west == 1'),
  new Item('Flower','Present to the princess to wake her up','north == 0 && south == 0 && east == 1 && west == 0'),
  new Item('Key','Allows access to the castle','north == 0 && south == 0 && east == 0 && west == 0')
];

function Room(name, position, imgSrc, hasItem, displayItem){
  this.name = name,
  this.position = position,
  this.imgSrc = imgSrc
}

let rooms = [
  new Room('Armory','0,1,0,0','./images/armory.jpg',null),
  new Room('Control Room','1,0,1,0','./images/controlroom.jpg','yes'),
  new Room('Dungeon','1,1,0,0','./images/dungeon.jpg',null),
  new Room('Entrance','0,0,0,0','./images/entrance.jpg',null),
  new Room('Fighting Hall','1,0,0,0','./images/fightinghall.jpg',null),
  new Room('Garden','0,0,1,0','./images/garden.jpg','yes'),
  new Room('Princess','0,0,0,1','./images/princess.jpg',null),
  new Room('Stockroom','0,0,1,1','./images/stockroom.jpg','yes'),
  new Room('Wine Cellar','0,1,0,1','./images/winecellar.jpg',null)
];

function direction(dir) {
  if(dir == 'north'){
    if(north > mapSize){
      return
    }
    if(south > 0){
      south = south - 1;
    }else{
      north++;
    }
  }else if(dir == 'west'){
    if(west > mapSize){
      return
    }
    if(east > 0){
      east = east - 1;
    }else{
      west++;
    }
  }else if(dir == 'east'){
    if(east > mapSize){
      return
    }
    if(west > 0){
      west = west - 1;
    }else{
      east++;
    }
  }else if(dir == 'south'){
    if(south > mapSize){
      return
    }
    if(north > 0){
      north = north - 1;
    }else{
      south++;
    }
  }
  playerPos = north + ',' + west + ',' + east + ',' + south;
  document.getElementById("play").innerHTML = "North: " + north + "   South: " + south + "   East: " + east + "   West: " + west;
  changeSetting();
};

function changeSetting() {
  let image = document.getElementById('locationImg');
  let loc = document.getElementById('loc');
  for (var i = 0; i < rooms.length; i++) {
    if(rooms[i].position == playerPos) {
      image.src = rooms[i].imgSrc;
      loc.innerHTML = 'Location: ' + rooms[i].name;
      break;
    }
  }
}
