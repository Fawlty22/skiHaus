import React, { useEffect } from "react";
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {QUERY_CONTRACTS} from "../../graphql/queries"



export default function ReturningToday() {

//query for contracts and filter through for the ones coming back today.
const [getContracts, { loading, error, data }] = useQuery(QUERY_CONTRACTS);


  return (
    <Card bg="dark" style={{ width: "18rem" }} className="p-2" >
            {/* This link will be instead inside a .map() that populates the contracts returning today.  We dont want the whole card to link, just the contract id's.  */}
            <Link style={{ textDecoration: "none" }} to="/returning">
              <Card.Body className="text-center">
                <Card.Title style={{ color: "violet" }}>
                  Returning Today
                </Card.Title>
                <ListGroup>

                  <ListGroup.Item className="fw-bold" style={{background: 'violet'}}>Contracts</ListGroup.Item>
                  {/* map here to dynamically create the contracts coming back today */}
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                  <ListGroup.Item>Contract ID#</ListGroup.Item>
                  <ListGroup.Item>Contract ID#</ListGroup.Item>

                </ListGroup>
              </Card.Body>
            </Link>
          </Card>
  )
};

