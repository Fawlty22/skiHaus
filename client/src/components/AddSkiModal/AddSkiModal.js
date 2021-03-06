import { Modal, Button, Form, FloatingLabel, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADDSKI_MUTATION } from "../../graphql/mutations";

const AddSkiModal = (props) => {
  const [formState, setFormState] = useState({
    brand: "",
    model: "",
    condition: "",
  });
  console.log(formState);
  const { brand, model, condition } = formState;

  const [addSki, { error, data }] = useMutation(ADDSKI_MUTATION);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newSki = await addSki({
        variables: {
          brand: brand,
          model: model,
          condition: condition,
        },
        if(error) {
          return error;
        },
      });
      props.onHide();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-dark text-center" closeButton>
        <Modal.Title
          className="p-2 bg-dark text-center text-info "
          id="contained-modal-title-vcenter"
        >
          Enter the neccesary information to create a Ski
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <Form id="addSkiForm" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="brand"
            className="mb-3"
          >
            <Form.Control
              name="brand"
              type="text"
              placeholder="Brand"
              defaultValue={brand}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="model"
            className="mb-3"
          >
            <Form.Control
              name="model"
              type="text"
              placeholder="Model"
              defaultValue={model}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="condition"
            className="mb-3"
          >
            <Form.Control
              name="condition"
              type="text"
              placeholder="Condition"
              defaultValue={condition}
              onChange={handleChange}
            />
          </FloatingLabel>
          <Button className="bg-info text-black fw-bold" type="submit">
            Add Ski
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button className="bg-info text-black fw-bold" onClick={props.onHide}>
          Close
        </Button>
        {error && <Alert>{error.message}</Alert>}
        {data && <Alert>Ski Added</Alert>}
      </Modal.Footer>
    </Modal>
  );
};

export default AddSkiModal;
