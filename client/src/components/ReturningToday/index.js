import React, { useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CONTRACTS } from "../../graphql/queries";
import dateFormat from "../../utils/dateFormat";

const ReturningToday = () => {
  //query for contracts 
  const { loading, data, error } = useQuery(QUERY_CONTRACTS);
  console.log(data)

  

  return (
    <Card bg="dark" style={{ width: "18rem" }} className="p-2">
      <Card.Body className="text-center text-info">
        <Card.Title>Returning Today</Card.Title>
        <ListGroup>
          <ListGroup.Item className="fw-bold" style={{ background: "violet" }}>
            Select A Contract Below
          </ListGroup.Item>
          {/* map here to dynamically create the contracts coming back today */}
          {data?.contracts.map((each, index) => {
            const today = new Date();
            const todayFormatted = dateFormat(today).replace(/\s+/g, "");
            const eachDateFormatted = each.checkInDate.replace(/\s+/g, "")
            console.log('eachDateFormatted', eachDateFormatted)
            console.log('todayFormatted', todayFormatted)

            //This IF statement renders contracts if they're coming back today.  If you remove it, returningToday shows all contracts
            if(eachDateFormatted === todayFormatted && each.active == true)
              return (
                <Link
                  key={each._id}
                  className={`${
                    index == data.contracts.length - 1 ? "rounded-bottom" : ""
                  }`}
                  style={{ textDecoration: "none" }}
                  to={`/contracts/${each._id}`}
                >
                  <ListGroup.Item className="bg-secondary text-white">
                    {each.user.firstName} {each.user.lastName}'s Rental
                  </ListGroup.Item>
                </Link>
              );
            
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ReturningToday;
