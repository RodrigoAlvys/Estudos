window.document.getElementById('botao').addEventListener('click', contador)

function contador(){
    var res = window.document.getElementById('res')
    var ini = window.document.getElementById('inic').value
    var fim = window.document.getElementById('fim').value
    var pass = window.document.getElementById('pass').value

    if(ini.length != 0 && fim.length != 0 && pass.length != 0){
        if(pass <= 0){
            pass = 1
            window.alert(`Passo invalido! considerando passo com valor de '1'`)
        }
        res.innerHTML = `Contando:<br>`
        if(Number(ini) < Number(fim)){
            for(let x=Number(ini); x<=Number(fim); x+=Number(pass)){
                res.innerHTML += `${x} &#128073  `
            }
        } else{
            for(let x=Number(ini); x>=Number(fim); x-=Number(pass)){
                res.innerHTML += `${x} &#128073  `
            }
        }
        res.innerHTML += `&#127937`
    } else{
        res.innerHTML = 'Impossivel de contar.'
    }
}
