function calcular(){
    let num = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO]Impossivel gerar a tabuada!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}