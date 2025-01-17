
function load(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.json())
    .then(data => console.log(data))
}

// function loadData(){
//     console.log('Connected')
// }