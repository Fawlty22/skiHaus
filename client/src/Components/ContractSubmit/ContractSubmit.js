import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_CONTRACT } from '../../graphql/mutations';

const ContractSubmit = ({ contractData }) => {
    const [createContract] = useMutation(CREATE_CONTRACT);

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
        <div>
            <Container>
                <Row className="contract-row">
                    <Card bg="dark" style={{ width: "40rem", margin: "1rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h2> Review contract details before submitting</h2>
                        </Card.Title>
                    </Card>
                </Row>
                <Row className="contract-row">
                    <Card className="contract-card" bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h3>User Details</h3>
                        </Card.Title>
                        <Card.Body style={{ color: "violet" }}>
                            <span>
                                Name: {contractData.user.firstName} {contractData.user.lastName}
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className="contract-card" bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h3>Check Out Date</h3>
                        </Card.Title>
                        <Card.Body style={{ color: "violet" }}>
                            <span>{contractData.checkOutDate}</span>
                        </Card.Body>
                    </Card>
                    <Card className="contract-card" bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h3>Check In Date</h3>
                        </Card.Title>
                        <Card.Body style={{ color: "violet" }}>
                            <span>{contractData.checkInDate}</span>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="contract-row">
                    <Card bg="dark" style={{ width: "15rem" }}>
                        <Card.Title style={{ color: "violet" }}>
                            <h3>Equipment:</h3>
                        </Card.Title>
                    </Card>
                </Row>
                <Row className="contract-row">
                    <Col className="dashboard-col">
                        <Card bg="dark" style={{ width: "15rem" }}>
                            <Card.Title style={{ color: "violet" }}>
                                <h4>Skis</h4>
                            </Card.Title>
                            <Card.Body style={{ color: "violet" }}>
                                {contractData.equipment.skis.map((ski) => (
                                    <span>{ski}</span>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="dashboard-col">
                        <Card bg="dark" style={{ width: "15rem" }}>
                            <Card.Title style={{ color: "violet" }}>
                                <h4>Snowboards</h4>
                            </Card.Title>
                            <Card.Body style={{ color: "violet" }}>
                                {contractData.equipment.snowboards.map((snowboard) => (
                                    <span>{snowboard}</span>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="dashboard-col">
                        <Card bg="dark" style={{ width: "15rem" }}>
                            <Card.Title style={{ color: "violet" }}>
                                <h4>Boots</h4>
                            </Card.Title>
                            <Card.Body style={{ color: "violet" }}>
                                {contractData.equipment.boots.map((boot) => (
                                    <span>{boot}</span>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <button className="contract-navigation-button" onClick={handleContractSubmit}>Submit Contract</button>
        </div>
    )
}

export default ContractSubmit