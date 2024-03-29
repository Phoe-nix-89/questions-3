let str = "Koustav"
function rev(str) {
    let arr = str.split('')
    let rev = arr.reverse()
    let newstr = rev.join('')
    return newstr
}
console.log(rev(str));