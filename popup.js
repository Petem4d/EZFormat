document.getElementById("formButt").addEventListener("click", formFunc);
document.getElementById("resetButt").addEventListener("click", resendText);



var txt = " "
function formFunc(){
    txt = document.getElementById("formatBox").value;
    var checks = document.getElementsByName("option");
    if(checks[0].checked){
        txt = removeWhitespace();
    }
    else if(checks[1].checked){
        txt = removeSpecifics();
    }
    else if(checks[2].checked){
        normalizeFont();
    }
    document.getElementById("demo").innerHTML = txt;

    resetButt = document.getElementById("resetButt");
    resetButt.removeAttribute("hidden");
}

function removeWhitespace(){
    return txt.replace(/\s+/g, ' ').trim();
}
function removeSpecifics(){
    var target = document.getElementById("removeBox").value;
    return (txt).replaceAll(target, "");
}
function normalizeFont(){
    var fontSelect = document.getElementById("diffFonts")
    var selectedValue = fontSelect.options[fontSelect.selectedIndex].value
    /*
    if(selectedValue = "same"){
        return;
    }
    */
    document.getElementById("demo").style.fontFamily = selectedValue;
    
    //var fontSize = document.getElementById("sizeBox").value;
    //document.getElementById("demo").style.fontSize = fontSize;
}

function resendText(){
    console.log(txt);
    document.getElementById("formatBox").value = txt;
    resetButt.setAttribute("hidden", "hidden");
    document.getElementById("demo").innerHTML = "";

}

