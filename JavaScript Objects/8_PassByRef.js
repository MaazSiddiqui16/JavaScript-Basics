const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
  };
   
  let paintIt = Reassign => {             //you can write any name ('Reassign') 
    Reassign.color = 'glorious gold'
  };
   
  paintIt(spaceship);
   
  console.log(spaceship.color); // Returns 'glorious gold'