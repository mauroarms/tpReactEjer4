import ListGroup from "react-bootstrap/ListGroup";
import ItemLista from "./ItemLista";

const ListaTareas = () => {
  return (
    <ListGroup as="ol" numbered className="mt-5">
      <ItemLista></ItemLista>
      <ItemLista></ItemLista>
      <ItemLista></ItemLista>
    </ListGroup>
  );
};

export default ListaTareas;
