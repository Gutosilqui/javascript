let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num.push(1)
num.sort()
num.push(1)
console.log(num)
console.log(`A quarta posição é o ${num[3]}`)
console.log(`O vetor tem ${num.length} posições`)
let pos = num.indexOf(5)
console.log(`O valor esta na posição ${pos}`)













/*
formas de acrescentar um valor:
Ex: 

    let num = [5, 8, 4]

Acrescentando em um espaço especifico.

    num[3]=6
    let num = [5, 8, 4, 6]

Acrescentando no ultimo espaço.

    num.push(7)
    let num = [5, 8, 4, 6, 7]

Descobrir o comprimento dele.

    num.length

Para colocar os numeros em ordem crescente.

    num.sort()

Para você escrever esse vetor.

    console.log(num[0])
    console.log(num[1])
    etc
ou

    for{let pos = 0; pos < num.length; pos++}
        console.log(num[pos])
*/