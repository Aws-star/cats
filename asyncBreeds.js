// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) functionToRunWhenThingsAreDone(data);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed); // => will NOT print out details, instead we will see undefined!
};


breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;
