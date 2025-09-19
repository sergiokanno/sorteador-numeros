function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(sorteados);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}