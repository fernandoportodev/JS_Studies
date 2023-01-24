const notas = [10, 6, 8, 5.5, 10];

notas.pop();

soma = (n1, n2, n3, n4) => {
    soma = (n1+n2+n3+n4)/4
    console.log(`A média é: ${soma}`)
}

soma(notas[0], notas[1], notas[2], notas[3]);