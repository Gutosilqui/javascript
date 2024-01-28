function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){
        //BOM DIA
        img.src = 'manhã.webP'
        document.body.style.background = '#f1caaf'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.webP'
        document.body.style.background = '#e69242'
    } else if (hora >= 18 && hora <= 23.59){
        //BOA NOITE
        img.src = 'noite.webP'
        document.body.style.background = '#313d45'
    } else if (hora >= 0 && hora < 6){
        //BOA MADRUGADA
        img.src = 'madrugada.webP'
        document.body.style.background = '#152f3a'
    }
}

