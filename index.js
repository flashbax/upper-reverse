window.onload = function () {      
   
    document.getElementById("button").onclick = function () {
    //get value of text box
    var str = document.getElementById("inputTxt").value;
    
        function cap(upit) { 
            //convert to upper case and store in up
            var up = str.toUpperCase();
            return up;
        };
            
        function rev(revit) {  
            //get length of string from text box    
            var len = str.length;
            //create empty array for string
            var arr = []; 
            //loop trough each char
            for (var i = 0; i<=len; i++) { 
                arr.push(str.charAt(len - i));
            }
            return arr.join('');
        };

        function make(makeit) { 
            var revStr = rev(str);
            var capStr = cap(str);
            //combines functions to display both capital and reverse chars
            var revcap = revStr+capStr;
            return (revcap);
        };

        //put output into label
        document.getElementById("outTxt").innerHTML = make(str);
    }; 
    
};  