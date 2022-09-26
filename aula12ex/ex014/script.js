
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = 19
    //var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'dia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18 ){
        // boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        // boa noite 
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'   
    }
}
