const fs = require('fs').promises;

async function fileOperations() {
  try {
    // Write to file
    await fs.writeFile('feedback.txt', 'Node.js is awesome!');
    console.log('Data written successfully.');

    // Read from file
    console.log('Reading file...');
    const data = await fs.readFile('feedback.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fileOperations();
