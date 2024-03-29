function fn(name,age,grade) {
    this.name = name
    this.age = age
    this.grade = grade
}
function updategrade(student1,newgrade) {
    student1.grade = newgrade
}
let student1 = new fn("Koustav",22,'A1')
console.log(student1)
updategrade(student1,'A2')
console.log(student1)