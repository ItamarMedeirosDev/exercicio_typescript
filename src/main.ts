function multiplicar(a: number, b: number): number {
  return a * b;
}

function dizOi(nome: string): string {
  return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = dizOi("Maria"); 

console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
