let notas = [];
let contador = 0;

const campoNota = document.getElementById('nota');
const botaoAdicionar = document.getElementById('botao-adicionar');
const caixaNotas = document.getElementById('caixa-notas');
const botaoMedia = document.getElementById('botao-media');
const resultadoMedia = document.getElementById('resultado-media');

// Botão "Adicionar"
botaoAdicionar.addEventListener('click', function () {
  let texto = campoNota.value.trim();

  if (texto === '') {
    alert('Por favor, insira uma nota.');
    return;
  }

  texto = texto.replace(',', '.');
  let nota = parseFloat(texto);

  if (isNaN(nota)) {
  alert('A nota digitada é inválida, por favor, insira uma nota válida.');
  campoNota.value = '';
  return;
}

if (nota < 0 || nota > 10) {
  alert('A nota digitada deve estar entre 0 e 10.');
  campoNota.value = '';
  return;
}

  notas.push(nota);
  contador++;

  caixaNotas.value += `Nota ${contador}: ${nota.toFixed(2)}\n`;

  campoNota.value = '';
  campoNota.focus();
});

// Botão "Calcular Média"
botaoMedia.addEventListener('click', function () {
  if (notas.length === 0) {
    alert('Adicione pelo menos uma nota.');
    return;
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  let media = soma / notas.length;
  resultadoMedia.innerText = media.toFixed(2);

  // Apagar textarea após cálculo
  caixaNotas.value = '';
    notas = [];
    contador = 0;
});

// Extra: Enter adiciona nota
campoNota.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    botaoAdicionar.click();
  }
});
