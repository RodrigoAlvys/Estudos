window.document.getElementById('start').addEventListener('click', an)
window.document.getElementById('add').addEventListener('click', () => {
    add(n.value)
})

var nums = []
var n = window.document.getElementById('num')
var opc = window.document.getElementById('opc')

function add (x=-1) {
    if (x <= 0 || x > 100) {
        window.alert(`Por favor, digite um numero valido!`)
    } else if (nums.indexOf(Number(x)) == -1) {
        nums.push(Number(x))
        nums.sort(function(a, b){return a-b})
        let item = window.document.createElement('option')
        item.text = `Valor ${x} foi adicionado.`
        opc.appendChild(item)
        window.document.getElementById('func').innerHTML = ``
    } else {
        window.alert(`O valor ${x} já foi adicionado anteriormente`)
    }
    n.value = ''
    n.focus()
}
function an() {
    if (nums.length != 0) {
        let soma = 0
        let res = window.document.getElementById('func')
        for (let x in nums) {
            soma += Number(nums[x])
        }
        res.innerHTML = `<p>Ao todo temos ${nums.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${nums[nums.length -1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${nums[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / nums.length}.</p>`
    } else {
        window.alert(`Por favor, adicione pelo menos um numero para que se possar analisar!`)
    }
}
