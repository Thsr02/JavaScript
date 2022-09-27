function contar(){
let num = [39,1,14,223]
let impar = []
let res = document.getElementById('res')
let menor = `Não Possui Números Impares`
    for(j = 0; j < num.length; j++){
        if(num[j] %2 !=0){
            impar += num[j] 
            for(i=0;i<impar.length;i++){
                if(impar[i] < menor){
                    menor = impar[i]
                }
            }   
        }
    }
   
    res.innerHTML = `${menor}`

    
}
