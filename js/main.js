var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });



//Productos

let todosLosProductos = [];

const btnVerMas = document.querySelector(".ver-mas");
const btnVerMasDesktop = document.querySelector(".ver-mas-desktop");






fetch("../productos.json")
.then((res)=>res.json())
.then((data)=>{
    todosLosProductos = data;
   
     mostrarProductos(todosLosProductos.slice(0,12)); //muestra los primeros 12
    
    btnVerMas.addEventListener("click",()=>{
            mostrarProductos(todosLosProductos.slice()); //Muestra todos los productos
            btnVerMas.classList.add("disabled");
          
           
   });

   btnVerMasDesktop.addEventListener("click",()=>{
    mostrarProductos(todosLosProductos.slice());
    btnVerMasDesktop.classList.add("disabled");
   })
   


})

const productosContainer = document.querySelector(".productos-container");
const btnCategorias = document.querySelectorAll(".boton-categoria");


function mostrarProductos(arrayProductos){
    productosContainer.innerHTML = "";
    arrayProductos.forEach(producto => {

        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-img" src=${producto.imagen} alt=${producto.titulo}/>
        <div class="producto-detalles">
        <p>${producto.titulo}</p>
        <button class="btn-consulta"><a href="https://api.whatsapp.com/send?phone=3447432360&text=Me%20interesa%20saber%20mas%20sobre%20los%20productos..." target="_blank">Consultar</a><i class="fa-brands fa-whatsapp"></i></button>
        </div>
        `
        productosContainer.append(div);
    });
    const imagenesProducto = document.querySelectorAll(".producto-img");
    imagenesProducto.forEach((img)=>{
        img.addEventListener("click",()=>{
            img.classList.toggle("scale");
        })
    })

}

btnCategorias.forEach((btn)=>{
     
    btn.addEventListener("click",(e)=>{
        const idBoton = e.target.id;

        if(idBoton != "todos") {
        const filterCategoria = todosLosProductos.filter((elemento)=> elemento.categoria.id === idBoton);
        mostrarProductos(filterCategoria);
        }
        else{
            btnVerMas.classList.remove("disabled");
            mostrarProductos(todosLosProductos.slice(0,14));
            btnVerMasDesktop.classList.remove("disabled");
        }

        
    })
})

const btnCategoriasMobile = document.querySelectorAll(".boton-categoria-mobile");
btnCategoriasMobile.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        idBotonMenu = e.target.id;
        divMenu.classList.add("disabled");
        if(idBotonMenu!= "todos") {
            const filterPorCategoria = todosLosProductos.filter((elemento) => elemento.categoria.id === idBotonMenu);
            mostrarProductos(filterPorCategoria);
        }
        else{
            mostrarProductos(todosLosProductos);
        }
    })
})

const navItemHome = document.querySelectorAll(".nav-item-home");
navItemHome.forEach((nav)=>{
    nav.addEventListener("click",(e)=>{

        navItemHome.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
       
       

    })
})



