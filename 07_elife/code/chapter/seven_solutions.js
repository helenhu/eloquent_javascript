// Artificial Stupidity

/* New critter that tries to solve several problems with current plant eaters:
	 - greedy --> eat any plant they see until they have wiped out plant life
	 - randomized movement --> stumble around inneffectively and starve if there
	 	 don't happen to be any plants nearby
	 - breed very fast, making cycles b/w abundance and famine quite intense */
function SmartPlantEater() {
	this.energy = 20;
  this.direction = null;
  this.stomach = 5;
  this.children = 0;
}
SmartPlantEater.prototype.act = function(view) {
	var space = view.find(" ");
  if (this.direction == null) 
    this.direction = space || "s";
  this.stomach--;
	if (this.energy > 60 && space) {
    this.children++;
		return {type: "reproduce", direction: space};
  }
	var plant = view.find("*");
	if (plant && this.stomach <=0 && this.children < 2) {
    this.stomach = 5;
		return {type: "eat", direction: plant};
  }
  if (!plant || this.children >= 2) {
    if (view.look(this.direction) == " ")
      return {type: "move", direction: this.direction};
    else{
      this.direction = space;
      return {type: "move", direction: space};
    }
  }
};

var smartWorld = new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
);


// Predators
function Tiger() {
	this.energy = 200;
  this.direction = null;
  this.stomach = 5;
  this.children = 0;
}
Tiger.prototype.act = function(view) {
    var space = view.find(" ");
    if (this.direction == null) 
      this.direction = space || "s";
    this.stomach--;
    if (this.energy > 500 && space) {
      this.children++;
      return {type: "reproduce", direction: space};
    }
    var prey = view.find("O");
    if (prey && this.stomach <=0) {
      this.stomach = 5;
      return {type: "eat", direction: prey};
    }
    if (!prey || this.children >= 2) {
      if (view.look(this.direction) == " ")
        return {type: "move", direction: this.direction};
      else{
        this.direction = space;
        return {type: "move", direction: space};
      }
    }
};

var predatorWorld = new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
);

