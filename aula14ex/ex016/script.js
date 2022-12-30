function conta() {
    var ini = window.document.getElementById('inicio')
    var fi = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')


    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Por favor, preencha todos os dados')
    }else {
        res.innerHTML = 'Contando...<br>'
        i = Number(ini.value)
        f = Number(fi.value)
        p = Number (pas.value)


        if (p <= 0) {
            window.alert('O numero do PASSO convertido a 1')
            p = 1 //passo sempre acima de 1
        }

        if (i < f) {
            for(c = i; c <= f; c += p){
            res.innerHTML +=  ' ' + c + ' \u{1F449}'
            } // contagem com inicio > fim ... 
        }else {
            for (c = i; c >= f; c -= p){
                res.innerHTML += ' ' + c + ' \u{1F449}'

            } // contage, com fim > inicio ...
        }
    } res.innerHTML += '\u{1F596}'



}







