// Use Fetch API to fetch the JSON file
fetch('./SprintBrad.json')
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch JSON file');
    }
    // Return response data as JSON
    return response.json();
  })
  .then(data => {
    // Do something with the JSON data (e.g., display in console)
    console.log('JSON data:', data);
    
    // Sorting the plants from shortest to tallest
    const sortedPlants = sortPlantsByHeight(data.houseplants);
    
    // Writing JSON data to the browser window as HTML
    const container = document.createElement('div');
    document.body.appendChild(container);
    
    // Iterating over all records using forEach loop
    sortedPlants.forEach(plant => {
      // Displaying one of the key-value pairs to test reading of JSON file
      const name = plant.name;
      const description = getDescription(plant);
      const careInstructions = getCareInstructions(plant);
      const listItem = document.createElement('div');
      listItem.innerHTML = `<strong>${name}:</strong> ${description}<br><em>Care Instructions:</em> ${careInstructions}`;
      container.appendChild(listItem);
    });
  })
  .catch(error => {
    // Handle any errors that occur during fetching
    console.error('Error fetching JSON file:', error);
  });

// Function to return a string describing the contents of the JSON file
function getDescription(plant) {
  return `Scientific name: ${plant.scientific_name}, Family: ${plant.family}, Origin: ${plant.origin.join(', ')}, Average Height: ${plant.average_height_cm}cm`;
}

// Function to get care instructions
function getCareInstructions(plant) {
  const instructions = plant.care_instructions;
  return `Light: ${instructions.light}, Water: ${instructions.water}, Temperature: ${instructions.temperature}, Humidity: ${instructions.humidity}`;
}

// Function to sort plants by height (shortest to tallest)
function sortPlantsByHeight(plants) {
  return plants.slice().sort((a, b) => a.average_height_cm - b.average_height_cm);
}