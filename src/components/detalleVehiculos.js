
function DetalleVehiculo(props) {
    return (
        <Card style={{ width: '18rem', height: '24rem' }} className="mb-3">
          <Card.Img
            style={{ height: '14rem' }}
            variant="top"
            src={props.vehiculo.imagen}
            alt={props.vehiculo.descripcion}
          />
          <Card.Body>
            <Card.Title>
                <h1>{props.vehiculo.marca}</h1>
            </Card.Title>
            <Card.Text>
              {props.vehiculo.descripcion}
              {props.vehiculo.kilometraje}
              {props.vehiculo.color}
              {props.vehiclo.referencia}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }