const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const divMenu = document.querySelector(".menu-mobile");
const openMenuProductos = document.querySelector(".open-menu-productos");
const categoriasProductos = document.querySelector("#productos-categorias");

openMenu.addEventListener("click",()=>{
    divMenu.classList.remove("disabled");
  
});
openMenuProductos.addEventListener("click",()=>{

    categoriasProductos.classList.toggle("disabled");
    if(!(categoriasProductos.classList.contains("disabled"))){
        openMenuProductos.style.transform = "rotate(180deg)";
    }
    else{
        openMenuProductos.style.transform = "rotate(360deg)";
    }
})

closeMenu.addEventListener("click",()=>{
    divMenu.classList.add("disabled");
});

//Buscador
const form = document.querySelector(".d-flex");
const input = document.querySelector(".form-control");
const formDesktop = document.querySelector(".d-flex-desktop");
const inputDesktop = document.querySelector(".form-control-desktop");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let escritoEnInput = input.value;
    
    const primeraLetraMayus = escritoEnInput.charAt(0).toUpperCase() + escritoEnInput.slice(1);

    const filtrado = todosLosProductos.filter((elemento)=>elemento.titulo.includes(primeraLetraMayus));


    if(filtrado.length >= 1) {
        mostrarProductos(filtrado);

    }
    else{
        productosContainer.innerHTML = `<p class="p-noResultados">NO SE ENCONTRARON COINCIDENCIAS</p>`
    }
 

    form.reset();


});
formDesktop.addEventListener("submit",(e)=>{
    e.preventDefault();
    let escritoEnInput = inputDesktop.value;

    const primeraLetraMayus = escritoEnInput.charAt(0).toUpperCase() + escritoEnInput.slice(1);
    const filtrado = todosLosProductos.filter((elemento)=>elemento.titulo.includes(primeraLetraMayus));


    if(filtrado.length >= 1) {
        mostrarProductos(filtrado);

    }
    else{
        productosContainer.innerHTML = `<p class="p-noResultados">NO SE ENCONTRARON COINCIDENCIAS</p>`
    }
 

    formDesktop.reset();

});

const btnSubmit = document.querySelector(".btn-outline-success");
btnSubmit.addEventListener("click",()=>{
    
    productosContainer.scrollIntoView({behavior: "smooth"});

});

const submitDesktop = document.querySelector(".btn-outline-success-desktop"); 
submitDesktop.addEventListener("click",()=>{
    
    productosContainer.scrollIntoView({behavior: "smooth"});

});


const botonAbrirBuscador = document.querySelector(".fa-magnifying-glass");
const formContainer = document.querySelector(".buscador-container");
botonAbrirBuscador.addEventListener("click",()=>{
    formContainer.classList.remove("disabled");
    botonAbrirBuscador.classList.add("disabled");
});

const buttonVolver = document.querySelector(".bi-arrow-return-left");

buttonVolver.addEventListener("click",()=>{
    formContainer.classList.add("disabled");
    botonAbrirBuscador.classList.remove("disabled");
})

const buttonContactoMobile = document.querySelector(".menu-item-contacto");

buttonContactoMobile.addEventListener("click",()=>{
    divMenu.classList.add("disabled");
})


//Scroll hacia abajo y quede fixed mi navbar-home
let scrolled = false; // variable que almacena el estado del scroll
const navbarFixed = document.querySelector(".navbar-home");

window.addEventListener('scroll', function() {
    if (!scrolled && window.scrollY > 0) {
      scrolled = true;
      navbarFixed.classList.add("fixed");
      // Hacer algo cuando se detecta el primer scroll hacia abajo
    } else if (scrolled && window.scrollY === 0) {
      scrolled = false;
      navbarFixed.classList.remove("fixed");
      // Hacer algo cuando el usuario vuelva al principio de la página
    }
  });
