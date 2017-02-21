window.onload = function () {      
   
    document.getElementById("button").onclick = function () {
    //get value of text box
    var str = document.getElementById("inputTxt").value;
            
        //reverse
        function rev(revit) {  
            //get length of string from text box    
            var len = str.length;
            //create empty array for string
            var arr = []; 
            //loop through each char
            for (var i = 0; i<=len; i++) { 
                arr.push(str.charAt(len - i));
            }
            //output all array elements as one
            return arr.join('');
        };

        //print output of reverse funtion to label and convert to uppercase
        document.getElementById("outTxt").innerHTML = rev(str).toUpperCase();
    }; 
    
};  