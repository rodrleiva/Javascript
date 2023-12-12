const precioSpan = document.querySelector(".precio-inicial")
const cantidadSpan = document.querySelector(".cantidad")
const totalSpan = document.querySelector(".valor-total")

//Variables
let precio = 400000
let cantidad = 0
let total = 0

precioSpan.innerHTML = precio
totalSpan.innerHTML = total
cantidadSpan.innerHTML = cantidad


//Functions
function add(){
    cantidadSpan.innerHTML = cantidad + 1
    cantidad = parseInt ((cantidadSpan.innerHTML))
    total = cantidad * precio
    totalSpan.innerHTML = total
}

function substract(){
    if (totalSpan.innerHTML <= 0){
        alert("No puede llevar menos de 0")
        return
    }
    cantidadSpan.innerHTML = cantidad - 1
    cantidad = parseInt ((cantidadSpan.innerHTML))
    total = cantidad * precio
    totalSpan.innerHTML = total
}