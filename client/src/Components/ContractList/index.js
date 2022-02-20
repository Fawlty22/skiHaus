import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { DEACTIVATE_CONTRACT } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const ContractList = (userResults, contractType) => {
  const contracts = userResults.userResults.contracts;
  const active = userResults.contractType.active;

  const [deactivateContract, { error }] = useMutation(DEACTIVATE_CONTRACT);
  console.log(userResults);

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
        <ul>
          {contracts
            .filter((array) => array.active)
            .map((filteredContract) => (
              <Card key={filteredContract._id}>
                <Card.Header>{filteredContract._id}</Card.Header>
                <ListGroup>
                  Return Date
                  <ListGroupItem>{filteredContract.checkInDate}</ListGroupItem>
                </ListGroup>
                Equipment
                <ListGroup>
                  <ListGroupItem>
                    Boot ID
                    {filteredContract.equipment.boots.map((boot) => (
                      <p key={boot._id} id={boot._id}>
                        {boot._id}
                        {boot.brand}
                      </p>
                    ))}
                  </ListGroupItem>
                  <ListGroupItem>
                    Ski ID
                    {filteredContract.equipment.skis.map((ski) => (
                      <p key={ski._id} id={ski._id}>
                        {ski._id}
                      </p>
                    ))}
                  </ListGroupItem>
                  <ListGroupItem>
                    Snowboard ID
                    {filteredContract.equipment.snowboards.map((snowboard) => (
                      <p key={snowboard._id} id={snowboard._id}>
                        {snowboard._id}
                      </p>
                    ))}
                  </ListGroupItem>
                  <Button type="click" onClick={handleCloseContract}>
                    Close Rental
                  </Button>
                </ListGroup>
              </Card>
            ))}
        </ul>
      );
    case "false":
      return (
        <ul>
          {contracts
            .filter((array) => !array.active)
            .map((filteredContract) => (
              <li key={filteredContract._id}>
                {filteredContract._id}
                {filteredContract.checkInDate}
              </li>
            ))}
        </ul>
      );
  }
};

export default ContractList;
