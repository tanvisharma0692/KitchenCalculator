//99.99*10+3*50.99

function getTotalPrice() {
    if (isFormValid()) {
        document.getElementById("results").value = processTotal();
    }
}

function processTotal() {

    if (getSelectedOptionValue() === "Wall Cabinets") {
        if (getSelectedProductLine() === "Empire Standard") {
            return calculateTotal(99.99, 50.99)
        } else if (getSelectedProductLine() === "Kitchen Elite") {
            return calculateTotal(179.00, 79.99)
        } else if (getSelectedProductLine() === "Gold Star Plus") {
            return calculateTotal(200.99, 89.99)
        }
    } else if (getSelectedOptionValue() === "Base Cabinets") {
        if (getSelectedProductLine() === "Empire Standard") {
            return calculateTotal(69.99, 50.99)
        } else if (getSelectedProductLine() === "Kitchen Elite") {
            return calculateTotal(79.00, 79.99)
        } else if (getSelectedProductLine() === "Gold Star Plus") {
            return calculateTotal(99.99, 89.99)
        }
    } else if (getSelectedOptionValue() === "Counter Tops") {
        if (getSelectedProductLine() === "Empire Standard") {
            return calculateTotal(30.99, 50.99)
        } else if (getSelectedProductLine() === "Kitchen Elite") {
            return calculateTotal(189.99, 79.99)
        } else if (getSelectedProductLine() === "Gold Star Plus") {
            return calculateTotal(212.99, 89.99)
        }
    }



}

function calculateTotal(pricePerFoot, pricePerCornerUnit) {
    return pricePerFoot * getLinearFootage() + getCornerUnits() * pricePerCornerUnit
}

function getSelectedOptionValue() {
    var selections = document.getElementById("Select1")

    for (let index = 0; index < selections.options.length; index++) {
        const element = selections.options[index];
        if (element.selected === true) {
            return element.value
        }
    }
    return "";
}

function getSelectedProductLine() {
    if (document.getElementById("Kitchen Elite").checked === true) {
        return "Kitchen Elite"
    } else if (document.getElementById("Gold Star Plus").checked === true) {
        return "Gold Star Plus"
    } else if (document.getElementById("Empire Standard").checked === true) {
        return "Empire Standard"
    }
}

function getLinearFootage() {
    return document.getElementById("linearFootage").value
}

function getCornerUnits() {
    return document.getElementById("cornerUnits").value
}
function Select1_onclick() {
    if (getSelectedOptionValue() === "Counter Tops") {
        document.getElementById("cornerUnitsLabel").style.visibility = "hidden"
        document.getElementById("cornerUnits").style.visibility = "hidden"
        document.getElementById("image").src = "kitchens/counters.jpg"
    } else {
        document.getElementById("cornerUnitsLabel").style.visibility = "visible"
        document.getElementById("cornerUnits").style.visibility = "visible"

    }
    if (getSelectedOptionValue() === "Wall Cabinets") {
        document.getElementById("image").src = "kitchens/wall.jpg"

    } else if (getSelectedOptionValue() === "Base Cabinets") {
        document.getElementById("image").src = "kitchens/base.jpg"

    }

}

function isFormValid() {
    if (document.getElementById("linearFootage").value == "") {

        alert("Linear footage is required");
        return false
    } else if (document.getElementById("cornerUnits").value == "") {

        alert("Corner units is required");
        return false
    } else if (document.getElementById("linearFootage").value < 3 || document.getElementById("linearFootage").value > 50) {
        alert("Linear footage must be between 3 and 50")
        return false
    } else if (document.getElementById("cornerUnits").value < 0 || document.getElementById("cornerUnits").value > 5) {
        alert("The number of Corner Units must be from 0 to 5")
        return false  
    } else if(getSelectedOptionValue() === ""){
        alert("Error")
    }
    return true
}

function empireStandardClicked(){
    document.getElementById("image").style.border = "solid blue"
    document.getElementById("image").style.borderStyle = "dashed"
    document.getElementById("image").style.borderWidth = "6px"
}
function KitchenEliteClicked(){
    document.getElementById("image").style.border = "solid red"
    document.getElementById("image").style.borderWidth = "6px"

}
function GoldStarPlusClicked(){
    document.getElementById("image").style.border = "solid green"
    document.getElementById("image").style.borderWidth = "6px"

}

