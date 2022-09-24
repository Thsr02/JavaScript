const hours = new Date().toLocaleTimeString()
console.log(`Agora são exatamente ${hours} horas.`)
if(hours < 5){
    console.log(`Boa Madrugada`)
}else if(hours < 12){
    console.log(`Bom dia`)
}else if(hours == 12){
    console.log(`Meio dia e meia`)
}else if(hours < 18){
    console.log(`Boa Tarde`)
}else{
    console.log(`Boa noite`)
}