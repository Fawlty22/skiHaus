import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const SingleUserContracts = (userResults) => {
  const user = userResults.userResult.user;

  const [contractHistory, setContractHistory] = useState(user.contracts.length);

  console.log(contractHistory);
  switch (contractHistory > 0) {
    case true:
      return (
        <Card>
          <Card.Header>{user.username}</Card.Header>
          <Button type="submit">Active Contracts</Button>
          <Button type="submit">Past Contracts</Button>
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
