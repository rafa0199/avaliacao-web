function dividirNumeros() {

    let num1 = parseFloat(document.getElementById("divNum1").value);

    let num2 = parseFloat(document.getElementById("divNum2").value);

    let resultado;

    if (num2 === 0) {

        resultado = "O divisor não pode ser zero!";

    } else {

        resultado = "Resultado: " + (num1 / num2);

    }

    document.getElementById("resultadoDivisao").innerText = resultado;

}

function calcularMedia() {

    let nota1 = parseFloat(document.getElementById("nota1").value);

    let nota2 = parseFloat(document.getElementById("nota2").value);

    let nota3 = parseFloat(document.getElementById("nota3").value);

    let nota4 = parseFloat(document.getElementById("nota4").value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    let resultado = media >= 6 ? "Aprovado" : "Retido";

    document.getElementById("resultadoMedia").innerText = "Média: " + media + " - " + resultado;

}

function verificarSoma() {

    let A = parseFloat(document.getElementById("A").value);

    let B = parseFloat(document.getElementById("B").value);

    let C = parseFloat(document.getElementById("C").value);

    let soma = A + B;

    let resultado = soma < C ? "A soma é menor que C" : "A soma não é menor que C";

    document.getElementById("resultadoSoma").innerText = "A + B = " + soma + " - " + resultado;

}

function calcularArea() {

    let base = parseFloat(document.getElementById("base").value);

    let altura = parseFloat(document.getElementById("altura").value);

    let area = base * altura;

    document.getElementById("resultadoArea").innerText = "Área do Retângulo: " + area;

}

function calcularNovoSalario() {

    let salario = parseFloat(document.getElementById("salario").value);

    let reajuste = parseFloat(document.getElementById("reajuste").value);

    let novoSalario = salario + (salario * (reajuste / 100));

    document.getElementById("resultadoSalario").innerText = "Novo Salário: " + novoSalario;

}

function verificarValor() {

    let valor = parseFloat(document.getElementById("valor").value);

    let mensagem = valor > 10 ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!";

    document.getElementById("resultadoValor").innerText = mensagem;

}