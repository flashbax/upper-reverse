window.onload = function () {

    //function to reverse and change text to upper case
    document.getElementById("button").onclick = function () {
        //get value of text box
        var str = document.getElementById("inputTxt").value; 
        //convert to upper case and store in up
        var up = str.toUpperCase();
        //get length of string from text box    
        var len = str.length;
        //display result in label
        document.getElementById("outTxt").innerHTML = up; 
         
        console.log(len); 
    };

    
};