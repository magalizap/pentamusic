
class Instrumento {
    constructor(id, nombre, descripcion, imagen, precio){
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.precio = precio
    }
}

const instrumento1 = new Instrumento (1, "Chello","Incluye funda y dos arcos", "../img/chello.jpg", 135.000 )

const instrumento2 = new Instrumento (2, "Flauta Traversa","Fabricada en cuproníquel", "../img/flauta-traversa.jpg" , 36.871 )

const instrumento3 = new Instrumento (3, "Guitarra","Acabado brillante, tapa de arce", "../img/guitarra.jpg"  , 92.256  )

const instrumento4 = new Instrumento (4, "Batería","De 4 Cuerpos Sensitiva", "../img/bateria.webp"  , 212.260  )

const instrumento5 = new Instrumento (5,  "Micrófono","Recomendado para instrumentos, grabaciones, actuaciones, karaoke.", "../img/mic.jpg"   , 7.120  )

const instrumento6 = new Instrumento (6, "Piano Eléctrico", "88 teclas tipo martillo", "../img/piano.jpg"   , 93.710 )

const instrumento7 = new Instrumento (7,  "Violín", "Incluye estuche + accesorios", "../img/violin.jpg"    , 8.999)

const instrumento8 = new Instrumento (8, "Saxofón", "material laton laqueado - campana y cuerpo labrado", "../img/saxo.jpg"  , 130.379 )

const instrumentos = [instrumento1, instrumento2, instrumento3, instrumento4, instrumento5, instrumento6, instrumento7, instrumento8]

const divInstrumentos = document.getElementById("divInstrumentos")
const formProductos = document.getElementById("formProductos")
const inputId = document.getElementById("inputId")
const botonBusqueda = document.getElementById ("botonBusqueda")



instrumentos.forEach((instrumento) =>{

    divInstrumentos.innerHTML += `
  
        <div class="card" id="producto${instrumento.id}">
        <img class="card-img" src="${instrumento.imagen}" alt="chello">
                <div class="card-info">
                    <p class="text-title">${instrumento.nombre} </p>
                    <p class="text-body">${instrumento.descripcion}</p>
                </div>
                <div class="card-footer">
                    <span class="text-title">$${instrumento.precio}</span>
                <div class="card-button">
                <svg class="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
                </div>
            </div>
        </div>

    `
})


botonBusqueda.addEventListener("change", (e) => {
    e.preventDefault()
    busqueda(inputId.value)
    console.log(inputId.value)
})


botonBusqueda.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(inputId.value)
    busqueda(inputId.value)

})



let buscarProductos 


function busqueda (inputId){
   buscarProductos = instrumentos.find(instrumento => instrumento.nombre.includes(inputId.toLowerCase()))

   if(buscarProductos == inputId.value){
    localStorage.setItem("Instrumento", JSON.stringify(buscarProductos))
    mostrarResultadoDeBusqueda(buscarProductos)
   }


}



const mostrarResultadoDeBusqueda = (buscarProductos) =>{

    divInstrumentos.innerHTML += ``
    for(let instrumento of buscarProductos){
        
        divInstrumentos.innerHTML += `
          
            <div class="card" id="producto${instrumento.id}">
            <img class="card-img" src="${instrumento.imagen}" alt="chello">
                    <div class="card-info">
                        <p class="text-title">${instrumento.nombre} </p>
                        <p class="text-body">${instrumento.descripcion}</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">$${instrumento.precio}</span>
                    <div class="card-button">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                    </svg>
                    </div>
                </div>
            </div>
        
            `
        
    }

}

