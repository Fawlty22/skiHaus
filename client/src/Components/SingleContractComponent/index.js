import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CONTRACT } from "../../graphql/queries";
import { DEACTIVATE_CONTRACT } from "../../graphql/mutations";

const SingleContractComponent = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_CONTRACT, {
    variables: { _id: id },
  });
  console.log(data);

  const [deactivateContract, { error, contractData }] =
    useMutation(DEACTIVATE_CONTRACT);

  const handleDeactivateContract = async (event) => {
    event.preventDefault();

    try {
      const deactivatedContract = await deactivateContract({
        variables: {
          id: id,
          active: false,
        },
        if(error) {
          return error;
        },
      });
      console.log(deactivatedContract);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loading && <h2> LOADING... PLEASE WAIT...</h2>}
      {data && (
        <Card className="w-50 p-2 bg-dark text-center text-info">
          <Card.Title className="fw-bold fs-3">
            {data.contract.user.firstName} {data.contract.user.lastName}'s
            Contract
          </Card.Title>
          <Card
            className="my-2 text-black  p-1"
            style={{ backgroundColor: "violet" }}
          >
            <Card.Title className="fw-bold text-black fs-4">
              Personal Info
            </Card.Title>
            <ListGroup>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Name
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white">
                {data.contract.user.firstName} {data.contract.user.lastName}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Email
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white">
                {data.contract.user.email}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Phone Number
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white">
                {data.contract.user.phone}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Birthdate
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white">
                {data.contract.user.birthDate}
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <Card
            className="my-2 text-black p-1"
            style={{ backgroundColor: "violet" }}
          >
            <Card.Title className="fw-bold text-black fs-4">
              Contract Info
            </Card.Title>
            <ListGroup>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Check Out Date
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white">
                {data?.contract.checkOutDate}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Check In Date
              </ListGroup.Item>
              <ListGroup.Item className="bg-secondary text-white">
                {data?.contract.checkInDate}
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark fw-bold text-info">
                Equipment
              </ListGroup.Item>

              {data?.contract.equipment.boots?.map((each) => (
                <ListGroup.Item
                  key={each._id}
                  className="bg-secondary text-white d-flex justify-content-between"
                >
                  <span className="fw-bold text-info">{each.__typename}</span>
                  <span>Brand: {each.brand}</span>
                  <span>Model: {each.model}</span>
                </ListGroup.Item>
              ))}
              {data?.contract.equipment.skis?.map((each) => (
                <ListGroup.Item
                  key={each._id}
                  className="bg-secondary text-white d-flex justify-content-between"
                >
                  <span className="fw-bold text-info">{each.__typename}</span>
                  <span>Brand: {each.brand}</span>
                  <span>Model: {each.model}</span>
                </ListGroup.Item>
              ))}
              {data?.contract.equipment.snowboards?.map((each) => (
                <ListGroup.Item
                  key={each._id}
                  className="bg-secondary text-white d-flex justify-content-between"
                >
                  <span className="fw-bold text-info">{each.__typename}</span>
                  <span>Brand: {each.brand}</span>
                  <span>Model: {each.model}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
          <Button
            onClick={handleDeactivateContract}
            className="bg-info text-black fw-bold"
          >
            Deactivate Contract
          </Button>
        </Card>
      )}
    </>
  );
};

export default SingleContractComponent;
