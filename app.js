const server = require('./functions')

// Modules required
const path = require('path');

// Constants
const screenshotsBefore = "./screens/antes"
const screenshotsAfter = "./screens/despues"
const screenshotsResults = "./screens/resultados"

var fileList = server.listFiles(screenshotsBefore);
for (i = 0; i < fileList.length; i++){
	console.log("================== SCREENSHOT " + (i+1) +"===============");
	beforeImage = path.join(screenshotsBefore, fileList[i]);
    afterImage = path.join(screenshotsAfter, fileList[i]);
    resultPath = path.join(screenshotsResults, fileList[i]);
	var result = server.compareImages(beforeImage, afterImage, resultPath);
	console.log(result);
}