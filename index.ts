// Import stylesheets
import { Greeter } from './greeter';
import './style.css';

// Declaração de constantes
// Em declaração de constantes ñ é necessário definir o tipo
const myVar1: number = 42;
const myVar2 = 42;

// Declaração de variáveis
let myVar3: number = 123;
let myVar5: string = 'Olá';

let mySentence: string = `

  Blablabla

`;

// Declarando arrays
let list: number[] = [1, 2, 3];

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

// Declarando funções
function soma(n1: number, n2: number): number {
  return n1 + n2;
}

function getFullName(pessoa: { name: string; lastName: string }): string {
  return pessoa.name + ' ' + pessoa.lastName;
}

// Eventos
function alertTsMethod(this: HTMLElement, ev: Event): void {
  alert('Alerta usando typescript');
}

// Utilizando classes externas
// precisa usar o import
let saudacao = new Greeter('Retr0byte');
saudacao.getGreeting();

// A interrogação antes de chamar o evento funciona como
// um window.onload, ela indica que o evento está sendo add
// em um elemento que só será criado, após a DOM carregar.
const btn = document.getElementById('appBtn');
btn?.addEventListener('click', alertTsMethod);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>Meu TypeScript Starter</h1>
`;
