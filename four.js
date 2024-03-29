function fn(name,age,grade) {
    this.name = name
    this.age = age
    this.grade = grade
}
function check(object,prop) {
    let arr = Object.keys(object)
    if(arr.includes(prop)){
        return true
    }
    return false
}
let student1 = new fn("Koustav",22,'A1')
console.log(check(student1,'id'));