let empleados = [
	{
		id: 1,
		nombre: 'Ernesto'
	},
	{
		id: 2,
		nombre: 'Marcelo'
	},
	{
		id: 3,
		nombre: 'Pedro'
	}
];

let salarios = [
	{
		id: 1,
		monto: 1000
	},
	{
		id: 2,
		monto: 2000
	}
];

let getEmpleado = (id, callback) => {
	let empleadoDB = empleados.find(empleado => empleado.id === id);

	if (empleadoDB) callback(null, empleadoDB);
	else callback(`No existe un empleado con el id ${id}`);
};

let getSalario = (id, callback) => {
	let salarioDB = salarios.find(salario => salario.id === id);

	if (salarioDB) callback(null, salarioDB);
	else callback(`El empleado con el id ${id} no posee salario en la BBDD`);
};

getEmpleado(3, (error, empleado) => {
	if (error) console.log(error);
	else console.log(empleado);
});

// No lo encuentra porque no hay salario con id 3
getSalario(3, (error, salario) => {
	if (error) console.log(error);
	else console.log(salario);
});

// Encuentra el salario con id 2 y lo muestra
getSalario(2, (error, salario) => {
	if (error) console.log(error);
	else console.log(salario);
});
