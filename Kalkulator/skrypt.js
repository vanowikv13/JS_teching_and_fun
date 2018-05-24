//Sign of operation
let operation;
//hiden data when operation is working on
let hidenData;
//when program is in operation
let isInOperation = false;
//when data have comma
let comma = false;
//checking if program now is in prime function
let primeStatus = false;

function checkIfPrime(x) {
    if (x < 2)
        return (x + " isn't prime");

    for (let i = 2; i < Math.sqrt(x) + 1; i++) {
        if (x % i == 0 && i != x) {
            return (x + " isn't prime");
        }
    }
    return (x + " is prime");
}

//return result of operation (data of first value, data of second value, operation)
function doOperation(data1, data2, sign) {
    switch (sign) {
        case "+":
            return data1 + data2;
        case "-":
            return data1 - data2;
        case "/":
            return data1 / data2;
        case "*":
            return data1 * data2;
        default:
            return "Operation is wrong";
    }
}

function sendData(x) {
    //take actual data screan
    let actualData = Number(document.getElementById("pole").innerHTML);

    //checking if value is a number
    if (!isNaN(parseFloat(x))) {
        if (document.getElementById("pole").innerHTML[0] == 0 && comma == false) {
            document.getElementById("pole").innerHTML = x;
            primeStatus = false;
        } else
            document.getElementById("pole").innerHTML += x;
        comma == false;
    } else {
        if (x == '=') {
            if (isInOperation) {
                //return result of operation
                document.getElementById("pole").innerHTML = doOperation(hidenData, actualData, operation);
                comma = false;
            }
        } else if (x == "prime") {
            primeStatus = true;
            if (!isNaN(actualData) && actualData.toString().indexOf('.') != -1) {
                document.getElementById("pole").innerHTML = "ERROR";
            } else {
                document.getElementById("pole").innerHTML = checkIfPrime(parseInt(actualData));
            }

        } else if (x == "_")
            document.getElementById("pole").innerHTML = -Number(actualData);
        else if (x == ".") {
            document.getElementById("pole").innerHTML += x;
            comma = true;
        } else if (x == "sqrt")
            document.getElementById("pole").innerHTML = Math.sqrt(actualData);
        else if (x != "CE") {
            operation = x;
            isInOperation = true;
            if (isInOperation)
                hidenData = Number(actualData);
            document.getElementById("pole").innerHTML = 0;
            comma = false;
        } else if (x == "CE") {
            document.getElementById("pole").innerHTML = 0;
            isInOperation = false;
        }
    }
}
