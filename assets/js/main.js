document
  .getElementById("imc-form")
  .addEventListener("submit", handleFormSubmit);

// Constantes para limites de IMC
const CATEGORIAS_IMC = [
  { limite: 18.5, mensagem: "Abaixo do peso" },
  { limite: 24.9, mensagem: "Peso normal" },
  { limite: 29.9, mensagem: "Sobrepeso" },
  { limite: 34.9, mensagem: "Obesidade grau I" },
  { limite: 39.9, mensagem: "Obesidade grau II" },
  { limite: Infinity, mensagem: "Obesidade grau III" }, // Para IMC >= 40
];

// Função principal para lidar com o envio do formulário
function handleFormSubmit(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const peso = obterPeso();
  const altura = obterAltura();

  // Verifica se os dados são válidos antes de calcular o IMC
  if (!peso || !altura) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  const imc = calcularIMC(peso, altura);
  const resultado = determinarCategoriaIMC(imc);

  setResultado(resultado, imc);
}

// Função para obter o peso do input
function obterPeso() {
  return parseFloat(document.getElementById("peso").value);
}

// Função para obter a altura do input
function obterAltura() {
  return parseFloat(document.getElementById("altura").value) / 100; // Converte cm para m
}

// Função para calcular o IMC
function calcularIMC(peso, altura) {
  return peso / altura ** 2;
}

// Função para determinar a categoria do IMC
function determinarCategoriaIMC(imc) {
  for (const categoria of CATEGORIAS_IMC) {
    if (imc <= categoria.limite) {
      return categoria.mensagem;
    }
  }
}

// Função para definir o resultado no innerHTML
function setResultado(mensagem, imc) {
  const resultadoContainer = document.getElementById("resultado");
  const resultadoParagrafo = criarElementoParagrafo(
    `Seu IMC é ${imc.toFixed(2)}: ${mensagem}`
  );

  // Limpa resultados anteriores e adiciona o novo parágrafo
  resultadoContainer.innerHTML = ""; // Limpa o container
  resultadoContainer.appendChild(resultadoParagrafo); // Adiciona o novo parágrafo
}

// Função para criar uma tag <p>
function criarElementoParagrafo(texto) {
  const paragrafo = document.createElement("p");
  paragrafo.innerText = texto;
  return paragrafo;
}
