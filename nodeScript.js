const fs = require('fs');
const dir = './Crosswords/Collection 1/Standard';

fs.readdir(dir, (err, data) => {
    console.log(data.length);
    var standardNames = [];
    for (var i = 0; i < data.length; i++) {
        standardNames[i] = data[i];
    fs.writeFile("output.json", standardNames, err);
}
});



