console.log('działa');

var calculatorListArrows = document.getElementsByClassName('list_arrow');

for(var i = 0; i < calculatorListArrows.length; i++) {
    calculatorListArrows[i].addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('visible');
    });
}
//This loop make 'list_panel' visible after click on arrow.

var listPanels = document.getElementsByClassName('list_panel');
var filler = document.getElementById('filler');
var rubricColor = document.getElementById('rubricColor');
var rubricPattern = document.getElementById('patternColor');

//----------------------------------------------------------------------------------------//

// for(var i = 0; i < listPanels.length; i++) {
//     //This loop iterates by every 'list_panel'.
//     var itemsListPanels = listPanels[i].children;
    
//     for(var j = 0; j < itemsListPanels.length; j++) {
//         //This loop iterates by every 'item' of 'list_panel'.
//         itemsListPanels[j].addEventListener('click', function() {
//             console.log('click');
            
//             var cloneItem = this;
//             //This variable stores last clicked item.

//             var newInnerContent = cloneItem.innerText;
            
//             if (listPanels[0]) {
//                 console.log("jestem nazwą krzesła");
//                 filler.innerText = newInnerContent;
//             }
//             if (listPanels[1]) {
//                 console.log("jestem kolorem krzesła");
//                 rubricColor.innerText = newInnerContent;
//             }
//             //This code add 'item' which were clicked to 'filler' and 'rubricColor'. It doesn't quite work as I want because I want 'item' in one of them. I save this for example.
//         });
//     }
// }

//---------------------------------------------------------------------------------------//


//Parents
var typeOfChair = document.getElementById('form__typeOfChair');
var colorOfChair = document.getElementById('form__colorOfChair');
var patternOfChair = document.getElementById('form__patternOfChair');

//Children
var itemsTypeOfChair = typeOfChair.children;
var itemsColorOfChair = colorOfChair.children;
var itemsPatternOfChair = patternOfChair.children;

var costType = 200;
var costDetails = 0;
var costTransport = 80;
var sumOrder = document.getElementById('sumOrder');


for(var i = 0; i < itemsTypeOfChair.length; i++) {
    itemsTypeOfChair[i].addEventListener('click', function() {
        var itemType = this;

        filler.innerText = itemType.innerText;
        

        //This loop is for pick type of chair and send this type to summary panel
    });
}

for(var i = 0; i < itemsColorOfChair.length; i++) {
    itemsColorOfChair[i].addEventListener('click', function() {
        var itemColor = this;

        rubricColor.innerText = itemColor.innerText;
        //This loop is for pick color of chair and send this type to summary panel
    });
}

for(var i = 0; i < itemsPatternOfChair.length; i++) {
    itemsPatternOfChair[i].addEventListener('click', function() {
        var itemPattern = this;

        rubricPattern.innerText = itemPattern.innerText;
        //This loop is for pick color of chair and send this type to summary panel
    });
}