function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas.'
    if (hora > 4 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundImage = 'linear-gradient(to right, orange, white)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundImage = 'linear-gradient(to right, orange, yellow)'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundImage = 'linear-gradient(to right, grey 80%, white)'
    }

}