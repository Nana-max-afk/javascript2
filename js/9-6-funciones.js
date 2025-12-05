//Parametros por default

//algunas veces mandaras llamar una funcion que no tendra los argumentos que se requieren
//por ejemplo cuando llenes tu perfil de facebook tal vez no llenas todos los campos en esos casos son muy convenientes

//puedes ver que en la consola aparecera undefined


function saludar(nombre = "desconocido", apellido= "rios"){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar("juan", "de la torre");

saludar("juan");

saludar();