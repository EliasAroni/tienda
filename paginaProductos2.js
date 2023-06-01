			//producto, precio, disponibilidad
const arrayProductos=[{ img:"<img src ='cemento.png'>",
						producto:"cemento",
						precio:300,
						disponibilidad:"si"
						},
						{img:"<img src ='cal2.png'>",
						producto:"cal",
						precio:200,
						disponibilidad:"si"
						},
						{ img:"<img src ='ceresita.png'>",
						producto:"ceresita",
						precio:150,
						disponibilidad:"si"
						},
						{img:"<img src ='balde.png'>",
						producto:"balde",
						precio:50,
						disponibilidad:"si"
						},
						{img:"<img src ='fratacho2.png'>" ,
						producto:"fratacho",
						precio:120,
						disponibilidad:"si"
						},
];

let botonBuscar = document.querySelector(".botonBuscar");
let cajaBusqueda= document.querySelector(".cajaBuscador")
let productos= document.querySelector(".productos")

	botonBuscar.addEventListener('click', function () {
		console.log("Estas buscando :" + `${cajaBusqueda.value}`);
		let busqueda= cajaBusqueda.value.toLowerCase();
		let palabra= buscarProducto(busqueda)

			if(busqueda===palabra.producto){
				let img = palabra.img;
				let p= palabra.producto;
				let precio=palabra.precio;
				let disponibilidad=palabra.disponibilidad;
				visualizarProductos(img,p,precio,disponibilidad);
			cajaBusqueda.value="";
			}else{
				console.log("Producto Inexistente")
			}
	})






function visualizarProductos(img,x,precio,disponibilidad) {
let article=document.querySelector(".article");
let div =document.createElement("DIV");	
	div.classList.add("cajaProducto");
	div.innerHTML=`${img}<br>`+`Producto: ${x}<br> `+`Precio: ${precio}<br>`+`Disponible : ${disponibilidad}`;
	productos.appendChild(div);
}

function buscarProducto(x) {
	let resultado = arrayProductos.find(producto=>producto.producto==x);
	return resultado;
	console.log(resultado)
}

const botonesNoDisponible=document.querySelector(".header_boton");
	botonesNoDisponible.addEventListener("click",function () {
		alert("Estoy trabajando en ello, pagina no disponible")
	})