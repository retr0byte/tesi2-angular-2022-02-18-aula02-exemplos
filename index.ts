// Import stylesheets
import { Greeter } from './greeter';
import './style.css';

// Comentando com múltiplas linhas
/**
 * Várias linhas
 * de comentário
 */

// Declaração de constantes
// Em declaração de constantes definir o tipo é irrelevante
const myVar1: number = 42;
const myVar2 = 42;

// Declaração de variáveis
let myVar3 = 42;
let myVar4: number = 123;
let myVar5: string = 'Olá';

let mySentence: string = `

  Blablabla blablabla
  blablabla

`;

//Utilizando o console
console.log('Olá, mundo!');

// Declarando arrays
let list: number[] = [21, 2, 65, 55, 10, 98, 3, 9, 80, 42];

console.log('Laço:');
// Utilizando laços de repetição
for (let i = 0; i < 10; i++) {
  console.log(list[i]);
}

// Utilizando condicionais
if (myVar1 % 2 == 0) {
  console.log(myVar1 + ' é PAR');
} else {
  console.log(myVar1 + ' é ÍMPAR');
}

// Utilizando laços e condicionais
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i + ' é PAR');
  }
}

// Tipo enumerado (enums)
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// mais recomendado é utilizar com referências
// porque consome menos recursos do sistema/dispositivo
enum ColorWithReferences {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let c2: ColorWithReferences = ColorWithReferences.Green;

// Declarando any
let notSure: any = 42;
notSure = 'Maybe a string instead';
notSure = false; // definitivamente, é booleano

// Declarando função void
function aviso(): void {
  console.log('Mensagem de alerta!');
}
aviso();

// Declarando funções
function soma(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(soma(21, 21));

function getFullName(pessoa: { name: string; lastName: string }): string {
  return pessoa.name + ' ' + pessoa.lastName;
}
let p = { name: 'Gabriel', lastName: 'Castro' };
console.log(getFullName(p));

// Implementando um contador
let counter = 0;
let intervalId = setInterval(() => {
  counter++;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: ' + counter;
}, 1000);

let title: string = 'olá, mundo!';
let paragraph: string = 'Blablabla';

// Eventos
function alertTsMethod(this: HTMLElement, ev: Event): void {
  alert('Alerta usando typescript');
}

// Utilizando classes externas
// precisa usar o import
let saudacao = new Greeter('Mundo!');

// A interrogação antes de chamar o evento funciona como
// um window.onload, ela indica que o evento está sendo add
// em um elemento que só será criado, após a DOM carregar.
const btn = document.getElementById('appBtn');
btn?.addEventListener('click', alertTsMethod);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>${title}</h1>
  <p>${paragraph}</p>
  <div id='counterDiv'>${counter}</div>
  <div>${saudacao.getGreeting()}</div>
`;
