var sexy = document.getElementsByName('sexo')
var data = new Date()
var anodesejado = document.getElementById('iano')
var anoatual = data.getFullYear()
var resultado = document.getElementById('resultado')


function res() {
    var idade = anoatual - Number(anodesejado.value)
    genero = ''
    var imagem = document.getElementById('foto')
    if(sexy[0].checked) {
        genero = 'Masculino'
        if(idade >= 0 && idade <10) {
        imagem.src = 'imagens/crianca-h.png'
    }else if (idade >= 10 && idade <= 18){
        imagem.src = 'imagens/jovem-h.png'
    } else if (idade > 18 && idade <= 50){
        imagem.src = 'imagens/homem.png'
    } else if (idade > 50){
        imagem.src = 'imagens/idoso.png'
    }
        
        
    } else if(sexy[1].checked){
        genero = 'Feminino'
        if(idade >= 0 && idade <10) {
            imagem.src = 'imagens/crianca-m.png'
        }else if (idade >= 10 && idade <= 18){
            imagem.src = 'imagens/jovem-m.png'
        } else if (idade > 18 && idade <= 50){
            imagem.src = 'imagens/mulher.png'
        } else if (idade > 50){
            imagem.src = 'imagens/idosa.png'
        }
    }

    resultado.innerHTML = 'Aqui temos uma gênero ' + genero + ' com idade de: ' + idade + ' ano(s).'
}




function cor() {
    if(sexy[0].checked) {
        document.body.style.backgroundColor = 'rgb(101, 101, 221)'
    } else if (sexy[1].checked) {
        document.body.style.backgroundColor = 'rgb(221, 101, 221)'
    }

}
