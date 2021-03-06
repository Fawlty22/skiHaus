import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { UserSearchForm, EquipmentSearch, ContractSubmit, ContractDateSelection } from '../components';
import { Card, Row, Col, Container } from "react-bootstrap";
import Auth from '../utils/auth'

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

    let employee = Auth.getProfile();
  
    // redirect to login if valid token is not present
    if (!employee) {
      return <Redirect to={"/login"} />
    }


    const handleContractNavigation = (event) => {
        setContractStep({
            ...contractStep,
            step: event.target.id
        })
    }

    return (
        <Container style={{width: "95%"}}>
            <Row className="contract-row">
                <Col className="contract-col">
                    <button 
                        className={`contract-navigation-button ${contractStep.step === '1' && 'navActive'}`} 
                        onClick={handleContractNavigation} 
                        type="button" id="1"
                    >Select User
                    </button>
                </Col>
                <Col className="contract-col">
                    <button className={`contract-navigation-button ${contractStep.step === '2' && 'navActive'}`} onClick={handleContractNavigation} type="button" id="2">Select Dates</button>
                </Col>
                <Col className="contract-col">
                    <button className={`contract-navigation-button ${contractStep.step === '3' && 'navActive'}`} onClick={handleContractNavigation} type="button" id="3">Select Equipment</button>
                </Col>
                <Col className="contract-col">
                    <button className={`contract-navigation-button ${contractStep.step === '4' && 'navActive'}`} onClick={handleContractNavigation} type="button" id="4">Finalize Contract</button>
                </Col>
            </Row>
            <Row >
                <Card.Body className="contract-body">
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
            </Row>
        </Container>
    )
}

export default CreateContract