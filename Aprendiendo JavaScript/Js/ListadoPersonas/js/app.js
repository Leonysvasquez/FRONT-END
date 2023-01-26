const personas=[
    new Persona('Leonys' ,'Vasquez'),
  

]

function mostrarPersona(){
    console.log('Mostrar Persona');
    let texto='';
    for(let persona of personas){
        console.log(persona)
        texto+=`<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML=texto;
}


function agregarPersonas(){
    const forma = document.forms['forma']
    const nombre = forma['nombre']
    const apellido = forma['apellido']
    const persona = new Persona(nombre.value , apellido.value );
    console.log(persona)
    personas.push(persona)
    mostrarPersona()
}