class User{
    constructor( username, password){
        this.username = username
        this.password = password
    }
}

const usuario = []

const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const username = document.getElementById("user").value
    const password = document.getElementById("pass").value
    
    const users = new User (username, password)
    usuario.push(users)

    localStorage.setItem("User", JSON.stringify(usuario))
    form.reset()

    console.log(usuario)
    
    mostrarDatos(usuario)
})

const mostrarDatos = (usuarios) =>{
    const datosStorage  = JSON.parse(localStorage.getItem("User")) ?? [] 
    datosStorage.forEach((users, indice) => {
        let {username, password} = users
        
        Swal.fire({
            title: `Bienvenido/a ${username}!`,
            
          })

    })
}