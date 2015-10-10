// Create a Animal Constructor that has the following parameters. species, name, legs, color, food 
// (which is an array of foods they can eat).

  //code here
  var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }


//Now create a person function that creates an object and returns it (not in constructor form) 
// that has the following parameters. name, age, height, gender

  //code here
  var Person = function(name, age, height, gender) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.gender = gender;
    return obj;
  }


//Create a animal array and a person array.

  //code here
  var animals = [];
  var persons = [];


//Create two instances of Animal and push those into your animal array

  //code here
  var maynard = new Animal("Maynard", "Parakeet", 2, "blue", ["seeds", "fruit", "bird-food"]);
  var misha = new Animal("Misha", "Dog", 4, "red", ["meat", "bone", "treat"]);
  
  animals.push(maynard, misha);

//Create two instances of person and push those into your person array.

  //code here
  var Jeff = Person("Jeff", 24, 6.0, 'M');
  var Angelica = Person("Angelica", 21, 5.5, 'F');
  

//Now we want every instance of Animal to have a eat method. 
//This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
  Animal.prototype.eat = function() {
    var randFood = this.food[Math.floor(Math.random() * this.food.length)];
    alert(this.name + ' ate ' + randFood);
  }
  
  misha.food[1];
  
  maynard.eat();
  misha.eat();

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
      //No, because of the way the constructor was created.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    // it creates a new instance with it's own seperate variables
  2) What's a good way to describe the keyword 'this'
    // it is the object that is calling the method
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/