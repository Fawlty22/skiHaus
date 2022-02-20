import React, { useEffect, useState } from 'react';
import { UserSearchForm, EquipmentSearch, ContractSubmit, ContractDateSelection } from '../components/index.js';
import { Card, Row, Col, Container } from "react-bootstrap";

// import { UPDATE_USERS } from '../utils/actions'
// import { CreateContractStoreProvider, useCreateContractContext } from '../utils/CreateContractContext';

const CreateContract = () => {
    // state for navigating through different steps of contract creation 
    const [contractStep, setContractStep] = React.useState({step: '1'});
    // state that handles the contract data, ultimately this state is pushed
    // in a mutation to the database.
    const [contractData, setContractData] = React.useState({
        user: {},
        checkOutDate: '',
        checkInDate: '',
        equipment: {
            skis: [],
            snowboards: [],
            boots: []
        }
    })

    const handleContractNavigation = (event) => {
        setContractStep({
            ...contractStep,
            step: event.target.id
        })
    }



    return (
        <div>
            <Row className="dashboard-row">
                <Col xs={12} md={4} className="dashboard-col">
                    <button class="contract-navigation-button" onClick={handleContractNavigation} type="button" id="1">Select User</button>
                </Col>
                <Col>
                    <button class="contract-navigation-button" onClick={handleContractNavigation} type="button" id="2">Select Dates</button>
                </Col>
                <Col>
                    <button class="contract-navigation-button" onClick={handleContractNavigation} type="button" id="3">Select Equipment</button>
                </Col>
                <Col>
                    <button class="contract-navigation-button" onClick={handleContractNavigation} type="button" id="4">Finalize Contract</button>
                </Col>
            </Row>
            <Container xl="4" id="userSearch" className="text-center">
                <Card.Body className="d-flex justify-content-between flex-column gap-3">
                    {contractStep.step === '1' && <UserSearchForm 
                        contractData={contractData}
                        setContractData={setContractData}
                        contractStep={contractStep}
                        setContractStep={setContractStep}
                    />}
                    {contractStep.step === '2' && <ContractDateSelection 
                        contractData={contractData}
                        setContractData={setContractData}
                        contractStep={contractStep}
                        setContractStep={setContractStep}  
                    />}
                    {contractStep.step === '3' && <EquipmentSearch
                        contractData={contractData}
                        setContractData={setContractData}
                        contractStep={contractStep}
                        setContractStep={setContractStep}
                    />}
                {contractStep.step ==='4' && <ContractSubmit 
                    contractData={contractData} 
                />}
                </Card.Body>
            </Container>
        </div>
    )
}

export default CreateContract