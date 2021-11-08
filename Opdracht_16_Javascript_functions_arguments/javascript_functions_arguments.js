console.log("Javascript and Node is working");

// FUNCTIONS > ARGUMENTS > PAITING WALLS

const paintWall = function (color) {
  console.log("The wall has been painted " + color);
};

paintWall("green");
paintWall("orange");
paintWall(); //this will retun undefined

const paintWalls = function (wall, color) {
  //naming and position on defining and calling are important to be consistent
  console.log("the " + wall, "wall,has been paitnted " + color); // remember to put a comma
};

paintWalls("North", "orange");
paintWalls("South", "grey");

/* 
//CREATING OBJECTS template

let person = {
  name: "Junier",
  age: 55,
};
 */
