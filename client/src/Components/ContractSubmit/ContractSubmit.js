import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
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
            <h2> Review contract details before submitting</h2>
            <Container>
                <Row>
                    <Col>
                        <h3>User Details</h3>
                        <span>
                            Name: {contractData.user.firstName} {contractData.user.lastName}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Check Out Date</h3>
                        <span>{contractData.checkOutDate}</span>
                    </Col>
                    <Col>
                        <h3>Check In Date</h3>
                        <span>{contractData.checkInDate}</span>
                    </Col>
                </Row>
                <Row>
                    <h3>Equipment:</h3>
                    <Col>
                        <h4>Skis</h4>
                        {contractData.equipment.skis.map((ski) => (
                            <Col>
                                <span>{ski}</span>
                            </Col>
                        ))}
                    </Col>
                    <Col>
                        <h4>Snowboards</h4>
                        {contractData.equipment.snowboards.map((snowboard) => (
                            <Col>
                                <span>{snowboard}</span>
                            </Col>
                        ))}
                    </Col>
                    <Col>
                        <h4>Boots</h4>
                        {contractData.equipment.boots.map((boot) => (
                            <Col>
                                <span>{boot}</span>
                            </Col>
                        ))}
                    </Col>
                </Row>
            </Container>
            <button onClick={handleContractSubmit}>Submit Contract</button>
        </div>
    )
}

export default ContractSubmit