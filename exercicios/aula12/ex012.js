var agora = new Date()
var hora = agora.getHours()
    console.log(`Agora são ${hora} horas.`)
if (hora >= 0 && hora < 6){
    console.log('Agora é de madrugada!')
} else if (hora >= 6 && hora < 12){
    console.log('Agora é manhã!')
} else if (hora >= 12 && hora < 18){
    console.log('Agora é de tarde!')
} else if(hora >= 18 && hora <= 23.59){
    console.log('Agora é noite!')
}