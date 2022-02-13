import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADDSNOWBOARD_MUTATION } from "../../graphql/mutations";

const AddSnowboardModal = (props) => {
  const [formState, setFormState] = useState({
    brand: "",
    model: "",
    condition: "",
  });

  const { brand, model, condition } = formState;

  const [addSnowboard, { error }] = useMutation(ADDSNOWBOARD_MUTATION);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newSnowboard = await addSnowboard({
        variables: {
          brand: brand,
          model: model,
          condition: condition,
        },
      });
      console.log(newSnowboard);
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
          Enter the neccesary information to create a Snowboard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addSnowboardForm" onSubmit={handleSubmit}>
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
          <Button type="submit">Add Snowboard</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddSnowboardModal;