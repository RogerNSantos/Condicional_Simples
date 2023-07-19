/* Objetivo: Ler dois valores, independentemente da ordem em que foram digitados, e apresentá-los em ordem
crescente. Será necessário efetuar a troca de valores, por isso, recomendamos definir uma terceira variável.
*/

/* Definindo as variáveis */
var num1;
var num2;
var num3;

/* Entrada de dados */
num1 = parseInt(window.prompt('Digite o primeiro número:', '00'));
num2 = parseInt(window.prompt('Digite o segundo número', '00'));

/* Saída de dados sem classificação */
document.write('Primeiro número digitado = ' + num1);
document.write('<br>Segundo número digitado = ' + num2);

/* Saida de dados com classificação por decisão condicional simples (if) */
if (num1 > num2) {
    num3 = num1;
    num1 = num2;
    num2 = num3;
}

document.write('<p><n>Classificação em ordem crescente:</b> ' + num1 + ' e ' + num2);