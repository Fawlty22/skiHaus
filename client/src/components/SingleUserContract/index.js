import React, { useState } from "react";
import { Button, Card, Container, ListGroup, Title } from "react-bootstrap";
import ContractList from "../ContractList";

const SingleUserContracts = (userResults) => {
  // console.log("SingleUserContract line 6", userResults);
  const user = userResults.userResult.user;
  const contracts = user.contracts;
  // console.log(user);
  // console.log(contracts);
  const [contractHistory, setContractHistory] = useState(contracts.length);
  const [contractType, setContractType] = useState({ active: "" });
  const activeContractController = (e) => {
    e.preventDefault();

    setContractType({
      ...contractType,
      active: "true",
    });
  };
  const pastContractController = (e) => {
    e.preventDefault();

    setContractType({
      ...contractType,
      active: "false",
    });
  };

  switch (contractHistory > 0) {
    case true:
      return (
        <Container className="d-flex flex-column align-items-center w-50 p-2 bg-dark text-center text-info ">
          <Card className="bg-dark w-100">
            <Card.Header className="fw-bold fs-3">
              {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
            </Card.Header>
            {contractType.active && (
              <ContractList
                contractResults={contracts}
                userResults={user}
                contractType={contractType}
              />
            )}
            <Card.Footer className="bg-dark d-flex">
              <ListGroup className="flex-row w-100 justify-content-around">
                <Button
                  className="bg-info text-black fw-bold"
                  type="click"
                  onClick={activeContractController}
                >
                  Active Contracts
                </Button>
                <Button
                  className="bg-info text-black fw-bold"
                  type="click"
                  onClick={pastContractController}
                >
                  Past Contracts
                </Button>
              </ListGroup>
            </Card.Footer>
          </Card>
        </Container>
      );
    case false:
      return (
        <Card>
          <Card.Header>
            {user.username} has never had a contract before!
          </Card.Header>
        </Card>
      );
  }
};

export default SingleUserContracts;
