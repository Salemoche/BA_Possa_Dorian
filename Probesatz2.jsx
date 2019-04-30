// var imagePath = '../../../../../../Users/gabrielbach/Desktop/Salemoche/Freelance/Possa/InDesign_Scripting/Test/Test_Daten/Probesatz/Bilder/180319/'
var imagePath = './img/'


var doc = app.documents.item(0);
var page = doc.pages.item(0);
var pageWidth = page.bounds[3] -  page.bounds[1];
var pageHeight = page.bounds[2] -  page.bounds[0];
var allGroups = [];
var lastPage = 0;
var wholeLength = 0;

// var image = createTextbox(image, 1, 'yo');
// positionElement(image, pageWidth/2, pageHeight/2, 0, 0);
// setDimensions(image, 20, 20, 0, 0);

var image = addImage('RH_D_26-03-19', 20, 50, 50);

function addImage(name, width, x, y) {
        
    // ===============
    // Image
    // ===============

    var image = doc.pages.item(0).textFrames.add();    

    image.place (File(app.activeDocument.filePath + '/img/' + name + '.jpg'), false);

    image.fit(FitOptions.frameToContent);
    var dimensions = getElement(image);
    var ratio = dimensions.width / dimensions.height;
    var height = width / ratio;

    image.geometricBounds = [y + 0, x + 0, y + height , x + width];

    image.fit(FitOptions.contentToFrame);

    return image;
}

function createTextbox(element, id, content) {

    var item = doc.pages.item(lastPage).textFrames.add();
    item.contents = content || 'unknown';
    item.recompose();
    item.fit(FitOptions.frameToContent);
    item.name = 'element_' + id + '_textbox_' * element;

    var text = item.paragraphs[0];
    text.appliedFont = app.fonts.item("Nimbus Roman Mono M");
    text.fontStyle = "Regular";

    return item;
}


function positionElement(element, x, y, marginLeft, marginTop) {
    // element.recompose();
    element.fit(FitOptions.frameToContent);
    
    var elementWidth = element.geometricBounds[3] -  element.geometricBounds[1];
    var elementHeight = element.geometricBounds[2] -  element.geometricBounds[0];

    element.geometricBounds = [y, x, marginTop + y + elementHeight, marginLeft + x + elementWidth];

}

function getElement(element) {

    var item = {
        x: element.geometricBounds[1],
        y: element.geometricBounds[0],
        x2: element.geometricBounds[3],
        y2: element.geometricBounds[2],
        width: element.geometricBounds[3] -  element.geometricBounds[1],
        height: nameHeight = element.geometricBounds[2] -  element.geometricBounds[0],
    }

    return item;
}

function setDimensions(element, width, height, spacingRight, spacingBottom) {

    var dimensions = element.geometricBounds;

    if (width) {
        element.geometricBounds = [dimensions[0], dimensions[1], dimensions[2], dimensions[1] + width];
    }

    dimensions = element.geometricBounds;

    if (spacingRight) {
        element.geometricBounds = [dimensions[0], dimensions[1], dimensions[2], dimensions[1] + spacingRight];
    }

    element.fit(FitOptions.frameToContent);
    dimensions = element.geometricBounds;

    if (height) {
        element.geometricBounds = [dimensions[0], dimensions[1], dimensions[2] + height, dimensions[3] ];
    }

    dimensions = element.geometricBounds;


    if (spacingBottom) {
        element.geometricBounds = [dimensions[0], dimensions[1], dimensions[2] + spacingBottom, dimensions[3] ];
    }

}

function getText(fullText, type) {

    // var partial = fullText.split('*' + type + '*').pop().split("\n")[0] || 'unknown';
    var partial = fullText.split('*' + type + '*').pop().split('*/' + type + '*')[0] || 'unknown';
    return partial;
}
   
