let actualData;
let operation;
let hidenData;
let isInOperation = false;
let comma = false;

function sendData(x) {
    //take actual data from paragrap
    let actualData = Number(document.getElementById("pole").innerHTML);

    if(!isNaN(parseFloat(x))) {
        if(document.getElementById("pole").innerHTML[0] == 0 && comma == false)
            document.getElementById("pole").innerHTML = x;
        else
            document.getElementById("pole").innerHTML+= x;
        comma == false;
    } else {
        if(x == '=') {
            if(isInOperation) {
                //wykonywanie operacji
                console.log(operation);
                if(operation == "+")
                    document.getElementById("pole").innerHTML = hidenData + actualData;
                else if(operation == "-")
                    document.getElementById("pole").innerHTML = hidenData - actualData;
                else if(operation == "/")
                    document.getElementById("pole").innerHTML = hidenData / actualData;
                else if(operation == "*")
                    document.getElementById("pole").innerHTML = hidenData * actualData;
                else
                    console.log("Operator is wrong");  
                comma = false; 
            }
        }
        else if(x == ".") {
            document.getElementById("pole").innerHTML+= x;
            comma = true;
        }
        else if(x != "MRC") {
            operation = x;
            isInOperation = true;
            if(isInOperation)
                hidenData = Number(actualData);
            document.getElementById("pole").innerHTML = 0;
            comma = false;
        }
        else if(x == "MRC") { //  for MRC
            document.getElementById("pole").innerHTML = 0;
            isInOperation = false;
        }
    }
}