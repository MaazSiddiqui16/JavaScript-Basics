let spaceship = {
    crew: {                                         //nested obj 1
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      
      'chief officer': {                            //nested obj 2
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },

      medic: {                                      //nested obj 3
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },

      translator: {                                 //nested obj 4
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
  
  // for...in
  for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }
  