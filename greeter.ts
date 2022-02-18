export class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  getGreeting() {
    console.log(`Olá, ${this.greeting}`);
  }
}
