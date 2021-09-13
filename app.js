// Loading the module
const fs = require('fs');

//fs.writeFileSync('notes.txt', 'My name is ');


// challele: append a message to notes.txt

// 1. use AppendFileSync to append to the file
// 2. run the script
// 3. check work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', ' Jake Paul');