import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ContractList = (userResults, contractType) => {
  const contracts = userResults.userResults.contracts;
  const active = userResults.contractType.active;
  console.log(contracts);

  switch (active) {
    case "true":
      return (
        <ul>
          {contracts
            .filter((array) => array.active)
            .map((filteredContract) => (
              <li key={filteredContract._id}>
                {filteredContract._id}

                {filteredContract.checkInDate}
              </li>
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
