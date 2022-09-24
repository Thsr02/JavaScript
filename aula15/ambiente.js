let num = [5,8,4]
num[3] = 6 // add no indice 3 o valor 6
num.push(7) // add o valor (7) dentro do vetor
num.sort() // ordenação
num.length // le quantos elementos a array tem "SEU TAMANHO"
console.log(num) // exibir
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vertor ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(1)
    if(pos == -1){
        console.log(`O Valor não foi encontrado!`)
    }else{
        console.log(`O valor está na posição ${pos}`)
    }