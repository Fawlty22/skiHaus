import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';

const ContractSubmit = ({ contractData }) => {

    const handleContractSubmit = async (event) => {
        event.preventDefault();
        console.log('contract submitted')
    }

    return (
        <div>
            <h2> Review contract details before submitting</h2>
            <Container>
                <Row>
                    <Col>
                        <h2>Check In Date</h2>
                        <span>{contractData.checkInDate}</span>
                    </Col>

                </Row>
            </Container>
            <button onClick={handleContractSubmit}>Submit Contract</button>
        </div>
    )
}

export default ContractSubmit