document
  .getElementById("imc-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value) / 100;

    // Calculo do IMC
    let IMC = peso / altura ** 2;
    let resultado = "";

    if (IMC < 18.5) {
      resultado = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      resultado = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.9) {
      resultado = "Sobrepeso";
    } else if (IMC >= 30 && IMC <= 34.9) {
      resultado = "Obesidade grau I";
    } else if (IMC >= 35 && IMC <= 39.9) {
      resultado = "Obesidade grau II";
    } else if (IMC >= 40) {
      resultado = "Obesidade grau III";
    }

    document.getElementById("resultado").innerText = `Seu IMC é ${IMC.toFixed(
      2
    )}: ${resultado}`;
  });
