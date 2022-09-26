function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
    let n = Number(num.value)
    tab.innerHTML = ''
    for(let i = 1; i <= 10; i++){
        let item = document.createElement('option') // cria um <option> dentro do seletc
        item.text = `${n} x ${i} = ${n*i}` // valor dentro do option criado que ira ser mostrado
        item.value = `tab${i}` // valor de cada um dos option criados,
        tab.appendChild(item) // para mostrar, appendchild adiciona um elemento filho que sera a variavel
    }
    }
}