import { Modal, Button, Form, FloatingLabel, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_BOOT } from "../../graphql/mutations";

const UpdateBootModal = (props) => {
  const [formState, setFormState] = useState({
    bootID: "",
    brand: "",
    model: "",
    condition: "",
  });

  const { brand, model, condition, bootID } = formState;

  const [updateBoot, { error, data }] = useMutation(UPDATE_BOOT);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedBoot = await updateBoot({
        variables: {
          id: bootID,
          brand: brand,
          model: model,
          condition: condition,
        },
        if(error) {
          return error;
        },
      });
      console.log(updatedBoot);
    } catch (e) {
      console.log(e);
    }
    props.onHide()
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter the Id of the boots you would like to update. Then enter what
          you would like to update.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addBootForm" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="bootID"
            className="mb-3"
          >
            <Form.Control
              name="bootID"
              type="text"
              placeholder="Boot ID"
              defaultValue={bootID}
              onChange={handleChange}
            />
          </FloatingLabel>
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
          <Button type="submit">Update Boot</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        {error && <Alert>{error.message}</Alert>}
        {data && <Alert>Boot Updated</Alert>}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateBootModal;
