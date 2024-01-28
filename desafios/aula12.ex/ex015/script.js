function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 15){
                img.setAttribute('src' , 'menino.webP')
            }else if(idade < 25){
                img.setAttribute('src' , 'moço.webP')
            }else if(idade < 35){
                img.setAttribute('src' , 'homem.webP')
            }else {
                img.setAttribute('src' , 'velho.webP')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 15){
                img.setAttribute('src' , 'menina.webP')
            }else if (idade < 25){
                img.setAttribute('src' , 'moça.webP')
            }else if(idade < 35){
                img.setAttribute('src' , 'mulher.webP')
            }else{
                img.setAttribute('src' , 'velha.webP')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectei um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}