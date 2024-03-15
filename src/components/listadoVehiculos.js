import React from "react";
import { useState, useEffect } from "react"
import Vehiculo from "./vehiculo";
export default function ListadoVehiculos() {
/* 	const [vehiculos, setVehiculos] = useState([]);
	useEffect(() => {
		const URL = "";
		fetch(URL).then(data => data.json()).then(data => {
			setVehiculos(data);
		})
	}, []);
 */
	const [vehiculos] = useState([
		[
			{
					 "id": 1,
					 "marca": "Renault",
					 "linea": "Kangoo",
					 "referencia": "VU Express",
					 "modelo": 2017,
					 "kilometraje": 93272,
					 "color": "Blanco",
					 "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
			 },
			 {
					 "id": 2,
					 "marca": "Chevrolet",
					 "linea": "Spark",
					 "referencia": "Life",
					 "modelo": 2018,
					 "kilometraje": 55926,
					 "color": "Plata",
					 "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/spark.jpeg?raw=true"
			 }
	 ]
	])

	return (
		<div>
			<img
				src="https://i.postimg.cc/BZ55BVVK/cabeza.jpg"
				alt="https://postimg.cc/K4zgZJFG"
			/>
			<hr></hr>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">
							#
						</th>
						<th scope="col">
							Marca
						</th>
						<th scope="col">
							Linea
						</th>
						<th scope="col">
							Modelo
						</th>
					</tr>
				</thead>
				<tbody>
					{vehiculos.map((e) =>{
						<Vehiculo vehiculo={e}/>
					})}
				</tbody>
			</table>

		</div>
	);
}