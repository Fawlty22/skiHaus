import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ContractList from "../ContractList";

const SingleUserContracts = (userResults) => {
  const user = userResults.userResult.user;

  const [contractHistory, setContractHistory] = useState(user.contracts.length);
  const [contractType, setContractType] = useState({ active: "" });
  // const [pastContracts, setPastContracts] = useState(false);
  console.log(contractType);
  const activeContractController = (e) => {
    e.preventDefault();

    setContractType({
      ...contractType,
      active: "true",
    });
    console.log(contractType);
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
        <Card>
          <Card.Header>{user.username}</Card.Header>
          {contractType.active && (
            <ContractList userResults={user} contractType={contractType} />
          )}
          <Button type="click" onClick={activeContractController}>
            Active Contracts
          </Button>
          <Button type="click" onClick={pastContractController}>
            Past Contracts
          </Button>
        </Card>
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
