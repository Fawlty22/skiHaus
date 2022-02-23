import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Button, Alert } from "react-bootstrap";
import { DEACTIVATE_CONTRACT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const ContractList = (userResults, contractType, contractResults) => {
  const user = userResults;
  const contracts = userResults.contractResults;
  const active = userResults.contractType.active;
  console.log(contracts);
  const [deactivateContract, error, data] = useMutation(DEACTIVATE_CONTRACT);

  const handlePastContractBtn = async () => {};

  const handleCloseContract = async (e) => {
    e.preventDefault(e);
    console.log(e.target.attributes[1].value);
    const contractID = e.target.attributes[1].value;

    const cancelContractID = contractID;

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
              <Card className="bg-dark my-2 text-black w-90 align-items-center p-1">
                <Card.Header className="bg-dark fw-bold text-warning">
                  Return Date {filteredContract.checkInDate}
                </Card.Header>
                <ListGroup>
                  <Card.Title className="fw-bold fs-3 text-info">
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

                  <Button
                    data-contractid={filteredContract._id}
                    className="mt-3 bg-info text-black fw-bold border-0"
                    type="click"
                    onClick={handleCloseContract}
                  >
                    Close Rental
                  </Button>
                </ListGroup>
              </Card>
            ))}
        </>
      );
    case "false":
      return (
        <>
          <Card.Body className="bg-dark">
            <ListGroup>
              {contracts
                .filter((array) => !array.active)
                .map((filteredContract) => (
                  <Link
                    key={filteredContract._id}
                    to={`/contracts/${filteredContract._id}`}
                  >
                    <Button className="bg-info text-black fw-bold">
                      Check Out Date: {filteredContract.checkOutDate} Check In
                      Date: {filteredContract.checkInDate}
                    </Button>
                  </Link>
                ))}
            </ListGroup>
          </Card.Body>
        </>
      );
  }
};

export default ContractList;
