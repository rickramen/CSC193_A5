function Bigger(){
    document.getElementById("text").style.fontSize = "24pt";
}

function ChangeStyle(){
    let textField = document.getElementById("text");
    let fancy= document.getElementById("FancyShmancy");

    if(fancy.checked){
        textField.style.fontWeight = "bold";
        textField.style.color = "blue";
        textField.style.textDecoration = "underline";
    } 
    else{
        textField.style.fontWeight = "normal";
        textField.style.color = "black";
        textField.style.textDecoration = "none";
    }
    
}

function Moo(){
    let textField = document.getElementById("text");
    textField.value = textField.value.toUpperCase();

    var parts = textField.value.split(".");
    parts = parts.join("-Moo.");
    textField.value = parts;

}