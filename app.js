function encrypt() {
    let text = document.getElementById("inputText").value;
    if (!/^[a-z\s]*$/.test(text)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById("outputMessage").innerText = encryptedText || "Ningún mensaje fue encontrado";
    document.getElementById("inputText").value = "";
    
}

function decrypt() {
    let text = document.getElementById("inputText").value;
    if (!/^[a-z\s]*$/.test(text)) {
        alert("Solo se permiten letras minúsculas y espacios.");
        return;
    }
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("outputMessage").innerText = decryptedText || "Ningún mensaje fue encontrado";
    document.getElementById("inputText").value = "";
}

function copy(){
    let inputText = document.getElementById("outputMessage");
    inputText.select();
    document.execCommand("copy");
}