var data = new Date
var hora = data.getHours()
var main = window.document.querySelector('main')
var header = window.document.querySelector('header')
var img = window.document.createElement('img')

if(hora >= 5 && hora <= 12) {
    window.document.body.style.backgroundColor = '#E5D792'
    main.style.boxShadow = '5px 5px 5px rgba(176, 165, 112, 0.53)'
    header.style.textShadow = '5px 5px 5px rgba(176, 165, 112, 0.53)'
    img.setAttribute('src', 'foto/manha.png')
} else if(hora > 12 && hora < 18){
    window.document.body.style.backgroundColor = '#C07757'
    main.style.boxShadow = '5px 5px 5px #774a3780'
    header.style.textShadow = '5px 5px 5px #774a3780'
    img.setAttribute('src', 'foto/tarde.png')
} else if((hora >= 18 && hora <= 23) || (hora < 5)){
    window.document.body.style.backgroundColor = '#5B5B5B'
    main.style.boxShadow = '5px 5px 5px rgba(52, 52, 52, 0.61)'
    header.style.textShadow = '5px 5px 5px rgba(52, 52, 52, 0.61)'
    img.setAttribute('src', 'foto/noite.png')
}
main.innerHTML = `<p id="h">Agora são ${hora} horas.</p>`
main.appendChild(img)