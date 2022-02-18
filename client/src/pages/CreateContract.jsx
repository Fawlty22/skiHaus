import React, { useEffect, useState } from 'react';
import { UserSearchForm, EquipmentSearch } from '../components/index.js';
import { Card, Row, Col } from "react-bootstrap";

// import { UPDATE_USERS } from '../utils/actions'
// import { CreateContractStoreProvider, useCreateContractContext } from '../utils/CreateContractContext';

const CreateContract = () => {
    // const { data } = useQuery(QUERY_USER)
    const [userSearchShow, setUserSearchShow] = React.useState(false);
    const [contractData, setContractData] = React.useState({
        step: 1,
        user: {},
        checkOutDate: '',
        checkInDate: '',
        equipment: {},
    })

    const handleContractNavigation = (event) => {
        console.log(event)
        setContractData({
            ...contractData,
            step: 1
        })
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
                    {!contractData.user.username ? (
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
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateContract