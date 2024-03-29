function fn(name,age,grade) {
    this.name = name
    this.age = age
    this.grade = grade
}
function prop(object) {
    let c = 0
    // console.log(object);
    let arr = Object.keys(object)
    return arr.length
}
let student1 = new fn("Koustav",22,'A1')
console.log(prop(student1));