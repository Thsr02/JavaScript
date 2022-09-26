function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')
        
     if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados a serem preenchidos no formulario')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            window.alert('Passo inválido! Sera considerado PASSO 1')
            p =1
        }

        if(ini < f){
            //contagem crescente
            for(let c = ini; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{
            // contagem regressiva
            for(let c = ini; c >= f; c -=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }

            
            res.innerHTML += `\u{1F3C1}`
     }
       
}