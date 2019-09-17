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

let getEmpleado = async id => {
	let empleadoDB = empleados.find(empleado => empleado.id === id);

	if (empleadoDB) return empleadoDB;
	else throw new Error(`ERROR: no existe el empleado con el id ${id}.`);
};

let getSalario = async id => {
	let salarioDB = salarios.find(salario => salario.id === id);

	if (salarioDB) return salarioDB;
	else throw new Error(`ERROR: no existe el salario con el id ${id}.`);
};

// Funciona (CON CATCH)
getEmpleado(1)
	.then(empleado =>
		console.log(`${empleado.nombre} tiene el id ${empleado.id}`)
	)
	.catch(error => console.log(error.message));

// Funciona (SIN CATCH)
getSalario(1).then(
	salario =>
		console.log(
			`Salario con id ${salario.id} y con un monto de $${salario.monto}.`
		),
	error => console.log(error.message)
);

// Error (CON CATCH)
getEmpleado(4)
	.then(empleado =>
		console.log(`${empleado.nombre} tiene el id ${empleado.id}`)
	)
	.catch(error => console.log(error.message));

// Error (SIN CATCH)
getSalario(3).then(
	salario =>
		console.log(
			`Salario con id ${salario.id} y con un monto de $${salario.monto}.`
		),
	error => console.log(error.message)
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
			.catch(error => console.log(error.message));
	})
	.catch(error => console.log(error.message));
