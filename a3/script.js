function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Create each line on the Rhombus
        for (j = 0; j <= i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) // even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else // odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}

function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        // Create each line on the Rhombus
        for (j = 0; j < i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) // even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else // odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}

// New functions for upLeft and downLeft
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        rLine += "<p>";
        // Create each line on the Rhombus
        for (j = pHeight - 1; j > i; j--) {
            rLine += "&nbsp;"; // Add spaces for alignment
        }
        for (j = 0; j <= i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) // even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else // odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = pHeight; i > 0; i--) {
        rLine += "<p>";
        // Create spaces for alignment
        for (j = pHeight; j > i; j--) {
            rLine += "&nbsp;"; // Add spaces for alignment
        }
        for (j = 0; j < i; j++) {
            // Is the position even or odd so we change the color
            if (j % 2) // even
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else // odd
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        rLine += "</p>";
    }
    document.getElementById("downLeft").innerHTML = rLine;
}
