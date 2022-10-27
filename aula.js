// let hora = 12.59;

// if (hora > 6 && hora < 12){
//     console.log('Bom dia');
// }
//  else if(hora > 12 && hora < 18) {
//     console.log('Boa tarde');
//  }
//  else {
//     console.log('Boa noite');
//  }

// let permissão;
// permissão = 'presidente'

// switch (permissão) {
//     case 'comum':
//         console.log('Usuario comum');
//         break;

//     case 'gerente':
//         console.log('Usuario Gerente');
//         break;

//     case 'presidente':
//         console.log('Usuario Presitente');
//         break;

//     default:
//         console.log('Usuario não permitido');
// }
///

// For
// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }

// }

// const pessoa = {
//     nome: 'alex',
//     idade: 25
// };

// for(let chave in pessoa) {
//     console.log(chave,pessoa['nome']);
// }

// const cores = ['vermelho','azul','verde','amarelo'];

// for (let indice in cores) {
//     console.log(indice,cores[indice]);
// }

// for (let cor of cores){
//     console.log(cor);
// }

// let numero1 = 7;
// let numero2 = 4;

// function maiorNumero() {
//     if (numero1 > numero2) {
//         console.log('O maior número é:', numero1);
//     }
//     else {
//         console.log(numero2);
//     }
// }

// maiorNumero();

// //////

// let valorMaior = max(5, 9);
// console.log(valorMaior);

// function max(numero1, numero2) {
//     if (numero1 > numero2)
//         return numero1;
//         return numero2;
// }

// let valorMaior = max(5, 9);
// console.log(valorMaior);

// function max(numero1, numero2) {
//     return numero1 > numero2 ? numero1 : numero2;
// }

// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => retorna a entrada
// Não é um numero =>'Não é um numero'

// const resultado = fizzBuzz(2);
// console.log(resultado);

// function fizzBuzz(entrada) {
//     if (typeof entrada !== 'number') {
//         return 'Não é um numero';
//     }
//     if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
//         return ('FizzBuss');
//     }
//     if (entrada % 3 === 0) {
//         return ('Fizz');
//     }
//     if (entrada % 5 === 0) {
//         return ('Buzz');
//     }

//     return entrada;
// }

// verificarVelocidade(100)

// function verificarVelocidade(velocidade) {
//     if (velocidade <= 70)
//         console.log('velocidade Ok');
//     else {
//         const pontos = ((velocidade - 70) / 5);
//         if (pontos >= 12) {
//             console.log('Carteira Suspensa');
//         }
//         else console.log('Pontos', pontos);
//     }

//     return ('Fizz');
// }
//     if (entrada % 5 === 0) {
//         return ('Buzz');
//     }
//     return entrada;
// }

// verificarVelocidade(100);

// function verificarVelocidade(velocidade){
//     const velMax = 70;
//     const kmporPonto = 5
//     if (velocidade <= velMax)
//         console.log('Velocidade OK');
//     else {
//         const pontos = Math.floor(((velocidade - velMax) / kmporPonto));
//         if (pontos >=12)
//         console.log('Carteira suspensa');
//         else
//             console.log('Pontos', pontos);
//     }
// }
// exibirTipo(8)
// function exibirTipo(limite) {
//     for (let i = 0; i <= limite; i++) {
//         if (i % 2 === 0)
//             console.log(i, "PAR");
//         else {
//             console.log(i, "IMPAR");
//         }
//     }
// }
// exibirTipo(10)
// function exibirTipo(obj){
//     if(typeof obj !== 'number')
//     console.log('O Objeto',obj,'é uma String')
//         else
//         console.log('O Objeto',obj,'é um numero');
//}

// const filme = {
//     titulo: 'Avengers',
//     Ano: 2022,
//     Diretor: 'Tony Stark'
// }
// exibirTipo(filme)
// function exibirTipo(obj) {
//     for (let prop in obj)
//     if (typeof obj[prop] === 'string') {
//             console.log(prop,obj[prop]);
//     }
// }
// const filme = {
//     titulo: 'Avengers',
//     Ano: 2022,
//     Diretor: 'Tony Stark'
// }
// exibirTipo(filme)
// function exibirTipo(obj) {
//     for (let prop in obj)
//     if (typeof obj[prop] === 'string') {
//             console.log(prop,obj[prop]);
//     }
// }

// var fatorial = 4;
// var resultado = fatorial;
// for (var i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado);

// const idades = [15+46+75+34+23];
// let total = 0;

// for (let i in idades) {
//     total = total + idades;
//     console.log('total', total);
// }

// let chute = 5;
// let valor_gerado = 5;

// if (chute === valor_gerado) {
//     console.log('Acertou!!');
// }
// else if (chute < valor_gerado) {
//     console.log('Chutou abaixo!!');
// }
// else
//     console.log("chutou Acima!!!");

// somar(5);
// function somar(limite) {
//     let multiplosDe3 = 0;
//     let multiplosDe5 = 0;

//     for (i = 0; i <= limite; i++){
//         if(i % 3 === 0)
//             multiplosDe3 += i;
//         if(i % 5 === 0)
//         multiplosDe5 += i;
//     }

//     console.log(multiplosDe3 + multiplosDe5);
// }

// const array = [90,70,80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas) {
//     const media = calcularMedia(notas);

//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'B';
//     return 'A';
// }

// function calcularMedia(array) {
//     let soma = 0;
//     for (let valor of array){
//         soma += valor;
//     }
//     return soma / (array.length);
// }

// exibirAsteriscos(10);
// function exibirAsteriscos(linhas) {
//     // let padrao = '';
//     // for (let linha = 1; linha <= linhas; linha++) {
//     //     padrao += '*';
//     //     console.log(padrao);
//     // }

//     for(let linha =1; linha <=linhas; linha++){
//         let padrao ='';
//         for(let i =1; i<=linha; i++) {
//             padrao += '*';
//         }
//         console.log(padrao);
//     }
// }

//Factory Functions (Função de Fábrica)
// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar() {
//             console.log("fazendo ligação...")
//         }
//     }
// }

// const celular1 = criarCelular('Zenfone', 5.7, 4500);
// console.log(celular1);

// function criarObjeto(nome, idade, turma) {
//     return {
//         nome,
//         idade,
//         turma,
//     }
// }

// const aluno1 = criarObjeto('Alex', 29, '3b');
// console.log(aluno1);

//  function criarAluno(nome, idade, sexo){
//     return {
//         nome,
//         idade,
//         sexo,
//     }
//  }

// const aluno1 = criarAluno('Alex', 29, 'Masculino');
// const aluno2 = criarAluno('Flavia', 32, 'Feminino');
// let Alunos = [aluno1, aluno2]

// console.log(Alunos[1].idade);

// function myName (name) {
//     console.log('Antes da callback');
//     name();
//     console.log('depois da callback');
// }

// myName(
//     () => {
//         console.log('Estou em uma callback')
//     }
// )

// let myArray = {
//     name:'Alex',
//     age: 29,
//     sex: 'man'

// };

// console.log(`meu nome é ${myArray.name} e minha idade é ${myArray.age}`);

// let myArray2 = new Array ({
//     name: 'Alex',
//     age: 29,
//     sex: 'man'
// });

// console.log(`meu nome é ${myArray2[0].name} e minha idade é ${myArray2[0].age}`)

// let name = new String ('Alex');
// const temp = 36
// function medirTemperatura(){
//     if(temp <=36){
//         console.log('Temperatura ok')
//     }
//     else
//     console.log('temperatura alta!!!!')
// }

// function calculadora(number1, operator, number2) {
//   let resultado;
//   switch (operator) {
//     case "+":
//       resultado = number1 + number2;
//       break;
//     case "-":
//       resultado = number1 - number2;
//       break;
//     case "*":
//       resultado = number1 * number2;
//       break;
//     case "/":
//       resultado = number1 / number2;
//       break;
//     default:
//       console.log("Operador não encontrado");
//   }
//   return resultado;
// }

// console.log(calculadora(25, "@", 2));

// function nome(name = ''){
//     if(name === ''){
//         throw 'obrigatorio digitar um nome'
//     }
//     console.log(name)
// }

// try {
//     nome('alex')
// } catch (e) {
//     console.log(e)
// }

// console.log('após o try catch')

// function notaAluno(nota) {
//   if (nota <= 60) return "F";

//   if (nota <= 69) return "D";

//   if (nota <= 79) return "C";

//   if (nota <= 89) return "B";
//   else return "A";
// }

// console.log(notaAluno(-1));

// let balanco = {
//     receitas: [150, 300, 450.23, 600],
//     despesas: [200, 100, 3320.22]
// }
// function soma(array) {
//     let total = 0;

//     for (let valor of array) {
//         total += valor
//     }
//     return total;
// }

// function calculoFinanceiro() {
//     const calculoReceitas = soma(balanco.receitas);
//     const calculoDespesas = soma(balanco.despesas);
//     const total = calculoReceitas - calculoDespesas;

//     if (total <= 0) {
//         balancoTexto = 'Negativo';
//     }
//     else balancoTexto = 'Positivo';

//     console.log(`Seu saldo atual é ${balancoTexto}:R$${total.toFixed(2)}`);
// }

// calculoFinanceiro();

// function transformDegree(degree) {
//     const celsiusExists = degree.toUpperCase().includes('C');
//     const fahrenheintExists = degree.toUpperCase().includes('F');

//     if (!celsiusExists && !fahrenheintExists) {
//         throw new Error('Grau não identificado')
//     }

//     //Fluxo F to C

//     let updateDegree = Number(degree.toUpperCase().replace("F", ""));
//     let formula = fahrenheint => (fahrenheint - 32) * 5 / 9;
//     let degreeSign = 'C';


//     //Fluxo C to F
//     if (celsiusExists) {
//         updateDegree = Number(degree.toUpperCase().replace("C", ""));
//         formula = celsius => celsius * 9/5 + 32;
//         degreeSign = 'F';
//     }
//     return formula(updateDegree).toFixed(2) + degreeSign;
// }

// try {
//     console.log(transformDegree('21C'));
//     console.log(transformDegree('70F'));
//     transformDegree('50z')
// } catch (error) {
//     console.log(error)
// }


/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

// const booksByCategory = [
//     {
//         category: "Riqueza",
//         books: [
//             {
//                 title: "Os segredos da mente milionária",
//                 author: "T. Harv Eker",
//             },
//             {
//                 title: "O homem mais rico da Babilônia",
//                 author: "George S. Clason",
//             },
//             {
//                 title: "Pai rico, pai pobre",
//                 author: "Robert T. Kiyosaki e Sharon L. Lechter",
//             },
//         ],
//     },
//     {
//         category: "Inteligência Emocional",
//         books: [
//             {
//                 title: "Você é Insubstituível",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Ansiedade – Como enfrentar o mal do século",
//                 author: "Augusto Cury",
//             },
//             {
//                 title: "Os 7 hábitos das pessoas altamente eficazes",
//                 author: "Stephen R. Covey",
//             },
//         ],
//     },
// ];

// const totalCategories = booksByCategory.length;

// for (let category of booksByCategory) {
//     console.log('Total de livros da categoria:', category.category)
//     console.log(category.books.length)
// }

// function countAuthors() {
//     let authors = [];

//     for (let category of booksByCategory) {
//         for (let book of category.books) {
//             if (authors.indexOf(book.author) == -1) {
//                 authors.push(book.author)
//             }
//         }
//     }
//     console.log('Total de autores:', authors.length);
// }

// countAuthors();

// function booksOfAuthor(author) {
//     let books = [];

//     for (let category of booksByCategory) {
//         for (let book of category.books) {
//             if (book.author === author) {
//                 books.push(book.title)
//             }
//         }
//     }
//     console.log(`Livros do Autor ${author}: ${books.join(", ")}`);
// }

// booksOfAuthor('Augusto Cury');

// let endereco = {
//     rua:'Mecia Figueiredo morais,12',
//     cidade:'Varginha MG',
//     CEP:'37004-330'
// }

// function exibirEndereco (endereco) {
//     for(let chave in endereco)
//     console.log(chave,endereco[chave]);
// }

// exibirEndereco(endereco)

// const numeros = new Array (1,2,3);

// numeros.unshift(0);
// console.log(numeros)
// numeros.splice(2,0,'c')
// console.log(numeros)
// numeros.push(7)
// console.log(numeros)
const n1 = document.getElementsByClassName("inputn1");
const n2 = document.getElementsByClassName("inputn2");
const n3 = document.getElementsByClassName("inputn3");
const retorno = document.getElementById("retorno")
const btn = document.querySelector ("button")

btn.addEventListener("click", verificarTriangulo(n1, n2, n3));

function verificarTriangulo(n1, n2, n3) {
    if ((n1 + n2 > n3) && (n1 + n3 > n2) && (n2 + n3 > n1)) {
        retorno.textContent = "Medidas informadas formam um triangulo."
    } else
        retorno.textContent = "Medidas informadas não formam um triangulo."
};


