//RECURSIVIDADE
// O FATORIAL DE UM NUMERO É SEMPRE O 
// O FATORIAL DE OUTRO NUMERO - 1
// N! = N X (N-1)  N = 5 X (5-1)
//                  N = 5 X 4
//                    N = 20


function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}