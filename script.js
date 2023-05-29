//Factory functions and constructury functions

const criarPessoas = (nome, sobrenome, alt, pes) => {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`   //Este this não é necessário
        },

        altura: alt,
        peso: pes,

        get IMC() {
            let peopleIMC = this.peso / (alt * alt);
            return peopleIMC.toFixed(2)
        } 
    }
}
let P1 = criarPessoas('Tayane', 'Cristina', '1.59', '53')
console.log(`${P1.nomeCompleto} seu IMC é de ${P1.IMC}`)

let P2 = criarPessoas('Márcia', 'Alves', '1.57', '70')
console.log(`${P2.nomeCompleto} seu IMC é de ${P2.IMC}`)