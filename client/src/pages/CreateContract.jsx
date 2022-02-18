import React, { useEffect, useState } from 'react';
import { UserSearchForm, EquipmentSearch } from '../components/index.js';
import { Card, Row, Col } from "react-bootstrap";

// import { UPDATE_USERS } from '../utils/actions'
// import { CreateContractStoreProvider, useCreateContractContext } from '../utils/CreateContractContext';

const CreateContract = () => {
    // const { data } = useQuery(QUERY_USER)
    const [userSearchShow, setUserSearchShow] = React.useState(false);
    const [contractStep, setContractStep] = React.useState({step: '1'});
    console.log(contractStep)
    const [contractData, setContractData] = React.useState({
        step: 1,
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

    const handleContractSubmit = async (event) => {
        event.preventDefault();
        console.log('contract submitted')
      }

    return (
        <div>
            <Row>
                <Col>
                    <button onClick={handleContractNavigation} type="button" id="1">Select User</button>
                </Col>
                <Col>
                    <button onClick={handleContractNavigation} type="button" id="2">Select Dates</button>
                </Col>
                <Col>
                    <button onClick={handleContractNavigation} type="button" id="3">Select Equipment</button>
                </Col>
            </Row>
            <Card id="userSearch" className="text-center">
                <Card.Body className="d-flex justify-content-between flex-column gap-3">
                    {contractStep.step === '1' && <UserSearchForm 
                        contractData={contractData}
                        setContractData={setContractData}   
                    />}
                    {contractStep.step === '3' && <EquipmentSearch
                        contractData={contractData}
                        setContractData={setContractData}
                    />}
                    {/* {!contractData.user.username ? (
                        <UserSearchForm 
                        show={userSearchShow}
                        // updateContractData = {updateContractData}
                        onHide={() => setUserSearchShow(false)}
                        // userData={data}
                        contractData={contractData}
                        setContractData={setContractData}
                        />
                    ) : 
                        <EquipmentSearch 
                            contractData={contractData}
                            setContractData={setContractData}
                        />
                    } */}
                </Card.Body>
                <button onClick={handleContractSubmit}>Submit Contract</button>
            </Card>
        </div>
    )
}

export default CreateContract