let spaceship = {
    "Fuel Type": "Turbo Fuel",
    homePlanet: "Earth",
  };
  
  // Write your code below
  function greenEnergy(spaceship)
  {
    spaceship['Fuel Type'] = 'avocado oil';
  }
  
  function remotelyDisable(spaceship)
  {
    spaceship.disabled = true;
  }
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship);
  