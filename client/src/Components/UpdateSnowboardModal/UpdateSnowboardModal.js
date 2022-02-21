import { Modal, Button, Form, FloatingLabel, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_SNOWBOARD } from "../../graphql/mutations";

const UpdateSnowboardModal = (props) => {
  const [formState, setFormState] = useState({
    snowboardID: "",
    brand: "",
    model: "",
    condition: "",
  });

  const { brand, model, condition, snowboardID } = formState;

  const [updateSnowboard, { error, data }] = useMutation(UPDATE_SNOWBOARD);

  function resetState() {
    setFormState({ snowboardID: "", brand: "", model: "", condition: "" });
  }
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedSnowboard = await updateSnowboard({
        variables: {
          id: snowboardID,
          brand: brand,
          model: model,
          condition: condition,
        },
        if(error) {
          return error;
        },
      });
      console.log(updatedSnowboard);
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter the Id of the snowboard you would like to update. Then enter
          what you would like to update.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="updateSnowbordForm" onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="snowboardID"
            className="mb-3"
          >
            <Form.Control
              name="snowboardID"
              type="text"
              placeholder="Snowboard ID"
              defaultValue={snowboardID}
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
          <Button type="submit">Update Snowboard</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        {error && <Alert>{error.message}</Alert>}
        {data && <Alert>Snowboard Updated</Alert>}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateSnowboardModal;
