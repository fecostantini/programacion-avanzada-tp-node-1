let getUsuarioById = (id, callback) => {
	let usuario = {
		nombre: 'Ernesto',
		id: 123
	};

	if (id == 20) callback(`El usuario con id ${id}, no existe en la BBDD`);
	else callback(null, usuario);
};

/* 
Si acá cambiamos el id a cualquier número diferente a 20
nos devuelve el usuario y ningún error. Caso contrario, devuelve un error
diciendo que no existe el id con usuario 20 en la BBDD.
*/
getUsuarioById(20, (error, usuario) => {
	if (error) return console.log(error);

	console.log(`Usuario de base de datos: ${JSON.stringify(usuario)}`);
});
