let spaceship = {
    homePlanet : 'Earth',
    color : 'red'
  };

  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };

  tryReassignment(spaceship) // The attempt at reassignment does not work.
  console.log(spaceship);   // Still returns {homePlanet : 'Earth', color : 'red'};
   
  spaceship = {                 //Regular reassignment still works
    identified : false, 
    'transport type': 'flying'
  }; 

  console.log(spaceship);