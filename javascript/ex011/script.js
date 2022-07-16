window.document.getElementById('gerar').addEventListener('click', tabuada)

function tabuada(){
    let num = window.document.getElementById('num').value
    let tabu = window.document.getElementById('tabu')

    if(num.length != 0) {
       tabu.innerHTML = ''
        for(let x=1; x<=10; x++){
            let item = window.document.createElement('option')
            item.text = `${Number(num)} X ${x} = ${Number(num)*x}`
            item.value = `tab${x}`
            tabu.appendChild(item)
        }
    } else{
        window.alert('[ERROR] Por favor digite um número para a tabuada')
    }
}