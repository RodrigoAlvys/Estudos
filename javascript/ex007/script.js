function verificador() {
    var res = window.document.querySelector('div#res')
    var sex = window.document.getElementsByName('sex')
    var dat = new Date
    var ano = dat.getFullYear()
    var nasc = window.document.getElementById('nas').value
    var idade = Number(ano) - nasc
    var gen = ''
    var img = window.document.createElement('img')
    img.setAttribute('id', 'img')
    if(nasc <= ano){
        if(sex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto/nene m.png')
            } else if(idade < 18){
                img.setAttribute('src', 'foto/Adolescente m.png')
            } else if(idade < 50){
                img.setAttribute('src', 'foto/adulto.png')
            } else{
                img.setAttribute('src', 'foto/Idoso.png')
            }
        } else if(sex[1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto/nene f.png')
            } else if(idade < 18){
                img.setAttribute('src', 'foto/adolecente f.png')
            } else if(idade < 50){
                img.setAttribute('src', 'foto/adulta.png')
            } else{
                img.setAttribute('src', 'foto/Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos uma ${gen} com ${idade} anos.</p>`
        if(idade < 150){
            res.appendChild(img)
        } else{
            res.innerHTML += '<video poster="M de misterio/images.jpg" controls><source src="M de misterio/Esqueleto Bailando.webm" type="video/webm"></video>'
        }
    } else{
        window.alert('[ERROR] As informações inseridas são invalidas, por favor tente novamente')
    }
}