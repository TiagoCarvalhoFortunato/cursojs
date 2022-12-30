function gerar() {
    var valor = window.document.getElementById('inum')
    var res = window.document.getElementById('res')
    numero = Number(valor.value) 
    
    
    if (valor.value.length == 0) {
        window.alert('[ERRO] Por favor digite um valor')
    }else {
        res.innerHTML = ''
        for(c = 1; c <= 10; c++) {
        r = numero * c
        res.innerHTML += numero + ' x ' + c + ' = '+ r + '<br>'
        }
    }
    






}