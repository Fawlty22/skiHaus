import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_CONTRACT } from '../../graphql/mutations';

const ContractSubmit = ({ contractData }) => {
    const [createContract, { data, loading, error }] = useMutation(CREATE_CONTRACT);

    const handleContractSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await createContract({
            variables: {
                active: 'True',
                user: contractData.user.username,
                checkInDate: contractData.checkInDate,
                checkOutDate: contractData.checkOutDate,
                equipment: contractData.equipment
            }
        })
        console.log(mutationResponse)
    }

    return (
        <Card bg="dark">
            <Row className="contract-row">
                <Card.Title style={{ color: "violet" }}>
                    <h2> Review contract details before submitting</h2>
                </Card.Title>
            </Row>
            <Row className="contract-row">
                <Card className="contract-card" bg="dark" style={{ width: "15rem" }}>
                    <Card.Title style={{ color: "violet" }}>
                        <h3>User Details</h3>
                    </Card.Title>
                    <Card.Body className="card-body">
                        <span>
                            Name: {contractData.user.firstName} {contractData.user.lastName}
                        </span>
                    </Card.Body>
                </Card>
                <Card className="contract-card" bg="dark" style={{ width: "15rem" }}>
                    <Card.Title style={{ color: "violet" }}>
                        <h3>Check Out Date</h3>
                    </Card.Title>
                    <Card.Body className="card-body">
                        <span>{contractData.checkOutDate}</span>
                    </Card.Body>
                </Card>
                <Card className="contract-card" bg="dark" style={{ width: "15rem" }}>
                    <Card.Title style={{ color: "violet" }}>
                        <h3>Check In Date</h3>
                    </Card.Title>
                    <Card.Body className="card-body">
                        <span>{contractData.checkInDate}</span>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="contract-row">
                <Card.Title style={{ color: "violet" }}>
                    <h3>Equipment:</h3>
                </Card.Title>

            </Row>
            <Row className="contract-row">
                <Col className="dashboard-col">
                    <Card className="equipment-card" bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h4>Skis</h4>
                        </Card.Title>
                        <Card.Body className="card-body">
                            <ul>
                                {contractData.equipment.skis.map((ski) => (
                                    <li key={ski}>{ski}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="dashboard-col">
                    <Card className="equipment-card" bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h4>Snowboards</h4>
                        </Card.Title>
                        <Card.Body className="card-body">
                            <ul>
                                {contractData.equipment.snowboards.map((snowboard) => (
                                    <li key={snowboard}>{snowboard}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="dashboard-col">
                    <Card className="equipment-card" bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h4>Boots</h4>
                        </Card.Title>
                        <Card.Body className="card-body">
                            <ul>
                                {contractData.equipment.boots.map((boot) => (
                                    <li key={boot}>{boot}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="contract-row">
                <button className="contract-navigation-button" onClick={handleContractSubmit}>Submit Contract</button>
            </Row>
        </Card>
    )
}

export default ContractSubmit