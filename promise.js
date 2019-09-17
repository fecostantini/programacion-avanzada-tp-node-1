let empleados = [
	{
		id: 1,
		nombre: 'Tito'
	},
	{
		id: 2,
		nombre: 'Pedro'
	},
	{
		id: 3,
		nombre: 'Juan'
	}
];

let salarios = [
	{
		id: 1,
		monto: 3000
	},
	{
		id: 2,
		monto: 4000
	}
];

let getEmpleado = id => {
	return new Promise((resolve, reject) => {
		// el resolve se llama si la promesa es exitosa
		// el reject se llama si falla (o en este caso, si no existe el empleado o el salario)

		let empleadoDB = empleados.find(empleado => empleado.id === id);

		if (empleadoDB) resolve(empleadoDB);
		else reject(`ERROR: no existe el empleado con el id ${id}.`);
	});
};

let getSalario = id => {
	return new Promise((resolve, reject) => {
		let salarioDB = salarios.find(salario => salario.id === id);

		if (salarioDB) resolve(salarioDB);
		else reject(`ERROR: no existe el salario con el id ${id}.`);
	});
};

// Funciona (CON CATCH)
getEmpleado(1)
	.then(empleado =>
		console.log(`${empleado.nombre} tiene el id ${empleado.id}`)
	)
	.catch(error => console.log(error));

// Funciona (SIN CATCH)
getSalario(1).then(
	salario =>
		console.log(
			`Salario con id ${salario.id} y con un monto de $${salario.monto}.`
		),
	error => console.log(error)
);

// Error (CON CATCH)
getEmpleado(4)
	.then(empleado =>
		console.log(`${empleado.nombre} tiene el id ${empleado.id}`)
	)
	.catch(error => console.log(error));

// Error (SIN CATCH)
getSalario(3).then(
	salario =>
		console.log(
			`Salario con id ${salario.id} y con un monto de $${salario.monto}.`
		),
	error => console.log(error)
);

// Promesas anidadas
getEmpleado(1)
	.then(empleado => {
		getSalario(empleado.id)
			.then(salario => {
				console.log(
					`El empleado ${empleado.nombre} tiene un salario de ${salario.monto}.`
				);
			})
			.catch(error => console.log(error));
	})
	.catch(error => console.log(error));
