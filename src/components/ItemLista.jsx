import { ListGroup, Button } from "react-bootstrap";

const ItemLista = () => {
  return (
    <ListGroup.Item as="li" className="mb-2 d-flex align-items-center">
      &nbsp; Ejemplo
      <Button variant="danger" className="ms-auto"> Borrar </Button>
    </ListGroup.Item>
  );
};

export default ItemLista;
