

let botonEmpezar= document.querySelector(".botonEmpezar")
	botonEmpezar.addEventListener("click", function (){
		window.location.href="paginaProductos.html";
	})

const botonesNoDisponible=document.querySelector(".header_boton");
	botonesNoDisponible.addEventListener("click",function () {
		alert("Estoy trabajando en ello, pagina no disponible")
	})
