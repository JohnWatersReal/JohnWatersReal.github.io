const fs = require('fs');
const dir = './Crosswords/Collection 1/Standard';

fs.readdir(dir, (err, data) => {
    if (err) {
        console.error("Directory ", err);
        process.exit(1);
    }
    console.log(data.length);
    var standardNames = [];
    for (var i = 0; i < data.length; i++) {
        standardNames[i] = data[i];
    }
    fs.writeFileSync("output.json", JSON.stringify(standardNames));
    console.log("Wrote " + standardNames.length + " files to output.json");
});



