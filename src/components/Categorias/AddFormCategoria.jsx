import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddFormCategoria = () => {
	const [newCategoria, setNewCategoria] = useState({
		nombre: '',
	})
	const history = useHistory()

	const handleChange = async (e) => {
		setNewCategoria({
			...newCategoria,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async () => {
		await axios
			.post('http://localhost:3001/api/categorias', newCategoria)
			.then((res) => console.log(res), history.go(0))
			.catch((e) => {
				console.log(e)
			})
	}

	return (
		<div>
			<h3>Agrega una nueva Categoria</h3>
			<label>Nombre</label>
			<input
				type='text'
				name='nombre'
				placeholder='Ingrese el nombre'
				onChange={handleChange}
				value={newCategoria.nombre}
			/>
			<button onClick={handleSubmit}>Agregar Categoria</button>
		</div>
	)
}

export default AddFormCategoria
