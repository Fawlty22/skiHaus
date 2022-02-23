import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Button, Alert } from "react-bootstrap";
import { DEACTIVATE_CONTRACT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const ContractList = (userResults, contractType) => {
  const contracts = userResults.userResults.contracts;
  const active = userResults.contractType.active;

  const [deactivateContract, error, data] = useMutation(DEACTIVATE_CONTRACT);
  console.log(userResults);

  const handlePastContractBtn = async () => {};

  const handleCloseContract = async (e) => {
    e.preventDefault();

    const contractID = contracts.filter((array) => array.active);

    const cancelContractID = contractID[0]._id;

    try {
      const cancelContract = await deactivateContract({
        variables: {
          id: cancelContractID,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  switch (active) {
    case "true":
      return (
        <>
          {contracts
            .filter((array) => array.active)
            .map((filteredContract) => (
              <Card
                id="contractListCard"
                className="my-2 text-black  p-1"
                style={{ backgroundColor: "violet" }}
              >
                <Card.Header className="bg-dark fw-bold text-warning">
                  Return Date {filteredContract.checkInDate}
                  {filteredContract._id}
                </Card.Header>
                <ListGroup id="contractCardEquipment">
                  <Card.Title className="fw-bold text-black fs-4">
                    Equipment
                  </Card.Title>
                  <ListGroupItem className="bg-dark fw-bold text-info">
                    Boot ID
                  </ListGroupItem>
                  <ListGroupItem className="bg-secondary text-white">
                    {filteredContract.equipment.boots.map((boot) => (
                      <p key={boot._id} id={boot._id}>
                        {boot._id}
                        {boot.brand}
                      </p>
                    ))}
                  </ListGroupItem>
                  <ListGroupItem className="bg-dark fw-bold text-info">
                    Ski ID
                  </ListGroupItem>
                  <ListGroupItem className="bg-secondary text-white">
                    {filteredContract.equipment.skis.map((ski) => (
                      <p key={ski._id} id={ski._id}>
                        {ski._id}
                      </p>
                    ))}
                  </ListGroupItem>
                  <ListGroupItem className="bg-dark fw-bold text-info">
                    Snowboard ID
                  </ListGroupItem>
                  <ListGroupItem className="bg-secondary text-white">
                    {filteredContract.equipment.snowboards.map((snowboard) => (
                      <p key={snowboard._id} id={snowboard._id}>
                        {snowboard._id}
                      </p>
                    ))}
                  </ListGroupItem>

                  <Button type="click" onClick={handleCloseContract}>
                    Close Rental
                  </Button>
                  {error && <Alert>{error.message}</Alert>}
                  {data && <Alert>Contract Closed</Alert>}
                </ListGroup>
              </Card>
            ))}
        </>
      );
    case "false":
      return (
        <>
          <ListGroup>
            {contracts
              .filter((array) => !array.active)
              .map((filteredContract) => (
                <Link
                  key={filteredContract._id}
                  to={`/contracts/${filteredContract._id}`}
                >
                  <ListGroup.Item>{filteredContract._id}</ListGroup.Item>
                </Link>
              ))}
          </ListGroup>
        </>
      );
  }
};

export default ContractList;
