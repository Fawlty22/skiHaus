import React, { useState } from "react";
import { Button, Card, Container, Title } from "react-bootstrap";
import ContractList from "../ContractList";

const SingleUserContracts = (userResults) => {
  console.log("SingleUserContract line 6", userResults);
  const user = userResults.userResult.user;

  const [contractHistory, setContractHistory] = useState(user.contracts.length);
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
        <Container id="contractListCardContainer" className="w-50 p-2 bg-dark text-center text-info ">
          <Card.Header className="fw-bold fs-3">
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </Card.Header>
          {contractType.active && (
            <ContractList userResults={user} contractType={contractType} />
          )}
          <Button type="click" onClick={activeContractController}>
            Active Contracts
          </Button>
          <Button type="click" onClick={pastContractController}>
            Past Contracts
          </Button>
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
