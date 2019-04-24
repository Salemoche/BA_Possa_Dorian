// var imagePath = '../../../../../../Users/gabrielbach/Desktop/Salemoche/Freelance/Possa/InDesign_Scripting/Test/Test_Daten/Probesatz/Bilder/180319/'
var imagePath = './img/'

var data = 
    [
        {
        "Positionierung": "Rechts",
        "Titel": "Bla",
        "Kategorie": "Artikel"
        },
        {
        "Positionierung": "Links",
        "Titel": "Blu",
        "Kategorie": "Foto"
        },
        {
        "Positionierung": "Links",
        "Titel": "Ble",
        "Kategorie": "Liste"
        },
        {
        "Positionierung": "Rechts",
        "Titel": "Bli",
        "Kategorie": "Foto"
        },
        {
        "Positionierung": "Neutral",
        "Titel": "Blo",
        "Kategorie": "Artikel"
        }
    ]

// var myDocument = app.documents.item(0);
// for(var i = 0; i < data.length; i++) {

//     var item = data[i]
//     var myTextFrame = myDocument.pages.item(0).textFrames.add();

//     var cyan = makeColor("CYAN", ColorSpace.CMYK, ColorModel.process, [100, 0, 0, 0]);
//     var magenta = makeColor("MAGENTA", ColorSpace.CMYK, ColorModel.process, [0, 100, 0, 0]);
//     var yellow = makeColor("YELLOW", ColorSpace.CMYK, ColorModel.process, [0, 0, 100, 0]);


//     if (item.Positionierung == "Rechts") {
//         myTextFrame.geometricBounds = [i * 4 + "p", "40p", i * 4 + 2 + "p", "50p"];
//     } else if (item.Positionierung == "Links") {
//         myTextFrame.geometricBounds = [i * 4 + "p", "0p",  i * 4 + 2 + "p", "10p"];
//     } else {
//         myTextFrame.geometricBounds = [i * 4 + "p", "20p",  i * 4 + 2 + "p", "30p"];
//     }

//     if (item.Kategorie == "Foto") {
//         myTextFrame.fillColor = cyan;
//     } else if (item.Kategorie == "Liste") {
//         myTextFrame.fillColor = magenta;
//     } else {
//         myTextFrame.fillColor = yellow;
//     }

    
    

//     myTextFrame.contents = item.Titel;
// }


function makeColor(colorName, colorSpace, colorModel, colorValue) {  
    var doc = app.activeDocument;  
    var color = doc.colors.item(colorName);  
    if (!color.isValid) {  
        color = doc.colors.add({name: colorName, space: colorSpace, model: colorModel, colorValue: colorValue});  
    }  
    return color;  
}

// a_frame = app.selection[0];
// a_frame.place (new File(Folder.myDocuments+'/123.jpg'), false);
// a_frame.place (File(app.activeDocument.filePath+'/123.jpg'), false);
// a_frame.fit (FitOptions.CONTENT_TO_FRAME);
// a_frame.fit (FitOptions.PROPORTIONALLY);
// a_frame.fit (FitOptions.CENTER_CONTENT);

img = app.selection[0].place(new File('../../../../../../Users/gabrielbach/Desktop/Salemoche/Freelance/Possa/InDesign_Scripting/Test/Test_Daten/Probesatz/Bilder/180319/123.jpg'));

// alert(Folder.myDocuments+'/123.jpg');
