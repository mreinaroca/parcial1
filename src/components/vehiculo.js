import React from "react";

const Vehiculo= (props) =>{
    return (
        <tr>
            <th scope="row">{props.vehiculo.id}</th>
            <td>{props.vehiculo.marca}</td>
            <td>{props.vehiculo.linea}</td>
            <td>{props.vehiculo.modelo}</td>
        </tr>
    );

}

export default Vehiculo;