window.onload = function () {
     
       
   
    document.getElementById("button").onclick = function () {
    //get value of text box
    var str = document.getElementById("inputTxt").value;
    
    function cap(e) { 
         //convert to upper case and store in up
         var up = str.toUpperCase();
         return up;
    };
        
    function rev(e) {  
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

    function doit(e) { 
        var revStr = rev(str);
        var capStr = cap(str);
        var revcap = revStr+capStr;
        return (revcap);
    };


    
        //document.getElementById("outTxt").innerHTML = do(str);
        console.log(doit(str));  
    };
    
        //console.log(cap(str)); 
        //console.log(rev(str));
        //document.getElementById("outTxt").innerHTML; 

    
};  