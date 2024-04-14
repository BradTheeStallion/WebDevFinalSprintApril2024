// Final Sprint Challenge
// Brad Ayers
// April 2024
// Please start by reading the README.md file
fetch('SprintBrad.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON file');
    }
    return response.json();
  })
  .then(data => {
    console.log('JSON data:', data);
    
    const sortedPlants = sortPlantsByHeight(data.houseplants);
    
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    sortedPlants.forEach(plant => {
      const name = plant.name;
      const description = getDescription(plant);
      const careInstructions = getCareInstructions(plant);
      const listItem = document.createElement('div');
      listItem.innerHTML = `<strong>${name}:</strong> ${description}<br><em>Care Instructions:</em> ${careInstructions}`;
      container.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON file:', error);
  });

function getDescription(plant) {
  return `Scientific name: ${plant.scientific_name}, Family: ${plant.family}, Origin: ${plant.origin.join(', ')}, Average Height: ${plant.average_height_cm}cm`;
}

function getCareInstructions(plant) {
  const instructions = plant.care_instructions;
  return `Light: ${instructions.light}, Water: ${instructions.water}, Temperature: ${instructions.temperature}, Humidity: ${instructions.humidity}`;
}

function sortPlantsByHeight(plants) {
  return plants.slice().sort((a, b) => a.average_height_cm - b.average_height_cm);
}