// RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

    cinco fatorial sendo multiplicado

5! = 5 x 4 x 3 x 2 x 1

    cinco fatorial sendo multiplicado
    por 4 fatorial é o mesmo 5 fatorial
    sendo multiplicado até chegar o 1

5! = 5 x 4!

n! = n * (n-1)!
1! = 1

*/