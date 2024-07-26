 
 
const form = document.querySelector('form');
const locationInput = form.querySelector('#location');
const systemSizeInput = form.querySelector('#system-size');
const energyConsumptionInput = form.querySelector('#energy-consumption');
const roofSizeInput = form.querySelector('#roof-size');
const roofOrientationSelect = form.querySelector('#roof-orientation');
const shadingSelect = form.querySelector('#shading');
const resultsDiv = document.querySelector('.results');
const estimatedEnergyOutputPara = resultsDiv.querySelector('#estimated-energy-output');
const estimatedSavingsPara = resultsDiv.querySelector('#estimated-savings');
const paybackPeriodPara = resultsDiv.querySelector('#payback-period');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const systemSize = parseInt(systemSizeInput.value);
  const energyConsumption = parseInt(energyConsumptionInput.value);
  const roofSize = parseInt(roofSizeInput.value);
  const roofOrientation = roofOrientationSelect.value;
  const shading = shadingSelect.value;

 
  const estimatedEnergyOutput = calculateEstimatedEnergyOutput(systemSize, location, roofSize, roofOrientation, shading);
  estimatedEnergyOutputPara.textContent = `Estimated Energy Output: ${estimatedEnergyOutput} kWh/month`;
 
  const estimatedSavings = calculateEstimatedSavings(energyConsumption, estimatedEnergyOutput);
  estimatedSavingsPara.textContent = `Estimated Savings: $${estimatedSavings}/month`;

 
  const paybackPeriod = calculatePaybackPeriod(systemSize, estimatedSavings);
  paybackPeriodPara.textContent = `Payback Period: ${paybackPeriod} years`;
});
 
function calculateEstimatedEnergyOutput(systemSize, location, roofSize, roofOrientation, shading) {
 
  const energyOutputPerKW = 120;  
  const locationFactor = getLocationFactor(location);  
  const roofSizeFactor = getRoofSizeFactor(roofSize);  
  const roofOrientationFactor = getRoofOrientationFactor(roofOrientation); 
  const shadingFactor = getShadingFactor(shading);  
  return systemSize * energyOutputPerKW * locationFactor * roofSizeFactor * roofOrientationFactor * shadingFactor;
}

 
function calculateEstimatedSavings(energyConsumption, estimatedEnergyOutput) {
 
  const electricityCost = 0.15; // $/kWh
  return energyConsumption * electricityCost - estimatedEnergyOutput * electricityCost;
}

// Function to calculate payback period
function calculatePaybackPeriod(systemSize, estimatedSavings) {
 
  // For example:
  const systemCost = 3000; // $ per kW
  return systemCost / estimatedSavings;
}

// Function to get location factor based on location
function getLocationFactor(location) {
  // Use a database or API to get location factor based on location
  // For example:
  const locationFactors = {
    'New York': 0.7,
    'Los Angeles': 0.9,
    'Chicago': 0.8,
    //...
  };
  return locationFactors[location];
}

// Function to get roof size factor based on roof size
function getRoofSizeFactor(roofSize) {
  // Use a formula to calculate roof size factor based on roof size
  // For example:
  return 0.9 + (roofSize / 1000) * 0.1;
}

// Function to get roof orientation factor based on roof orientation
function getRoofOrientationFactor(roofOrientation) {
  // Use a formula to calculate roof orientation factor based on roof orientation
  // For example:
  switch (roofOrientation) {
    case 'outh':
      return 0.95;
    case 'north':
      return 0.8;
    case 'east':
      return 0.85;
    case 'west':
      return 0.9;
    default:
      return 0.8;
  }
}

// Function to get shading factor based on shading
function getShadingFactor(shading) {
  // Use a formula to calculate shading factor based on shading
  // For example:
  switch (shading) {
    case 'none':
      return 1;
    case 'light':
      return 0.8;
    case 'heavy':
      return 0.6;
    default:
      return 0.8;
  }
}    
 