let num = [5, 8, 2, 9, 3]

console.log(num)
num.push(8)
console.log(`${num} tamnho ${num.length}`)
num.sort()
console.log(num)
for(let pos in num){
    console.log(num[pos])
}
console.log(`${num.indexOf(2)}    ${num.indexOf(100)}`)