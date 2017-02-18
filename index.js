window.onload = function () {
    
    //function to change text to upper case
    document.getElementById("button").onclick = function () {
        var str = document.getElementById("inputTxt").value; 
        var up = str.toUpperCase();
        //console.log(up);
        document.getElementById("outTxt").innerHTML = up; 
    };
};