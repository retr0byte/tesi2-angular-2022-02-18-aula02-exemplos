export class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  getGreeting() {
    return `Olá, ${this.greeting}`;
  }
}
