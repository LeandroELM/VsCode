function invertirCadena() {
    const inputText = document.getElementById("inputText").value;
    const resultado = document.getElementById("resultado");

    const cadenaInvertida = inputText.split("").reverse().join("");
    resultado.textContent = `Cadena invertida: ${cadenaInvertida}`;
}

function limpiar() {
    const inputText = document.getElementById("inputText");
    const resultado = document.getElementById("resultado");

    inputText.value = "";
    resultado.textContent = "";
}
