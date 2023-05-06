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

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let escritoEnInput = input.value;
    escritoEnInput = escritoEnInput.charAt(0).toUpperCase();
    
    const coincidencias = todosLosProductos.filter((elemento)=> elemento.titulo.includes(escritoEnInput));

    mostrarProductos(coincidencias);
});

const btnSubmit = document.querySelector(".btn-outline-success");
btnSubmit.addEventListener("click",()=>{

    productosContainer.scrollIntoView({behavior: "smooth"});

})

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
