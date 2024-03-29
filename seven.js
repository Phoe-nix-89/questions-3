let map = new Map()
map.set('name',"Koustav")
map.set('age',22)
map.set('email',"emial")
console.log(map);

function add(map,key,val) {
    map.set(key,val)
}
function update(map,key,val) {
    map.set(key,val)
}
function del(map,key) {
    map.delete(key)
}

add(map,'id',1125)
console.log(map);

update(map,'age',23)
console.log(map);

del(map,'email')
console.log(map);