import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arrayTarea, setArrayTarea] = useState([]);

  const handleSubmit = (event) =>{
    event.preventDefault();
    setArrayTarea([...arrayTarea,tarea])
    setTarea("")
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formularioTarea">
          <Form.Label>Titulo Tarea</Form.Label>
          <div className="d-flex gap-3">
            <Form.Control
              type="text"
              placeholder="Mi Tarea"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />
            <Button
              className="btnAgregar"
              variant="outline-dark"
              type="submit"
            >
              Agregar
            </Button>
          </div>
        </Form.Group>
      </Form>

      <ListaTareas arrayTarea={arrayTarea} ></ListaTareas>
    </>
  );
};

export default FormularioTarea;
