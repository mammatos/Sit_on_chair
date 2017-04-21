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

for(var i = 0; i < listPanels.length; i++) {
    //This loop iterates by every 'list_panel'.
    var itemsListPanels = listPanels[i].children;
    
    for(var j = 0; j < itemsListPanels.length; j++) {
        //This loop iterates by every 'item' of 'list_panel'.
        itemsListPanels[j].addEventListener('click', function() {
            console.log('click');
            
            var cloneItem = this;
            //This variable stores last clicked item.

            var newInnerContent = cloneItem.innerText;
            
            if (listPanels[0]) {
                console.log("jestem nazwą krzesła");
                filler.innerText = newInnerContent;
            }
            if (listPanels[1]) {
                console.log("jestem kolorem krzesła");
                rubricColor.innerText = newInnerContent;
            }
            //This code add 'item' which were clicked to 'filler' and 'rubricColor'. It doesn't quite work as I want because I want 'item' in one of them. I save this for example.
        });
    }
}

