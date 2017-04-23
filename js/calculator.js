document.addEventListener('DOMContentLoaded', function() { 
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
    var rubricPattern = document.getElementById('rubricPattern');
    var rubricTransport = document.getElementById('rubricTransport');

    //Parents
    var typeOfChair = document.getElementById('form__typeOfChair');
    var colorOfChair = document.getElementById('form__colorOfChair');
    var patternOfChair = document.getElementById('form__patternOfChair');

    //Children
    var itemsTypeOfChair = typeOfChair.children;
    var itemsColorOfChair = colorOfChair.children;
    var itemsPatternOfChair = patternOfChair.children;

    //costs
    var costOfTypes = {
        Clair: 200,
        Margarita: 150,
        Selena: 100
    };

    var costOfColors = {
        Czerwony: 0,
        Czarny: 15,
        Pomarańczowy: 20
    };

    var costOfPattern = {
        Tkanina: 0,
        Skóra: 50
    };

    var currentCostOfTypes = 0;
    var currentCostOfColors = 0;
    var currentCostOfPattern = 0;
    var currentCostOfTransport = 0;
    

    //rubrics of costs
    var rubricCostType = document.getElementById('rubricCostType');
    var rubricCostColor = document.getElementById('rubricCostColor');
    var rubricCostPattern = document.getElementById('rubricCostPattern');
    var rubricCostTransport = document.getElementById('rubricCostTransport');
    var sumOrder = document.getElementById('sumOrder');
    var transport = document.getElementById('transport');
    //cost of transport
    var transportPrice = transport.dataset.transportPrice;

    var calculateSum = function() {
        return currentCostOfTypes + currentCostOfColors + currentCostOfPattern + currentCostOfTransport;
    };

    var updateSum = function() {
        sumOrder.innerText = calculateSum() + ' zł';
    };

    for(var i = 0; i < itemsTypeOfChair.length; i++) {
        itemsTypeOfChair[i].addEventListener('click', function() {
            var itemType = this;
            var currentItemTypeText = itemType.innerText;

            filler.innerText = currentItemTypeText;
            currentCostOfTypes = costOfTypes[currentItemTypeText];
            rubricCostType.innerHTML = currentCostOfTypes + ' zł';
            updateSum();
            //This loop is for pick type of chair and send this type to summary panel with cost and update sum.
        });
    }

    for(var i = 0; i < itemsColorOfChair.length; i++) {
        itemsColorOfChair[i].addEventListener('click', function() {
            var itemColor = this;
            var currentItemColorText = itemColor.innerText;

            rubricColor.innerText = currentItemColorText;
            currentCostOfColors = costOfColors[currentItemColorText];
            rubricCostColor.innerHTML = currentCostOfColors + ' zł';
            updateSum();
            //This loop is for pick color of chair and send this type to summary panel with cost and update sum.
        });
    }

    for(var i = 0; i < itemsPatternOfChair.length; i++) {
        itemsPatternOfChair[i].addEventListener('click', function() {
            var itemPattern = this;
            var currentItemPatternText = itemPattern.innerText;

            rubricPattern.innerText = currentItemPatternText;
            currentCostOfPattern = costOfPattern[currentItemPatternText];
            rubricCostPattern.innerText = currentCostOfPattern + ' zł';
            updateSum();
            //This loop is for pick pattern of chair and send this type to summary panel with cost and update sum.
        });
    }

    transport.addEventListener('click', function() {

        if(transport.checked) {
            rubricTransport.innerText = "Transport";
            rubricCostTransport.innerText = transportPrice + ' zł';
            currentCostOfTransport = parseInt(transportPrice, 10);
            updateSum();
        } else {
            rubricTransport.innerText = "";
            rubricCostTransport.innerText = '';
            currentCostOfTransport = 0;
            updateSum();
        }
        //This event is for add cost of transport to summary panel.
    });
});