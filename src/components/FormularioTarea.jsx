import { Button, Form } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formularioTarea">
        <Form.Label>Titulo Tarea</Form.Label>
        <div className="d-flex gap-3">
          <Form.Control type="text" placeholder="Mi Tarea" />
          <Button className="btnAgregar" variant="outline-dark" type="submit">
            Agregar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default FormularioTarea;
